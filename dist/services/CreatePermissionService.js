"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionService = void 0;
const PermissionRepository_1 = require("../repositories/PermissionRepository");
class CreatePermissionService {
    async execute({ name, description }) {
        const repo = new PermissionRepository_1.PermissionRepository();
        if (await repo.findOne(name)) {
            return new Error('Permission alredy exist');
        }
        const result = await repo.save(name, description);
        return result;
    }
}
exports.CreatePermissionService = CreatePermissionService;
//# sourceMappingURL=CreatePermissionService.js.map