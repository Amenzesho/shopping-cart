import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
//import Search from './components/Search/Search';
import styled from 'styled-components';
import OrderSummary from './Pages/OrderSummary';
import './App.css';
//const buttonText = "ADD TO CART";


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
    }

    

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
        <div className="app">
            <ProductList >
                {products ? getProducts(): <div></div>}
               

            </ProductList>
            <OrderSummary 
                onAdd={onAdd}
                orderItems={orderItems}
                >   
            </OrderSummary>
                
            
            

            
        </div>
      
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


