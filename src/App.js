import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Api from "./pages/Api";
import Seguros from "./pages/Seguros";
import Registro from "./pages/Registro";
import Navbar from "./componentes/navbar";

//import Layout from "./componentes/layout";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Api' element={<Api />} />
        <Route path='/Seguros' element={<Seguros />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='*' element={<Error />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
