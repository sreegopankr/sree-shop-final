import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { publicRequest } from '../requestMethods'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
` 

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setfilteredProducts] = useState([])

  useEffect(()=>{
    try {
      const getProducts = async ()=>{
        const res = await publicRequest.get(cat? `/products/?category=${cat}` : `/products`);
        setProducts(res.data)
        
      }
      getProducts();
    } catch (error) {
      
    }

  },[cat])

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if(sort === 'newest'){
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      )
    }else if(sort === 'asc'){
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.price - b.price)
      )
    }else{
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> b.price - a.price)
      )
    }
  },[sort])


  return (
    <Container>
        {cat ? filteredProducts.map((item)=>(
              <Product item={item} key={item._id}/>
            ))
            : 
            products.slice(0,8).map((item)=>(
              <Product item={item} key={item._id}/>
            )) }
    </Container>
  )
}

export default Products