import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptons } from "../controllers/subscription.controlller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/",authorize, createSubscription);
subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET All subscription details" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE a subscription details" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a subscription details" });
});
subscriptionRouter.get("/:id", authorize,getUserSubscriptons);
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCLE a subscription details" });
});
subscriptionRouter.put("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});
export default subscriptionRouter;
