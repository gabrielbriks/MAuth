"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAccessController = void 0;
const CreateUserAccessControlListService_1 = require("../services/CreateUserAccessControlListService");
class CreateUserAccessController {
    async handle(request, response) {
        const { user_id, permissions, roles } = request.body;
        const createUserACLService = new CreateUserAccessControlListService_1.CreateUserAccessControlListService();
        const result = await createUserACLService.execute({ userId: user_id, permissions, roles });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateUserAccessController = CreateUserAccessController;
//# sourceMappingURL=CreateUserAccessControlListController.js.map