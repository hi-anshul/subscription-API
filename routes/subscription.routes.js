import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
import { get } from "mongoose";
const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'GET all subscriptions' });
});

subscriptionRouter.get('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Subscription details for ID: ${subscriptionId}` });
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Update subscription with ID: ${subscriptionId}` });
});

subscriptionRouter.delete('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Delete subscription with ID: ${subscriptionId}` });
});     

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions); 

subscriptionRouter.put('/:id/cancel', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Cancel subscription with ID: ${subscriptionId}` });
});

subscriptionRouter.put('/upcoming-renewals', (req, res) => {
  res.send({ title: `Get Upcoming Renewals` });
});


export default subscriptionRouter;