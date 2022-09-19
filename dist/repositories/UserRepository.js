"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_1 = require("../lib/prisma");
class UserRepository {
    // async createACL(user: UserSaveType){
    async updateUserPermission(user, userID, permission, role) {
        try {
            await prisma_1.prisma.$transaction(permission.map((itemPermission) => prisma_1.prisma.userPermission.upsert({
                where: {
                    user_id_permission_id: {
                        permission_id: itemPermission.id,
                        user_id: userID,
                    }
                },
                create: { user_id: userID, permission_id: itemPermission.id },
                update: {},
            })));
            await prisma_1.prisma.$transaction(role.map((itemRole) => prisma_1.prisma.userRoles.upsert({
                where: {
                    user_id_role_id: {
                        role_id: itemRole.id,
                        user_id: userID
                    }
                },
                create: { user_id: userID, role_id: itemRole.id },
                update: {},
            })));
        }
        catch (error) {
            throw new Error(`${error}`);
        }
        user.role = role;
        user.permission = permission;
        return user;
    }
    async save(name, email, password) {
        const result = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async findByEmail(email) {
        const result = await prisma_1.prisma.user.findFirst({
            where: {
                email
            },
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    //Retorna os dados do usuário
    async findOne(userId) {
        const result = await prisma_1.prisma.user.findFirst({
            where: {
                id: userId
            },
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    ///Retorna dados do usuário e suas Roles e Permissions
    async findById(userId) {
        const result = await prisma_1.prisma.user.findFirst({
            where: {
                id: userId
            },
            include: {
                UserPermission: {
                    select: {
                        Permission: {
                            select: {
                                id: true,
                                name: true,
                                description: true
                            }
                        }
                    }
                },
                UserRoles: {
                    select: {
                        Role: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                PermissionRole: {
                                    select: {
                                        Permission: {
                                            select: {
                                                id: true,
                                                name: true,
                                                description: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map