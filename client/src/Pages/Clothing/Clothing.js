import React from 'react';
import styled from 'styled-components';

const Clothing = (props) => {
    const { getProducts, products} = props;
    return ( 
        <ProductList >
            {products ? getProducts(): <div></div>}
        </ProductList>
     );
}
 
const ProductList = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;

`;

export default Clothing;
