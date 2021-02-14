import Stripe from 'stripe';


//create an instance of stripe
const stripe =  Stripe("sk_test_51IBDyvF2HDM8CiHYNhjdIrK0vi8eE673R6j0uybiEGpvzABgzIqYseTR4JXHjlG4z5p25c4WPxfepQXMXSzIJ7nQ00KVMln1hV")

// const response = fetch('/secret').then((response) => {
//     return response.json();
//   }).then((responseJson) => {
//     const clientSecret = responseJson.client_secret;
//     // Call stripe.confirmCardPayment() with the client secret.
//   });

    const callStripe = async () => {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,
            currency: 'cad',
            payment_method_types: ['card'],
            receipt_email: 'jenny.rosen@example.com',

    }
    
    
});
