import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (re, res) => {
    const products = await Product.find({});
    res.send( products );
}));



productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
   
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send( product );
        
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
}))


productRouter.post('/', expressAsyncHandler(async (req, res) => {
    const product = new Product({
        name: req.body.name, image: req.body.image,
        description: req.body.description, price: req.body.price,
        countInStock: req.body.price, category: req.body.category,
        brand: req.body.category
        
    });
    const createdProduct = await product.save()
    res.send({
        _id: createdProduct._id,
        
        name:createdProduct.name,
        image:
        createdProduct.image,
        description: createdProduct.description,
        price: createdProduct.price,
        countInStock: createdProduct.countInStock,
        category: createdProduct.category,
        brand:createdProduct.brand,
    })
}))
export default productRouter;