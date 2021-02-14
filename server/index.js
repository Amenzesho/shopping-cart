import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import productsRoute from './routes/products.js';
//import Stripe from 'stripe';


// initialize express
const app = express();

// create a paymentIntent with the order amount and currency
// const paymentIntent = await Stripe.payment.create({
//     amount: calculateOrderAmount(items),
//     currency: "cad"
// });

// res.send({
//     clientSecret: paymentIntent.client_secret
// });

app.get('secret', async(req, res) => {
    const intent = // fetch or create the paymentInent
    res.json({client_secret: intent.client_secret});
});

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