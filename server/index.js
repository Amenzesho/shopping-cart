import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import productsRoute from './routes/products.js';

const app = express();

app.use('/products' , productsRoute);


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTTION_URL = "mongodb+srv://adminuser:user123@cluster0.84iyh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000

mongoose.connect(CONNECTTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on Amazing cloud: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
})