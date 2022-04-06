
import { createContext, useState,useEffect } from "react";


export const itemsContext = createContext();


function ItemsContextProvider(props) {
    
  const [items, setItems] = useState([]);

  const value = {
    items,
    changeChecked:(text)=>{
        let itemObjects = []
        for(let i of items){
            let tmp=i
            if(i.item===text){
               tmp.isChecked=!i.isChecked
            }
            itemObjects=[...itemObjects,tmp]
        }
        setItems(itemObjects)
    }
    ,setItems:(i)=>{setItems(i)}
  };
  return (
    <itemsContext.Provider value={value}>
      {props.children}
      </itemsContext.Provider>
  );
}
export default ItemsContextProvider;



