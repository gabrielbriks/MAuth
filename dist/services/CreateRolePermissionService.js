"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolePermissionService = void 0;
const PermissionRepository_1 = require("../repositories/PermissionRepository");
const RoleRepository_1 = require("../repositories/RoleRepository");
class CreateRolePermissionService {
    async execute({ roleId, permissions }) {
        const repoRole = new RoleRepository_1.RoleRepository();
        const repoPermission = new PermissionRepository_1.PermissionRepository();
        if (!await repoRole.findOneById(roleId)) {
            return new Error('Permission alredy exist');
        }
        const permissionsExists = await repoPermission.findByIds(permissions);
        if (!permissionsExists) {
            return new Error('Permission not exist');
        }
        const result = await repoRole.createRolePermission(roleId, permissionsExists);
        return result;
    }
}
exports.CreateRolePermissionService = CreateRolePermissionService;
//# sourceMappingURL=CreateRolePermissionService.js.map