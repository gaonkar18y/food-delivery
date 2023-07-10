import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList as List } from 'react-window';

const heightPerRow= 20;

const Proucts = ()=>{
    const [rows, setRows] = useState();

    const loadData = async ()=>{
        const data = await axios.get("http://localhost:3001/product/all");
        setRows(data.data);
    }
    useEffect(()=>{
        loadData()
    },[])


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