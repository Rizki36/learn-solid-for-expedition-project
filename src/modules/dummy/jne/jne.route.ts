import express from "express";
import JneController from "./jne.controller";

const route = express.Router();
const jneController = new JneController();

/**
 * endpoint simulation
 * */

/** create shipment */
route.post("/jne/pickupcashless", jneController.createShipment);

export default route;
