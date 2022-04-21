import express from "express";
import * as JneController from "./jne.controller";

const route = express.Router();

/**
 * endpoint simulation
 * */

/** create shipment */
route.post("/jne/pickupcashless", JneController.createShipment);

export default route;
