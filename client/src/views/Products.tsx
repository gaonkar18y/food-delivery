import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import { RootState } from '../store/store';
import {  loadProducts } from '../store/products/actions';
import ProductCard from './product/ProductCard';
import Box from '@mui/material/Box';
import AddProduct from './product/AddProductForm';
import IconButton from '@mui/material/IconButton';

const Proucts = ()=>{
    const dispatch = useDispatch();
    const rows = useSelector((state: RootState)=> state.products.products);
    const ref = useRef();

    useEffect(()=>{
        if(rows.length === 0){
            dispatch(loadProducts())
        }
    },[rows])
    
    if(!rows){
        return <div>loading</div>
    }

    const nextClick = ()=> {
      ref.current.scrollLeft += 300;
    };
    const prevClick =  ()=> {
        ref.current.scrollLeft -= 300;
    };

    return (
        <>
            <Box>
                <Box ref={ref} sx={{
                    width: '100vw',
                    height: 400,
                    display:'flex', 
                    flexDirection:"row",
                    overflow:"hidden",
                    alignItems:'center'
                    }}>
                    {
                        rows.map( (item, i) => <ProductCard key={i} {...item} /> )
                    }
                </Box>
                <IconButton aria-label="delete" sx={{
                        top: '25%',
                        position: 'absolute',
                        background: 'black',
                        right: 0,
                        color:'white'
                }} onClick={nextClick}>
                        <NavigateNextIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{
                        top: '25%',
                        position: 'absolute',
                        background: 'black',
                        left: 0,
                        color:'white'
                }} onClick={prevClick}>
                        <NavigateBeforeIcon />
                </IconButton>
            </Box>
            <br/>
            <center><AddProduct /></center> 
        </>
        
    )
}

export default Proucts;