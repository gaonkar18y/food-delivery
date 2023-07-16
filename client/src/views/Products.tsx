import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FixedSizeList as List } from 'react-window';
import { RootState } from '../store/store';
import {  loadProducts } from '../store/products/actions';

const heightPerRow= 20;

const Proucts = ()=>{
    const dispatch = useDispatch();
    const rows = useSelector((state: RootState)=> state.products.products);

    useEffect(()=>{
        if(rows.length === 0){
            dispatch(loadProducts())
        }
    },[rows])
    
    if(!rows){
        return <div>loading</div>
    }

    const Row=({index, style})=>{
        return <div className="list-row" style={style}>
                name: {rows[index].name} 
             </div>
    }

    return (<div>
        <h3>Products page</h3>
        <div>
            <span>Name</span>
            <span>Description</span>
        </div>
        <List
            height={500}
            width={500}
            itemCount={rows.length}
            itemSize={heightPerRow}
         >
             {Row}
        </List>
    </div>)
}

export default Proucts;