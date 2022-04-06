import React,{useContext} from "react";
import {itemsContext}from '../context/itemsContext';

const Item = (props) => {
  const { isChecked, title,id } = props;
  const {items,changeChecked} = useContext(itemsContext);
  const handleSelect = (e)=> {
    changeChecked(e.target.value)
  }
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" id={id}  value={title} checked={isChecked} onClick={handleSelect}/>
      <label > {title}</label>
    </div>
  );
};

export default Item;
