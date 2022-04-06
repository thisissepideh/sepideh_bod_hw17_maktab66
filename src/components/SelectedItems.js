import React ,{useContext}from 'react';
import {itemsContext}from '../context/itemsContext';
import Item from './Item'
import SelectItem from './SelectItem';
import  '../App.css';


const SelectedItems = () => {
const {items} = useContext(itemsContext);
    return (
        <div className='selected-items'>
            <h2>selected Items</h2>
            <ul style={{listStyleType: "none"}}>
                {
                 
                    items.filter((item)=>{return item.isChecked}).map((i)=>(
                        <li><SelectItem  title={i.item} /></li>
                        ))
                }
                
                    
                
            </ul>
            
        </div>
    );
};

export default SelectedItems;