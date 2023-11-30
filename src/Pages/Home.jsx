import { Link } from "react-router-dom";
import ChangePage from "../Components/ChangePage";
import  { customMargin } from "../Components/SlideBar";
import SvgCart from "../Imagenes/Icons/SvgCart";
import Navbar from "../Components/Navbar";
import SlideBar from "../Components/SlideBar";
import ArrayBlackOut from "../Components/ArrayBlackOut";
const Home = () => { 
    return(
      <ArrayBlackOut>
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-3">
          <SlideBar />
        </div>
        <div className="col-md-9">          
{/**cuerpo de la pagina */}
        <div className="row row-cols-1 row-cols-md-3 g-4" style={customMargin}>
  <div className="col">
    <div className="card h-100">
      <img src="src\Imagenes\Persiana-Duo.jpeg" className="card-img-top" alt="Duo" />
      <div className="card-body">
        <h5 className="card-title fw-bold text-center" style={{ fontFamily: 'Lato, Helvetica, Arial, sans-serif', fontSize: '21px' }}>Duo</h5>
        <p className="card-text text-center fw-bold" style={{ fontFamily: 'Lato, Helvetica, Arial, sans-serif', fontSize: '14px' }}>$450 m²</p>
        <div className="text-center">
        <button className="btn btn-danger"  style={{ marginRight: '3px' }}>
            <SvgCart />
            <Link style={{ marginLeft: '10px' }} to="/SingleProduct">Add to cart</Link>
        </button>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="src\Imagenes\persianas-blackout.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title fw-bold text-center" style={{ fontFamily: 'Lato, Helvetica, Arial, sans-serif', fontSize: '21px' }}>Black Out</h5>
        <p className="card-text text-center fw-bold" style={{ fontFamily: 'Lato, Helvetica, Arial, sans-serif', fontSize: '14px' }}>$450 m²</p>
        <div className="text-center">
        <button className="btn btn-danger" style={{ marginRight: '3px' }}>
            <SvgCart />
            <span style={{ marginLeft: '10px' }}>Add to cart</span>
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
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <div className="text-center">
        <button className="btn btn-danger" style={{ marginRight: '3px' }}>
            <SvgCart />
            <span style={{ marginLeft: '10px' }}>Add to cart</span>
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
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="text-center">
        <button className="btn btn-danger" style={{ marginRight: '3px' }}>
            <SvgCart />
            <span style={{ marginLeft: '10px' }}>Add to cart</span>
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
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="text-center">
        <button className="btn btn-danger" style={{ marginRight: '3px' }}>
            <SvgCart />
            <span style={{ marginLeft: '10px' }}>Add to cart</span>
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
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="text-center">
        <button className="btn btn-danger" style={{ marginRight: '3px' }}>
            <SvgCart />
            <span style={{ marginLeft: '10px' }}>Add to cart</span>
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
<ChangePage/>
        </div>
      </div>
    </div>
    </ArrayBlackOut>
    );
 };
 export default Home;   