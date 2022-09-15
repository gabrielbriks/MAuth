import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

type BodyType = {
  email: string;
  password: string;
}

class SessionController {
  async handle(request: Request, response: Response) {
    const {email, password}: BodyType = request.body;
    const sessionService = new SessionService();

    const result = await sessionService.execute({email, password});

    return response.json({token: result});
  }
}

export { SessionController };

