import express from "express";
import { routes } from "./src/routes";
import { jsonValidator } from "./src/middlewares";


const app = express();
const PORT = 3000

app.use(express.json());
app.use(jsonValidator);
app.use(routes);

app.listen(PORT, () => {
    console.log(`Running at: http://localhost:${ PORT }`);
});