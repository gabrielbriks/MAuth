"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionRepository = void 0;
const prisma_1 = require("../lib/prisma");
class PermissionRepository {
    async save(name, description) {
        const result = await prisma_1.prisma.permission.create({
            data: {
                name,
                description,
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async findOne(name) {
        const result = await prisma_1.prisma.permission.findFirst({
            where: {
                name
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async listAll() {
        const result = await prisma_1.prisma.permission.findMany()
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async findByIds(permissionsIds) {
        const result = await prisma_1.prisma.permission.findMany({
            where: {
                id: {
                    in: permissionsIds
                }
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
}
exports.PermissionRepository = PermissionRepository;
//# sourceMappingURL=PermissionRepository.js.map