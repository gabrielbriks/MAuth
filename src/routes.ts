import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";

const routes = Router();

routes.get('/', (req, res) => {res.send('Está funcionando ...')});

//routes.post /products
routes.post('/product', new CreateProductController().handle)

//routes.get /products
routes.get('/products', new GetAllProductsController().handle)

//routes.post /users
routes.post('/user', new CreateUserController().handle)
//routes.post /login
routes.post('/login', new SessionController().handle)





export { routes };

