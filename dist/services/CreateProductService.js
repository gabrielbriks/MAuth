"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
class CreateProductService {
    async execute({ name, price }) {
        if (name == null) {
            return new Error("Product name cannot be null");
        }
        if (price == null || price <= 0) {
            return new Error("Product price cannot be null or zero");
        }
        const createProductService = new ProductRepository_1.ProductRepository();
        const product = await createProductService.save(name, price);
        return product;
    }
}
exports.CreateProductService = CreateProductService;
//# sourceMappingURL=CreateProductService.js.map