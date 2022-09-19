"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
class SessionService {
    async execute({ email, password }) {
        if ((email == null && email != '')) {
            return new Error('User does not exist');
        }
        const userRepository = new UserRepository_1.UserRepository();
        const user = await userRepository.findByEmail(email);
        const passwordMatch = password === user.password;
        if (!passwordMatch) {
            return new Error("User or Password incorrect");
        }
        let token = 'authorized';
        return token;
    }
}
exports.SessionService = SessionService;
//# sourceMappingURL=SessionService.js.map