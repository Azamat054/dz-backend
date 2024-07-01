import { Router } from 'express';
import userRouter from './users/user-router';
// other routers can be imported here

const globalRouter = Router();


globalRouter.use("/user", userRouter);


// other routers can be added here

export default globalRouter;