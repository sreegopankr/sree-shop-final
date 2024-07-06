import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { clearCart } from '../redux/cartRedux';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled"? "black": "transparent"};
    color: ${(props)=> props.type==="filled" && "white"};
    cursor: pointer;
`

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
    margin-bottom: 20px;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.div``

const ProductId = styled.div``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${(props)=>props.color};
`
const ProductSize = styled.div``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({ marginBottom: "20px" })}
`;
const DeleteItem = styled.div`
    margin-top: 20px;
    
    ${mobile({ marginBottom: "20px" })}
`;


const Hr = styled.hr`
    height: 1px;
    border: none;
    background-color: #eee;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid gray;
    height: 50vh;
    padding: 20px;
    border-radius: 10px;
`;
const SummaryTitle = styled.h1`
    font-weight: 300;
    padding-top: 10px;
`;
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px ;
    font-size: ${(props)=>props.type === "total" && "24px"};
    font-weight: ${(props)=>props.type === "total" && "500"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    margin-top: 10px;
    cursor: pointer
`;

const Cart = () => {
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    const checkout = ()=>{
        dispatch(clearCart())
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products?.map((product)=>(
                        
                        <Product key={product._id}>
                        <ProductDetails>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.title}</ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize><b>Size:</b>{product.size}</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Remove  />
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>${product.quantity * product.price}</ProductPrice>
                            
                        </PriceDetails>
                        </Product>

                    ))}
                       <Hr/>    
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <Link to={'/success'}>
                        <Button onClick={checkout}>CHECKOUT NOW</Button>
                    </Link>
                </Summary>
            </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart