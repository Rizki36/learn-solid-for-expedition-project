import express from "express";

const route = express.Router();
import jneRoute from "./dummy/jne/jne.route";

route.use("/jne", jneRoute);

export default route;
