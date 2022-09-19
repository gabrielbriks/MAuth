"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleService = void 0;
const RoleRepository_1 = require("../repositories/RoleRepository");
class CreateRoleService {
    async execute({ name, description }) {
        const repo = new RoleRepository_1.RoleRepository();
        if (await repo.findOneByName(name)) {
            return new Error('Role alredy exist');
        }
        const result = await repo.save(name, description);
        return result;
    }
}
exports.CreateRoleService = CreateRoleService;
//# sourceMappingURL=CreateRoleService.js.map