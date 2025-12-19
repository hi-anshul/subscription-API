import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (req, res) => {
  // Handle user login
  res.send({title: 'Sign-up endpoint'}  );
});

authRouter.post('/sign-in', (req, res) => {
  // Handle user registration
  res.send({title: 'Sign-in endpoint'});
});

authRouter.post('/sign-out', (req, res) => {
  // Handle user logout
  res.send({title: 'Sign-out endpoint'});
});

export default authRouter;