import React from "react";
import Main from "./components/pages/main/Main";

import { Route, Routes} from 'react-router-dom';
import Delivery from "./components/pages/delivery/Delivery";
import Exchenge from "./components/pages/exchange/Exchenge";
import Katalog from "./components/pages/katalog/Katalog";
import Basket from "./components/pages/basket/Basket";

function App() {
  return (
    <div className="App">


    
    <Routes >
    <Route path="/"  element={<Main />}/>
    <Route path="/delivery"  element={<Delivery />}/>
    <Route path="/exchange"  element={<Exchenge />}/>
    <Route path="/katalog"  element={<Katalog />}/>
    <Route path="/basket"  element={<Basket />}/>
    </Routes>



   
    </div>
  );
}

export default App;
