"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../services/CreateUserService");
class CreateUserController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const createUserService = new CreateUserService_1.CreateUserService();
        const result = await createUserService.execute({ name, email, password });
        if (result instanceof Error)
            return response.status(400).json(result.message);
        return response.json(result);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map