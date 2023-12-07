import Navbar from "../Components/Navbar";
export const margenes = {
  marginTop: "60px",
};

const Carrito = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-2">hola</div>
        <div className="col-md-10">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card text-bg-primary mb-3 h-100">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">Primary card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* Aquí puedes agregar más tarjetas si lo necesitas */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrito;
