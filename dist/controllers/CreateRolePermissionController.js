"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolePermissionController = void 0;
const CreateRolePermissionService_1 = require("../services/CreateRolePermissionService");
class CreateRolePermissionController {
    async handle(request, response) {
        const { roleId } = request.params;
        const { permissions } = request.body;
        const service = new CreateRolePermissionService_1.CreateRolePermissionService();
        const result = await service.execute({ roleId, permissions });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateRolePermissionController = CreateRolePermissionController;
//# sourceMappingURL=CreateRolePermissionController.js.map