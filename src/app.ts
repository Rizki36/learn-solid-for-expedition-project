import express, { Application, NextFunction, Request, Response } from "express";
import { cors } from "cors-ts";
import indexRoutes from "./modules/routes";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

// import swaggerUi from "swagger-ui-express";
// import { optionsSwaggerUI, swaggerSpec } from "./lib/DocsSwagger";

const cookieParser = require("cookie-parser");
const port = process.env.PORT;

class App {
    public readonly application: Application;

    constructor() {
        this.application = express();

        // init plugins
        this.plugins();

        // init routes
        this.routes();
    }

    private plugins() {
        this.application.use(
            cors({
                origin: ["http://localhost:3000"],
                credentials: true,
            })
        );
        this.application.use(express.json());
        this.application.use(express.urlencoded());
        this.application.use(cookieParser());
        this.application.use(morgan("common"));
    }

    private async routes() {
        this.application.use(indexRoutes);

        // Catch error 404 endpoint not found
        this.application.use("*", (req: Request, res: Response) => {
            res.status(404).send({
                msg: "Sorry, HTTP resource you are looking for was not found.",
            });
        });

        // Default Error handler
        this.application.use(function (
            err: any,
            req: Request,
            res: Response,
            next: NextFunction
        ) {
            console.log(err);
            console.log("errrrr");
        });
    }

    public async run() {
        console.log(`Node environment: ${process.env.NODE_ENV}`);

        this.application.listen(port, () => {
            console.log(
                `Example app listening at port http://localhost:${port}`
            );
        });
    }
}

export default App;
