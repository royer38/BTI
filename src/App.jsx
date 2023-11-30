import Home from "./Pages/Home";
import D_envio from "./Pages/D_envio";
import SingleProduct from "./Pages/SingleProduct";
import { Routes, Route } from "react-router-dom";
import M_pago from "./Pages/M_pago";
const App = () => {
  return (
<Routes>
<Route path="/" element={<Home />} index />
<Route path="/SingleProduct" element={<SingleProduct />} />
<Route path="/envio" element={<D_envio/>}/>
<Route path="/Pago" element={<M_pago/>}/>
</Routes>
  );
};
export default App;