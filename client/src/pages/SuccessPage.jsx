import { CardGiftcard } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D") ;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
    ${mobile({width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`
const AlignCenter = styled.div`
    text-align: center;
`




const Button = styled.button`
    width: 80%;
    padding: 15px 20px;
    color: white;
    background-color: teal;
    border: none;
    font-weight: 600;
    cursor: pointer;
    margin: 20px 25px;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
`




const SuccessPage = () => {
  return (
    <Container>
        <Wrapper>
            <Title>ORDER CONFIRMED</Title>
            <AlignCenter><CardGiftcard/></AlignCenter>
            <Title> THANK YOU</Title>
            <AlignCenter>
                <Link to={'/'}>
                <Button>CONTINUE SHOPPING</Button>
                </Link>  
            </AlignCenter>
        </Wrapper>
    </Container>
  )
}

export default SuccessPage