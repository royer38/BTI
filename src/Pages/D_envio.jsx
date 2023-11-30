import { Link, NavLink, useNavigate } from "react-router-dom";



const Centrado= {
  marginLeft:'25%',
  marginRight: '25%',
};
const D_envio = () => {


  return(
<form className="row g-3" style={Centrado}>
  <h1>Agrega una direccion</h1>
  <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">Nombre</label>
    <input type="text" className="form-control is-valid" id="validationServer01" defaultValue="Mark" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Apellido Paterno</label>
    <input type="text" className="form-control is-valid" id="validationServer02" defaultValue="Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServer03" className="form-label">Apellido Materno</label>
    <input type="text" className="form-control is-valid" id="validationServer03" defaultValue="Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">Numero de Telefono</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">+52</span>
      <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">Ciudad</label>
    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div className="col-md-6">
    <label htmlFor="validationServer09" className="form-label">Calle y numero</label>
    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer09Feedback" required />
    <div id="validationServer09Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>


  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">Estado</label>
    <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value>Elige...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">C.P</label>
    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
      <label className="form-check-label" htmlFor="invalidCheck3">
        Acepta los terminos y condiciones
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        debes aceptar los terminos y condiciones para continuar
      </div>
    </div>
  </div>
  <div className="col-12">
    <a type="button" className="btn btn-outline-primary" href="/Pago"> Agregar metodo de pago</a>
  </div>
</form>
    );
 };
export default D_envio;