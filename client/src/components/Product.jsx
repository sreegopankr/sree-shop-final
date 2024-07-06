import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    border-radius: 20%;
    cursor: pointer;
    transition: all 0.5s ease;
`

const Container = styled.div`
    flex: 1;
    min-width: 300px;
    height: 350px;
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
` 

const Image = styled.img`
    height: 85%;
    z-index: 2;
`

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform :scale(1.1) ;
    }
`
const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product