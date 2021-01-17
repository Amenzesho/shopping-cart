import ProductMessage from '../models/productMessage.js';

export const getProducts = async (req, res) => {
    try {
        const productMessage = await ProductMessage.find();

        console.log(productMessage);
        res.status(200).json(productMessage);

    } catch(error) {
        res.status(404).json({message: error.message})

    }
};

export const newProduct = async (req, res) => {
    const product = req.body;

    console.log(product)

    const newProduct = new ProductMessage(product);
    

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
        
    } catch (error) {
        res.status(409).json({message:error.message});
        
    }
};