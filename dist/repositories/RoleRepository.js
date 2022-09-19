"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const prisma_1 = require("../lib/prisma");
class RoleRepository {
    async save(name, description) {
        const result = await prisma_1.prisma.role.create({
            data: {
                name,
                description,
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async createRolePermission(roleId, permissions) {
        try {
            let result = prisma_1.prisma.$transaction(permissions.map(item => prisma_1.prisma.permissionRole.upsert({
                select: {
                    Role: true,
                    Permission: true
                },
                where: {
                    role_id_permission_id: {
                        role_id: roleId,
                        permission_id: item.id
                    }
                },
                update: {},
                create: {
                    permission_id: item.id,
                    role_id: roleId
                }
            }))).then(data => data);
            return result;
        }
        catch (error) {
            throw new Error(`${error}`);
        }
    }
    async findOneByName(name) {
        const result = await prisma_1.prisma.role.findFirst({
            where: {
                name
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async listAll() {
        const result = await prisma_1.prisma.role.findMany()
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async findByIds(rolesIds) {
        const result = await prisma_1.prisma.role.findMany({
            where: {
                id: {
                    in: rolesIds
                }
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async findOneById(roleId) {
        const result = await prisma_1.prisma.role.findFirst({
            where: {
                id: roleId
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
}
exports.RoleRepository = RoleRepository;
//# sourceMappingURL=RoleRepository.js.map