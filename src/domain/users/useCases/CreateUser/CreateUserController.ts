import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUser } from "./CreateUser";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const createUser = container.resolve(CreateUser);

            const user = await createUser.run(request.body)

            return response
                .status(201)
                .json(user)

        } catch (error) {
            return response
                .status(400)
                .json({ message: error.message })
        }
    }
}

export { CreateUserController };
