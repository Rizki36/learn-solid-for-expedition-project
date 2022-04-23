import express from "express";
import JneController from "./jne.controller";

const route = express.Router();
const jneController = new JneController();

/**
 * endpoint simulation
 * */

/** create order */
route.post("/jne/pickupcashless", jneController.createOrder);

export default route;
