import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUser } from "./GetUser";

class GetUserController {

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const getUser = container.resolve(GetUser);

            const user = await getUser.run(String(request.query.name))

            return response
                .status(200)
                .json(user)

        } catch (error) {
            return response
                .status(400)
                .json({ message: error.message })
        }
    }
}

export { GetUserController };
