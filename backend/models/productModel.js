import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    image: { data: Buffer, contentType: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;