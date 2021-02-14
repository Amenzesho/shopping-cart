// loadStripe to initiate stripe. pass it your public key
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Checkout from './Checkout';



const stripePromise = loadStripe("pk_test_51IBDyvF2HDM8CiHYQJfsy5btrP7rN4aZ6jgN1iSx8DYAXcOlbpxVeDpOJ0zZUCFTJwwV6zjBirsx2RHoOQLGJizj00NqqTs3Bx");


const Layout = (props) => {
    return ( 
        
            <Elements stripe={stripePromise}>
                <Checkout />
            </Elements>

        
     );
}
 
export default Layout;