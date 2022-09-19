"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const SessionService_1 = require("../services/SessionService");
class SessionController {
    async handle(request, response) {
        const { email, password } = request.body;
        const sessionService = new SessionService_1.SessionService();
        const result = await sessionService.execute({ email, password });
        return response.json({ token: result });
    }
}
exports.SessionController = SessionController;
//# sourceMappingURL=SessionController.js.map