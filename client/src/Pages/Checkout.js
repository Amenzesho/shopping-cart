import {
    CardElement, 
    useStripe, 
    useElements
} from '@stripe/react-stripe-js';

// import axios from 'axios';






const Checkout = () => {

    const stripe = useStripe();
    const elements = useElements();

   

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
          }
      
          const result = await stripe.confirmCardPayment('{process.env.SECRET_KEY}', {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'Jenny Rosen',
              },
            }
          });
      
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              // There's a risk of the customer closing the window before callback
              // execution. Set up a webhook or plugin to listen for the
              // payment_intent.succeeded event that handles any business critical
              // post-payment actions.
            }
          }
        };

        return (  
            <form onSubmit={handleSubmit}>
                <h2>15 CAD</h2>
                <CardElement />
                <button type="submit" disabled={!stripe}>Pay</button>
                
             </form>
        );
      



        
    };

    

 
export default Checkout;