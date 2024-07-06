import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../redux/userRedux';


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding : "10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    display: flex;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "14px" })}
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const user = useSelector((state)=> state.user.currentUser);
    const dispatch = useDispatch();
    const handleClick=(e)=>{
        dispatch(logout());
    }
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Logo>KOPZ-STORE</Logo>
                </Link>
            </Center>
            <Right>
                {user? <MenuItem onClick={handleClick}>LOGOUT</MenuItem>:
                <>
                    <Link to={'/register'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>SIGNIN</MenuItem>
                    </Link>
                </>
                }

                <Link to='/cart'>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar