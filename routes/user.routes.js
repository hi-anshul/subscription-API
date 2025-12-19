import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send({ title: 'GET all users' });
});

userRouter.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send({ title: `User Profile for ID: ${userId}` });
});

userRouter.post('/', (req, res) => {
  res.send({ title: 'Create a new user' });
});

userRouter.put('/:id', (req, res) => {
  const userId = req.params.id;
  res.send({ title: `Update user with ID: ${userId}` });
});

userRouter.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send({ title: `Delete user with ID: ${userId}` });
});


export default userRouter;
