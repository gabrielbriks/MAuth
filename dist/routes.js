"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreatePermissionController_1 = require("./controllers/CreatePermissionController");
const CreateProductController_1 = require("./controllers/CreateProductController");
const CreateRoleController_1 = require("./controllers/CreateRoleController");
const CreateRolePermissionController_1 = require("./controllers/CreateRolePermissionController");
const CreateUserAccessControlListController_1 = require("./controllers/CreateUserAccessControlListController");
const CreateUserController_1 = require("./controllers/CreateUserController");
const GetAllProductsController_1 = require("./controllers/GetAllProductsController");
const SessionController_1 = require("./controllers/SessionController");
const permissions_1 = require("./middleware/permissions");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (req, res) => { res.send('Está funcionando ...'); });
//routes.post /products
routes.post('/product', (0, permissions_1.can)(['create_product']), new CreateProductController_1.CreateProductController().handle);
//routes.get /products
routes.get('/products', (0, permissions_1.can)(['list_products']), new GetAllProductsController_1.GetAllProductsController().handle);
//routes.post /users
routes.post('/user/new', (0, permissions_1.is)(['ADMIN', 'MASTER']), new CreateUserController_1.CreateUserController().handle);
//routes.post /login
routes.post('/login', new SessionController_1.SessionController().handle);
routes.post('/role', (0, permissions_1.is)(['ADMIN', 'MASTER']), new CreateRoleController_1.CreateRoleController().handle);
routes.post('/permission', (0, permissions_1.is)(['ADMIN', 'MASTER']), new CreatePermissionController_1.CreatePermissionController().handle);
routes.post('/user/acl', (0, permissions_1.is)(['ADMIN', 'MASTER']), new CreateUserAccessControlListController_1.CreateUserAccessController().handle);
routes.post('/roles/:roleId', (0, permissions_1.is)(['ADMIN', 'MASTER']), new CreateRolePermissionController_1.CreateRolePermissionController().handle);
//# sourceMappingURL=routes.js.map