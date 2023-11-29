const ChangePage = () => { 
    return(
<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center mt-4">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">«</span>
        <span className="sr-only"></span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
        <span className="sr-only"></span>
      </a>
    </li>
  </ul>
</nav>

    );
 };

 export default ChangePage;