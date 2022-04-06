import React from "react";
import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";
import ItemsContextProvider from "./context/itemsContext";

const App = () => {
  return (
    <ItemsContextProvider>
      <div style={{display:"flex", justifyContent:"center" ,marginTop:'5px'}}>
      <AllItems />
      <SelectedItems />
      </div> 
    </ItemsContextProvider>
  );
};

export default App;
