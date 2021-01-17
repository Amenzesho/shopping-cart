import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
    title: String,
    price: String,
    colors: [String],
    size: [String],
    imagePath: String

});

const ProductMessage = mongoose.model('ProductMessage', productSchema);

export default ProductMessage;