import React, { useEffect } from "react";
import handleRadioChangue from "../Components/Decisiones"
import { customMargin } from "../Components/SlideBar";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SlideBar from "../Components/SlideBar";
import D_envio from "./D_envio";

const SingleProduct = () => { 

  useEffect(() => {
    handleRadioChangue();
  }, []);

    return (
      <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-3">
          <SlideBar />
        </div>
        <div className="col-md-9">          
          {/**cuerpo de la pagina */}
        <div style={customMargin}>
<div className="card mb-3 border-light" style={{maxWidth: 'flex'}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="src\Imagenes\Persiana-Duo.jpeg" className="img-fluid rounded-start" alt="Duo" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">Duo</h2>
{/*despliegue de las acordeones de infromacion*/}
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Descripcion
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        brinda privacidad y ayuda a filtrar la luz suavemente en las ventanas del hogar. Su diseño cuenta con paneles alternos entre opacos y transparentes que ofrecen cobertura total o parcial de la luz, su tejido reduce la entrada de los rayos UV.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Tamaño y ajuste
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>presentacion por metro cuadrado</p>
        <p>las medidas que el cliente necesite</p>
        <p>color negro y transparente</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Entrega y Devoluciones
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
las entregas son mediante J&T Delivery y las devoluciones son gestionadas con las claves de rastreo y en contacto con el proveedor
      </div>
    </div>
  </div>
</div>
{/**radios buttons */}
<div className="mt-3 mb-3">
<div className="form-check">
  <input type="radio" className="form-check-input" name="selection" defaultValue id="Pcompleta"  onChange={handleRadioChangue}/>
  <label className="form-check-label" htmlFor="Pcompleta">
    Pieza completa
  </label>
</div>
<div className="form-check">
  <input type="radio" className="form-check-input" name="selection" defaultValue id="Ppartes" defaultChecked onChange={handleRadioChangue}/>
  <label className="form-check-label" htmlFor="Ppartes">
    Seleccionar medidas
  </label>
</div>
</div>
{/*labels para calculos posteriores*/}
<div className="input-group mb-3">
  <span className="input-group-text border-light">Ancho:</span>
  <div className="form-floating">
    <input type="text" className="form-control border-light" id="anchoInput" placeholder="Indica un ancho"/>
    <label htmlFor="anchoInput">Indica un ancho</label>
  </div>
  <span className="input-group-text border-light">Alto:</span>
  <div className="form-floating">
    <input type="text" className="form-control border-light" id="altoInput" placeholder="Indica una altura" />
    <label htmlFor="altoInput">Indica una altura</label>
  </div>
</div>
<p className="card-text text-center"><small className="text-body-secondary">$450.00 precio por m²</small></p>
      <Link type="button" className="btn btn-outline-primary" to="/envio">Agregar direccion de envio</Link >
      </div>
    </div>
  </div>
</div>
</div>
          
        </div>
      </div>
    </div>



    );
 };
 export default SingleProduct;