import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const Header = styled.div `
font-family: gilroy;
display: flex;
justify-content: space-between;
padding: 20px;

`;

const HeaderLogo = styled.div `
font-weight: 900;
font-size: 30px;


`;

const HeaderList =styled.div `
display: flex;
font-size: 14px;
list-style-type: none;
gap: 30px;



`;

const li =styled.div`
display:flex;



`;

const HeaderNav = () => {
    return ( 
        <Header>
            <HeaderLogo>
                Madamethriftsalot
            </HeaderLogo>
            <HeaderList>
                <Link to=""><li>NEW</li></Link> 
                <Link to="/clothing"><li>CLOTHING</li></Link>
                <Link to="/editorials"><li>EDITORIALS</li></Link>
                <Link to="/brand"><li>THE BRAND</li></Link>
                <Link to="/blog"><li>BLOG</li></Link>
                <Link to="/cart"><li>CART</li></Link>
            </HeaderList>
        </Header>
     );
}
 
export default HeaderNav;