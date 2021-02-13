import Product from "../models/productModel"

const decreaseQuantity = async (req, res, next) => {
    let bulkOps = req.body.order.products.map((item) => {
        return {
            "updateOne": {
                "filter": { "_id": item.product._id },
                "update": {"$inc": {"quantity": -item.quantity} }
            }
        }
    })
    try {
        await Product.bulkWrite(bulkOps, {})
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not update product"
        })
    }
}