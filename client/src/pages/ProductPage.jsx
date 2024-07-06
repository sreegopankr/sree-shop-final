import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { publicRequest } from '../requestMethods'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-size: 30px;
    font-weight: 300;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
    ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterText = styled.div`
    font-size: 20px;
    font-weight: 300;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${(props)=> props.color};
    margin-left: 10px;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;

`
const Amount = styled.span`
    margin: 0px 5px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    padding: 14px;
    border: 2px solid teal;
    font-weight: 500;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`

const ProductPage = () => {
    const location =useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        try {
            const getProduct = async () =>{
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            }
            getProduct();
            
        } catch (error) {
            
        }
    },[id])
    
    const handleQuantity =(type)=>{
        if(type==="dec"){
            quantity>1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    }
    
    const handleClick =()=>{
        dispatch(
            addProduct({ ...product, quantity, color, size })
        )
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}
                </Desc>
                <Price>${product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterText>Color</FilterText>   
                        {product.color?.map((c) => (
                             <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterText>Size</FilterText>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size?.map((s)=> (
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>                       
                        <Remove onClick = {()=> handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add onClick = {()=> handleQuantity("inc")} />
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductPage