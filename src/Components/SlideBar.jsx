import React, { useContext } from "react";
import { ArrayContext } from "./ArrayBlackOut";
export const customMargin= {
  marginTop: '70px'
      };
      const SlideBar = () => {
        const total = useContext(ArrayContext);
    return(
        <div className="sidebar" style={customMargin}>            
        <h6>CATEGORÍAS</h6>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Black Out ({total})
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Duo (212)       
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Skirts (11)        
        </label>
        <ul></ul>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Coats (75)
        </label>
        <ul></ul> 
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Tops (15)        
        </label>
        <ul></ul>
        <ul></ul>
        <h6>MARCAS</h6>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ A.P.C. (37)
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Armani (211)        
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Loro Piana (15)        
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Topiro (12)        
        </label>
        <ul></ul>
        <h6>COLORES</h6>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Azul
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Verde       
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Blanco        
        </label>
        <ul></ul>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Gris
        </label>
        <ul></ul> 
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Extra Grande        
        </label>
        <ul></ul>
        <ul></ul>
        <h6>TAMAÑOS</h6>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Extra pequeño
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ pequeño       
        </label>
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Mediano        
        </label>
        <ul></ul>
        <ul/>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Grande
        </label>
        <ul></ul> 
        <ul></ul>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        ‎ Extra Grande        
        </label>
        <ul></ul>
        <ul></ul>
      </div>
    );
 };
 export default SlideBar;