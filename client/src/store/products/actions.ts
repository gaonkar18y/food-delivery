import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts = createAsyncThunk('products/load', async ()=>{
    const resp = await axios.get("http://localhost:3001/product/all");
    return resp.data;
})


export const loadProductCategories = createAsyncThunk('products/loadCategories', async ()=>{
    const resp = await axios.get("http://localhost:3001/product/categories");
    return resp.data;
})

