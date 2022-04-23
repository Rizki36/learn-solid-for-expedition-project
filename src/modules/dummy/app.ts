import express, { Application, NextFunction, Request, Response } from "express";
import { cors } from "cors-ts";
import morgan from "morgan";
import env from "../../configs/env";
import jneRoute from "./jne/jne.route";

const cookieParser = require("cookie-parser");
const port = env.dummy_server_port;

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
        this.application.use(morgan("short"));
    }

    private async routes() {
        this.application.use("/jne", jneRoute);

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
        });
    }

    public async run() {
        this.application.listen(port, () => {
            console.log(`Dummy server vendor : http://localhost:${port}`);
        });
    }
}

export default App;
