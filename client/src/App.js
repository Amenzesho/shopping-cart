import React, {useState} from 'react';
import Products from './components/Products/Products';
import styled from 'styled-components';
//import OrderSummary from './Pages/OrderSummary';
import './App.css';
import Layout from './Pages/Layout';
import HeaderNav from './components/Header/Header';
import Blog from './Pages/Blog/Blog';
import Brand from './Pages/Brand/Brand';
import Cart from './Pages/Cart/Cart';
import Editorials from './Pages/Editorials/Editorials';
import Clothing from './Pages/Clothing/Clothing';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';





const App = () => {
    const [orderItems, setOrderItems] = useState([]);


    const onAdd = (product) => {
        const exist = orderItems.find(x => x.id === product.id);
        if(exist) {
            setOrderItems(orderItems.map((x) => 
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x

            ));
        }else {
            setOrderItems([...orderItems, {...product, qty:1}])
        }
    };

    const onRemove = (product) => {
        const exist = orderItems.find((x) => x.id === product.id);
        if(exist.qty === 1) {
            setOrderItems(orderItems.filter((x) => x.id !== product.id));

        } else {
            setOrderItems(orderItems.map((x) => 
            x.id === product.id ? {...exist, qty: exist.qty - 1} : x

        ));

        }
        
        
        
    };

    

    const getProducts = () => {
        return products.map(item => {
            return (
                <Products 
                
                // getDetails={getDetails}
                product={item}
                key={item.id}
                title={item.title} 
                price={item.price}
                image={item.imagePath}
                buttonText = "ADD TO CART"
                onAdd={onAdd}

                />
            )
        });

    };

    

    return (  
    <Router>     
        <div className="app">
            <HeaderNav />
            <hr></hr>
            <Switch>
            <Route path="/" exact cpmponent={App} />
            <Route path="/blog" component={Blog} />
            <Route path="/brand" component={Brand} />
            <Route path="/cart" component={Cart} />
            <Route path="/editorials" component={Editorials} />
            <Route path="/clothing" component={Clothing} />
            <Route path="/layout"  component={Layout} />

            </Switch>
            
            <ProductList >
                {products ? getProducts(): <div></div>}
            </ProductList>
            {/* <Cart 
                onAdd={onAdd}
                onRemove={onRemove}
                orderItems={orderItems}
                >   
            </Cart> */}
            <Layout></Layout>      
        </div>
    </Router>
      
    );

        
}
 
export default App;

const ProductList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;

`;


const products = [
    {
        id: 0,
        title: 'orange sweatshirt',
        price: 15,
        colors: ['red', 'blue', 'black'],
        size: ['small', 'medium', 'large'],
        imagePath: 'https://images.topshop.com/i/TopShop/TS23Y69TRST_M_1.jpg?$w1300$&fmt=webp&qlt=80'

    },

    {
        id: 1,
        title: 'maroon sweatshirt',
        price: 15,
        colors: ['red', 'blue', 'black'],
        size: ['small', 'medium', 'large'],
        imagePath: 'https://images.topshop.com/i/TopShop/TS09H60TBRN_M_1.jpg?$w1000$&fmt=webp&qlt=80'
    },

    {
        id: 2,
        title: 'beige hoodie',
        price: 15,
        colors: ['red', 'blue', 'black'],
        size: ['small', 'medium', 'large'],
        imagePath: 'https://images.topshop.com/i/TopShop/TS04A63TMNK_M_1.jpg?$w1000$&fmt=webp&qlt=80'
    }




];


