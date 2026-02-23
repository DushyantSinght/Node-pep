import express from 'express';
const app = express();
// const userRouter = express.Router();
// const productRouter = express.Router();
import { userRouter } from './userRouter.js';
import { productRouter } from './porductRouter.js'; 

// userRouter.get('/', (req, res) => {
//     res.send('user route');
// });
// userRouter.post('/', (req, res) => {
//     res.send('post user route');
// });
// productRouter.get('/', (req, res) => {
//     res.send('product route');
// });
// productRouter.post('/', (req, res) => {
//     res.send('post product route');
// });
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});