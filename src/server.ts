import express from "express";
import { routes } from "./routes";


const app = express();
const port = process.env.PORT || 1234;
app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server is running in port ${port}`));
