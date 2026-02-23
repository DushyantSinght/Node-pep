import express from 'express';
const app = express();
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send('product route');
});
productRouter.post('/', (req, res) => {
    res.send('post product route');
});
export { productRouter };