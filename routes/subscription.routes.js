import { Router } from "express";

const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res) => {
  res.send({ title: 'GET all subscriptions' });
});

subscriptionRouter.get('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Subscription details for ID: ${subscriptionId}` });
});

subscriptionRouter.post('/', (req, res) => {
  res.send({ title: 'Create a new subscription' });
});

subscriptionRouter.put('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Update subscription with ID: ${subscriptionId}` });
});

subscriptionRouter.delete('/:id', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Delete subscription with ID: ${subscriptionId}` });
});     

subscriptionRouter.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send({ title: `Get all subscriptions for User ID: ${userId}` });
}); 

subscriptionRouter.put('/:id/cancel', (req, res) => {
  const subscriptionId = req.params.id;
  res.send({ title: `Cancel subscription with ID: ${subscriptionId}` });
});

subscriptionRouter.put('/upcoming-renewals', (req, res) => {
  res.send({ title: `Get Upcoming Renewals` });
});


export default subscriptionRouter;