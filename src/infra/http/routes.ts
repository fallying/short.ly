import { Router } from "express";
import { createShortenedLinkController } from "../../domain/links/useCases/CreateShortenedLink";
import { createShortenedQRCodeController } from "../../domain/links/useCases/CreateShortenedQRCode";
import { showShortenedLinkController } from "../../domain/links/useCases/ShowShortenedLink";
import { createUserController } from "../../domain/users/useCases/CreateUser";
import { getUserController } from "../../domain/users/useCases/GetUser";

const routes = Router();

routes.post("/short", createShortenedLinkController.handle);
routes.get("/short/:id", showShortenedLinkController.handle);
routes.get("/qrcode/:id", createShortenedQRCodeController.handle);

routes.post('/users', createUserController.handle);
routes.get('/users', getUserController.handle);

export { routes };
