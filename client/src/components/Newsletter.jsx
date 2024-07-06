import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-color: #fcf5f5;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
    ${mobile({textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid gray;
    ${mobile({width: "80%" })}

`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-weight: 600;
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter