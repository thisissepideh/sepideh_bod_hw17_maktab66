import React, { useContext,useEffect } from 'react';
import  {itemsContext}  from "../context/itemsContext";
import Item from './Item'
import  '../App.css'

function AllItems(props) {
    const {items,setItems} = useContext(itemsContext);

    useEffect(() => {
        fetch("https://61f6a53d2e1d7e0017fd6e5d.mockapi.io/items")
          .then((res) => res.json())
          .then((res) => {
            let itemObjects = []
            for (let i of res){
               let tmp = i
               tmp.isChecked=false
               itemObjects=[...itemObjects,tmp]
    
            }
           // console.log(itemObjects)
            setItems(itemObjects)});
      },[]);
    return (
        <div className='all-items'>
        <h2>All items</h2>
         <ul style={{listStyleType: "none"}}>
            {
                  items.map((i)=>(
                    <li><Item id={i.id} title={i.item} isChecked={i.isChecked}/></li>
                ))

            }
        </ul>
        </div>
       
    );
}

export default AllItems;