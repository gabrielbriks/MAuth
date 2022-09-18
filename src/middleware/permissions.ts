import { Permission } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

type UserCustomType = {
  id: string;
  name: string;
  email: string;
  password: string;
  UserPermission: [
    {
      Permission: Permission
    }
  ],
  UserRoles: [
    {
      Role: {
        id:string,
        name:string,
        description: string,
        PermissionRole: [
          {
            Permission: Permission
          }
        ]
      }
    }
  ];
}

function can(permissionsRoute?: string[],){
  return async(request: Request, response: Response, next: NextFunction) => {

    // const {userId} = request;
    const userId = String(request.headers['userid']);
    
    const user: UserCustomType= await new UserRepository().findById(userId);

    console.log(JSON.stringify(user, null, 2));

    if(!user)
      return response.status(400).json('Não existe usuário logado para buscar permissões.');
    

    if(!user.UserPermission.length && !user.UserRoles.length)
      return response.status(401).json('Não possuí permissões para acessar.');
    
    
    let permissionsExists = user.UserPermission
      .map((itemPermission) => itemPermission.Permission.name)
      .some((permissionName) => permissionsRoute?.includes(permissionName));


    if(!permissionsExists){
      let permissionOfRoles = user.UserRoles
        .map((RolePermission) => { return RolePermission.Role.PermissionRole.map(item => item.Permission)});

       const rolePermissionsNames= permissionOfRoles
        .map( itemPermission => {return itemPermission.map(it => it.name)})

      console.log(rolePermissionsNames)

      permissionsExists = rolePermissionsNames[0]
      .some((item) => permissionsRoute?.includes(item));


    }


    if(!permissionsExists)
      return response.status(401).end();


    next();
  }
}

function is(rolesRoute: string[],){
  return async(request: Request, response: Response, next: NextFunction) => {

    //TODO: alter var permission in request; Essa informação sera inserira em "request.userID", após gerar token
    const userId = String(request.headers['userid']);//request;

    const user:UserCustomType = await new UserRepository().findById(userId);
    
    console.log(userId);

    if(!user)
      return response.status(400).json('User not exist');

      console.log('user.UserRoles::::', user.UserRoles);
    
    const rolesExists = user.UserRoles
      .map((itemRole) => itemRole.Role.name)
      .some((roleName) => rolesRoute.includes(roleName));

    if(!rolesExists)
      return response.status(401).end();

    next();
  }
}


export { can, is };

