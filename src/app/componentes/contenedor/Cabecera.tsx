import { NavLink } from "react-router-dom";
import MiLogo from "../../../assets/img/otro1.png"

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{backgroundColor: "green"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={MiLogo} alt="El logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/clie">
                  Clientes
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Funciones
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static" style={{backgroundColor: "green"}}>
                  <li>
                    <NavLink className="dropdown-item" to="/prod" style={{backgroundColor: "green"}}>
                      Producto
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/func" style={{backgroundColor: "green"}}>
                      Funcionamiento
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/solc" style={{backgroundColor: "green"}}>
                      Soluciones para la comunidad
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cont">
                  Contacto
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acer">
                  Acerca de
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
