import { Link} from "react-router-dom";
import ChangePage from "../Components/ChangePage";
import SvgCart from "../Imagenes/Icons/SvgCart";
import Navbar from "../Components/Navbar";
import SlideBar from "../Components/SlideBar";
import ArrayBlackOut from "../Components/ArrayBlackOut";
import React, { useState, useEffect } from "react";
const customMargin1 = {
  marginTop: "40px",
};
const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

//prueba de la bd
const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('http://localhost/Index.php')
  .then((response) => response.json())
  .then((data) => setUsers(data))
  .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <ArrayBlackOut>
      <div className="container-fluid">
        <Navbar toggleMenu={toggleMenu} />
        <div className="row">
          <div className="col-md-2">
            <SlideBar isOpen={isopen} setIsChecked={setIsChecked} />
          </div>
          <div className="col-md-10">
            {/**cuerpo de la pagina */}
            <div
              className="row row-cols-1 row-cols-md-3 g-4"
              style={customMargin1}
            >
              {/* hacemos que si el check esta activo nos traiga el array con sus elementos */}
              {isChecked && <h1>Hola</h1>}
              <div className="col">
                <div className="card h-100">
                  <img
                    src="src\Imagenes\Persiana-Duo.jpeg"
                    className="card-img-top"
                    alt="Duo"
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-bold text-center"
                      style={{
                        fontFamily: "Lato, Helvetica, Arial, sans-serif",
                        fontSize: "21px",
                      }}
                    >
                      Duo
                    </h5>
                    <p
                      className="card-text text-center fw-bold"
                      style={{
                        fontFamily: "Lato, Helvetica, Arial, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      $450 m²
                    </p>
                    <div className="text-center">
                      <Link 
                        type="button"
                        to="/SingleProduct"
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart style={{ marginRight: "10px" }}/>
                          Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="src\Imagenes\persianas-blackout.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-bold text-center"
                      style={{
                        fontFamily: "Lato, Helvetica, Arial, sans-serif",
                        fontSize: "21px",
                      }}
                    >
                      Black Out
                    </h5>
                    <p
                      className="card-text text-center fw-bold"
                      style={{
                        fontFamily: "Lato, Helvetica, Arial, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      $450 m²
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart />
                        <span style={{ marginLeft: "10px" }}>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart />
                        <span style={{ marginLeft: "10px" }}>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart />
                        <span style={{ marginLeft: "10px" }}>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart />
                        <span style={{ marginLeft: "10px" }}>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "3px" }}
                      >
                        <SvgCart />
                        <span style={{ marginLeft: "10px" }}>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ChangePage />
            <div>
      {/* Aquí puedes mostrar los datos de los usuarios */}
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          {/* ...otros campos */}
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </ArrayBlackOut>
  );
};
export default Home;
