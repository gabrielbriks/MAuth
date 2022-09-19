"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleController = void 0;
const CreateRoleService_1 = require("../services/CreateRoleService");
class CreateRoleController {
    async handle(request, response) {
        const { name, description } = request.body;
        const service = new CreateRoleService_1.CreateRoleService();
        const result = await service.execute({ name, description });
        if (result instanceof Error)
            return response.status(400).json(result.message);
        return response.json(result);
    }
}
exports.CreateRoleController = CreateRoleController;
//# sourceMappingURL=CreateRoleController.js.map