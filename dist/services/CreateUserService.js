"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
class CreateUserService {
    async execute({ name, email, password }) {
        if ((name == null && name != '') || (email == null && email != '') || (password == null && password != '')) {
            return new Error('All fields are required');
        }
        const userRepository = new UserRepository_1.UserRepository();
        const result = await userRepository.save(name, email, password);
        return result;
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map