import { Button } from "bootstrap";
import Navbar from "../Components/Navbar";
import Delete_Cart from "../Imagenes/Icons/Delete_Cart";

export const BTN_delete = {
  position: 'absolute',
  top: '0px',
  right: '0px',
  opacity: '0.2', 
};
const Carrito = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="card text-bg-ligth mb-8">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="src/Imagenes/B.O.LongBeach.jpeg" alt="..." className="img-fluid rounded-start"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body"> 
                  <h5 className="card-title">B.O.LongBeach <button className="flex-none col-md-1 text-end " style={BTN_delete}><div className="text-center"><Delete_Cart/></div></button></h5> 
                  <p className="card-text mt-4">50 * 50 cm</p>
                  <p className="card-text text-body-secondary">Precio: $225</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-bg-ligth mb-8 mt-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="src/Imagenes/B.O.LongBeach.jpeg" alt="..." className="img-fluid rounded-start"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">B.O.LongBeach <button className="flex-none col-md-1 text-end " style={BTN_delete}><div className="text-center"><Delete_Cart/></div></button></h5>
                  <p className="card-text mt-4">50 * 50 cm</p>
                  <p className="card-text text-body-secondary">Precio: $225</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-1 text-end"></div>
      </div>
    </div>
  );
};
export default Carrito;