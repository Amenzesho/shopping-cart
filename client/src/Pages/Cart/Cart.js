
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import Layout from '../Layout';


const Cart = ({orderItems, onAdd, onRemove}) => {

    
    
//const {orderItems, onAdd, onRemove } = props;

const itemsPrice = orderItems.reduce((a,c) => a + c.price * c.qty, 0);


    

    return ( 
        <SummaryWrapper>
            
            
            <Order>Order Summary</Order>
            <div>
                {orderItems.length === 0 && <div>Order is empty</div>}
                {orderItems.map((item) => (
                    
                    <div key={item.id} >
                      {console.log(item)}
                       <img src={item.imagePath}  alt="tops"  style={{height:"150px"}}/>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <div>
                            <button onClick={() => onAdd(item)}>+</button>
                            <button onClick={() => onRemove(item)}>-</button>

                        </div> 
                        <div>
                            {item.qty} x {item.price}
                        </div>   
                        
                                         
                   </div>


                    
                ))}
                {orderItems.length !== 0 && (
                    <TotalButton>{`PAY ${itemsPrice || 0} CAD`}</TotalButton>

                )}
                <button >
                    <Link to="/layout" >Go to Checkout</Link>
                </button>
                

            </div>
            

        </SummaryWrapper>
            
           
        
     );
}
 
export default Cart;

const SummaryWrapper = styled.div `
position: relative;
width: 396px;
height: 560px;
// left: 45px;
// top: 93px;
background: #C4C4C4;
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
border-radius: 15px;
margin: 40px;

`;

const Order = styled.h1 `
//position: absolute;
display: flex;
justify-content: center;
align-items:center;
width: 180px;
height: 40px;
//left: 75px;
// top: 189px;

font-family: Gilroy;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;

color: #000000;


`;

const TotalButton = styled.button `
    font-size:16px;
    font-family: poppins;
    font-weight: 300;
    border-radius: 5px;
    width: 100px;
    height: 50px;
    color: white;
    background: black;

`;