import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        customerName: { type: String, trim: true, required: true },
        customerEmail: { type: String, trim: true, match: [/.+\@.+\..+/, 'Please fill a valid email'], required: true },
        ordered_by: { type: mongoose.Schema.ObjectId, ref: 'User' },
        deliveryAddress: {
            street: { type: String, required: 'Street is required' },
            
            region: { type: String, required: 'Region is required' },
            city: { type: String, required: 'city is required' }
            
        },
        paymentId: {},
        products: [CartItemSchema],
    }
)