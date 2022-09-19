"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAccessControlListService = void 0;
const PermissionRepository_1 = require("../repositories/PermissionRepository");
const RoleRepository_1 = require("../repositories/RoleRepository");
const UserRepository_1 = require("../repositories/UserRepository");
class CreateUserAccessControlListService {
    async execute({ userId, permissions, roles }) {
        const repoUser = new UserRepository_1.UserRepository();
        console.log('Service:::' + userId + '....' + permissions + '....' + roles);
        const user = await repoUser.findById(userId);
        if (!user) {
            return new Error('User not found');
        }
        const repoPermission = new PermissionRepository_1.PermissionRepository();
        const repoRoles = new RoleRepository_1.RoleRepository();
        const permissionsExists = await repoPermission.findByIds(permissions);
        const rolesExists = await repoRoles.findByIds(roles);
        const result = await repoUser.updateUserPermission(user, userId, permissionsExists, rolesExists);
        return result;
    }
}
exports.CreateUserAccessControlListService = CreateUserAccessControlListService;
//# sourceMappingURL=CreateUserAccessControlListService.js.map