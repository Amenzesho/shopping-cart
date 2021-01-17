import express from 'express';
import {getProducts, newProduct} from '../controllers/products.js';

const router = express.Router();

router.get('/',  getProducts);
router.post('/',  newProduct);



export default router;