
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/order' Component={Order} />
    </Routes>
  );
}

export default App;
