import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Select, MenuItem, Input } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { loadProductCategories } from '../../store/products/actions';
import axios from 'axios';

const AddProduct = ()=>{
    const [categoryId, setCategoryId] = useState();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState();
    const categories = useSelector((state: RootState)=> state.products.productCategories);
    const isLoadedCategories = useSelector((state: RootState)=> state.products.isLoadedCategories);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isLoadedCategories === false){
            dispatch(loadProductCategories())
        }
    },[categories]);

    const handleCategoryChange = (event)=>{
      setCategoryId(event.target.value);
    }

    const handleSubmit = async ()=>{
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("description",desc);
      formData.append("price",price.toString());
      formData.append("categoryId",categoryId);

      const resp = await axios.post("http://localhost:3001/product",formData);
      console.log(resp.data);
    }

    return (<Box
    component="form"
    sx={{
     display: 'flex', margin: 10, flexDirection:'column', width: 400, height:400, justifyContent:'space-between'
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="name" variant="outlined" fullWidth 
    value={name} onChange={(e)=> setName(e.target.value)}/>
    <TextField id="outlined-basic" label="description" variant="outlined" fullWidth 
    value={desc} onChange={(e)=> setDesc(e.target.value)}/>
    <TextField id="outlined-basic" label="price" type='number' variant="outlined" fullWidth
    value={price} onChange={(e)=> setPrice(+e.target.value)} />
    <Select
      id="demo-simple-select"
      value={categoryId}
      label="Age"
      onChange={handleCategoryChange}
    >{
        categories.map(cat=> <MenuItem value={cat.id}>{cat.name}</MenuItem>)
      }
    </Select>
    <Input type='file' onChange={(e)=> setFile(e.target.files[0])}/>
    <Button variant="contained" onClick={handleSubmit}>Create</Button>
  </Box>)
}

export default AddProduct;