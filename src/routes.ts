import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateRolePermissionController } from "./controllers/CreateRolePermissionController";
import { CreateUserAccessController } from "./controllers/CreateUserAccessControlListController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";
import { can, is } from "./middleware/permissions";

const routes = Router();

routes.get('/', (req, res) => {res.send('Está funcionando ...')});

//routes.post /products
routes.post('/product', can(['create_product']), new CreateProductController().handle);

//routes.get /products
routes.get('/products', can(['list_products']), new GetAllProductsController().handle);

//routes.post /users
routes.post('/user/new', is(['ADMIN', 'MASTER']), new CreateUserController().handle);
//routes.post /login
routes.post('/login', new SessionController().handle);


routes.post('/role', is(['ADMIN', 'MASTER']), new CreateRoleController().handle);

routes.post('/permission', is(['ADMIN', 'MASTER']), new CreatePermissionController().handle);

routes.post('/user/acl', is(['ADMIN', 'MASTER']), new CreateUserAccessController().handle);

routes.post('/roles/:roleId', is(['ADMIN', 'MASTER']), new CreateRolePermissionController().handle);

export { routes };

