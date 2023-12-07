import React, { useContext, useState } from "react";
import { ArrayContext } from "./ArrayBlackOut";
import "../css/prueba.css";
export const customMargin = {
  marginTop: "10px",
};
const SlideBar = ({setIsChecked }) => {
  const total = useContext(ArrayContext);
  const [isChecked, setIsCheckedLocally] = useState(false);

  const handleCheckBoxChange = () => {
    setIsCheckedLocally(!isChecked);
    setIsChecked(!isChecked);
  };
const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} style={customMargin}>
    <button className="menu-toggle" onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
    </button>
    <ul className="menu-items">
      <li>CATEGORÍAS</li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="BOCheck"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <label className="form-check-label" htmlFor="BOCheck">
          ‎ Black Out ({total})
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          ‎ Duo (212)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault1"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault1">
          ‎ Skirts (11)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault2"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault2">
          ‎ Coats (75)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault3"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault3">
          ‎ Tops (15)
        </label>
      </li>

      <li>MARCAS</li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault10"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault10">
          ‎ A.P.C. (37)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault11"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault11">
          ‎ Armani (211)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault12"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault12">
          ‎ Loro Piana (15)
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault13"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault13">
          ‎ Topiro (12)
        </label>
      </li>
      

      <li>COLORES</li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault20"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault20">
          ‎ Azul
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault21"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault21">
          ‎ Verde
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault22"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault22">
          ‎ Blanco
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault23"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault23">
          ‎ Gris
        </label>
      </li>


      <li>TAMAÑOS</li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault30"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault30">
          ‎ Extra pequeño
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault31"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault31">
          ‎  Pequeño
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault32"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault32">
          ‎ Mediano
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault33"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault33">
          ‎ Grande
        </label>
      </li>
      <li>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault34"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault34">
          ‎ Extra Grande
        </label>
      </li>

    </ul>
    <button className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i> cerrar
      </button>
  </div>
  );
};
export default SlideBar;