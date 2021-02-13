import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
import formidable from 'formidable';
import fs from 'fs';

const productRouter = express.Router();


productRouter.post('/', expressAsyncHandler(async (req, res) => {
    const form = new formidable.IncomingForm({ keepExtensions: true })
    form.parse(req, async(err, fields, files) => {
        if (err) {
            return res.status(400).json({error: "Photo could not be uplaoded!"})
        }
        console.log("files", files);
        let product = new Product(fields)
        if (files.image) {
            product.image.data = fs.readFileSync(files.image.path)
            product.image.contentType = files.image.type;
            console.log(product)
        }
        product.save((err, result) => {
            if (err) {
                return res.status(400).json(err)
            };
            res.status(200).send("success", result);
        }
) 
    })
   
})
);


productRouter.get('/', expressAsyncHandler(async (req, res) => {
   
    const products = await Product.find({});
    

    res.send(products);
}));



productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
   
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    
    if (product) {
        res.send(product);
        
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
}));



// productRouter.post('/', expressAsyncHandler(async (req, res) => {
//     let form = new formidable.IncomingForm()
//     form.keepExtensions = true
//     form.parse(req, async (err, fields, files) => {
//         if (err) {
//             return res.status(400).json({ error: "Image could not be uploaded" })
//         }
//         let product = new Product(fields)
//         if (files.image) {
//             product.image.data = fs.readFileSync(files.image.path)
//             product.image.contentType = files.image.type
//         }
//         product.save((err, result) => {
//             if (err) {
//                 return res.status(400).json(err)
//             }
//             res.status(200).json(result)
//         })
//     });
    
//     /* const product = new Product({



            

//         name: req.body.name, image: req.file,
//         description: req.body.description, price: req.body.price,
//         countInStock: req.body.price, category: req.body.category,
//         brand: req.body.category
        
//     });
//  */
//     /* const createdProduct = await product.save()
//     res.send({
        
//         name:createdProduct.name,
//         image:
//         createdProduct.image,
//         description: createdProduct.description,
//         price: createdProduct.price,
//         countInStock: createdProduct.countInStock,
//         category: createdProduct.category,
//         brand:createdProduct.brand,
//     }) */
    
// }))



export default productRouter;