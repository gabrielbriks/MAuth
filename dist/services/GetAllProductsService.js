"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductsService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
class GetAllProductsService {
    async execute() {
        const productRepository = new ProductRepository_1.ProductRepository();
        const result = await productRepository.listAll();
        return result;
    }
}
exports.GetAllProductsService = GetAllProductsService;
//# sourceMappingURL=GetAllProductsService.js.map