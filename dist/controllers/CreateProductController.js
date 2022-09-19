"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../services/CreateProductService");
class CreateProductController {
    async handle(request, response) {
        const { name, price } = request.body;
        const createProductService = new CreateProductService_1.CreateProductService();
        const result = await createProductService.execute({ name, price });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map