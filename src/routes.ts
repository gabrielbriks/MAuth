import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateUserAccessController } from "./controllers/CreateUserAccessControlListController";
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


routes.post('/role', new CreateRoleController().handle)

routes.post('/permission', new CreatePermissionController().handle)

routes.post('/user/acl', new CreateUserAccessController().handle)

export { routes };

