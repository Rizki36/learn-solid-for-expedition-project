import App from "./src/app";
import env from "./src/configs/env";
import ServerDummy from "./src/modules/dummy/app";

if (env.environment === "development") {
    const serverDummy = new ServerDummy();
    serverDummy.run();
}

const app = new App();
app.run();
