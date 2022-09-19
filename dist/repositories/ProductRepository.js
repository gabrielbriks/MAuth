"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const prisma_1 = require("../lib/prisma");
class ProductRepository {
    async save(name, price) {
        const result = await prisma_1.prisma.product.create({
            data: {
                name,
                price
            }
        })
            .then(data => data)
            .catch(error => error);
        return result;
    }
    async listAll() {
        const result = await prisma_1.prisma.product.findMany({})
            .then(data => data)
            .catch(error => error);
        return result;
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map