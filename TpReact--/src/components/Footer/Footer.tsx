

export const Footer = () => {
  return (
    <>
        <footer className="d-flex flex-wrap justify-content-between aling-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex aling-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secodary text-decoration-none lh-1">Gran Sabor</a>  
            <span className="mb-3 mb-md-0 text-body-secodary">&copy; 2023 Gran Sabor, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"> <a className="text-body-secodary" href=""> <i className="bi bi-facebook"></i></a></li>
            <li className="ms-3"> <a className="text-body-secodary" href=""> <i className="bi bi-instagram"></i></a></li>
            <li className="ms-3"> <a  className="text-body-secodary" href=""> <i className="bi bi-twitter-x"></i></a></li>
        </ul>
        </footer>
    </>
  )
}
