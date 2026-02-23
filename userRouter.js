import express from 'express';
const app = express();
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('user route');
});
userRouter.post('/', (req, res) => {
    res.send('post user route');
});
export { userRouter };