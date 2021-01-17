// import {useState} from 'react';
import styled from 'styled-components';
//import orange from '../Images/orange.webp';

const Products = (props) => {

    const { product, onAdd} = props;

  

    


    return ( 

        
            <ProductContainer>
                
                <Img src={props.image} alt="tops" />
                
                <ProductTextContainer>
                    <ProductText>{props.title}</ProductText>
                    <ProductPrice>{`${props.price} CAD`}</ProductPrice>
                    <ProductButton onClick={() => onAdd(product)}>{props.buttonText}</ProductButton>
                </ProductTextContainer>
                
        
            
            </ProductContainer>

        
            


        
        
     );
}
 
export default Products;





const ProductContainer = styled.div `
    position: relative;
     width: 350px;
     height: 650px;
     border: 1px solid black;
    transition: 1.2s;
    
    :hover{
        transform:scale(1.2);
    }
    
`;

const Img = styled.img `
    background-image :(${props => props.image});
    width: 100%;
    
    

    
    
     
`;

const ProductTextContainer = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
     


`;

const ProductText =styled.h3 `
    margin:0;
`;


const ProductPrice = styled.p `
    margin: 5px;

`;

const ProductButton = styled.div `
    //position: absolute;
    background: black;
    color:white;
    border-radius: 5px;
    width: 100px;
    height: 10px;
    text-align: center;
    bottom: 0%;
    padding: 20px;
    font-size: 14px;
    
    

`;
