import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', authorize, getUser);

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
