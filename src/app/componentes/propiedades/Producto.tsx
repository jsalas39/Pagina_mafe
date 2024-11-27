import digital from "../../../assets/img/digital1.png"
import contenedor from "../../../assets/img/contenedor2.png"
import fomentar from "../../../assets/img/fomentar.jpg"

export const Producto = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/46/a8/ba/46a8bad1c119f7d014c95fbdc5a79f58.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "black",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-4">Nuestro Producto</h1>

          {/* Carrusel - Descripción de la Solución */}
          <section className="mb-5">
            <h2 className="text-success text-dark">Descripción de la Solución</h2>
            <div
              id="productoCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={contenedor}
                    className="d-block w-100"
                    alt="Contenedores inteligentes"
                  />
                  <div className="carousel-caption d-none d-md-block text-dark">
                    <h5>Contenedores Inteligentes</h5>
                    <p>
                      Equipados con sensores que miden la capacidad de llenado,
                      mejorando la eficiencia en la recolección.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={digital}
                    className="d-block w-100"
                    alt="Plataforma digital"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Plataforma Digital</h5>
                    <p>
                      Optimiza las rutas de recolección en tiempo real,
                      reduciendo costos operativos y contaminación.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={fomentar}
                    className="d-block w-100"
                    alt="Educación y reciclaje"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Fomento al Reciclaje</h5>
                    <p>
                      Incentivamos la educación ambiental y el reciclaje con un
                      sistema de recompensas.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productoCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productoCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </section>

          {/* Cards - Valor Agregado */}
          <section className="mb-5">
            <h2 className="text-success text-dark">Valor Agregado</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Tecnología Avanzada</h5>
                    <p className="card-text">
                      La combinación de sensores y plataformas digitales
                      transforma la gestión de residuos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Educación Ambiental</h5>
                    <p className="card-text">
                      Promovemos el cambio en los hábitos de reciclaje mediante
                      campañas educativas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title">Recompensas Sustentables</h5>
                    <p className="card-text">
                      Los ciudadanos son incentivados con recompensas por
                      participar en prácticas sostenibles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios */}
          <section>
            <h2 className="text-success text-dark">Beneficios</h2>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-dark">
                <strong>Para la ciudad:</strong> Reducción de costos operativos
                y menor contaminación ambiental.
              </li>
              <li className="list-group-item bg-transparent text-dark">
                <strong>Para los ciudadanos:</strong> Mejor calidad de vida y
                aumento en las tasas de reciclaje.
              </li>
              <li className="list-group-item bg-transparent text-dark">
                <strong>Para el medio ambiente:</strong> Disminución de residuos
                y una Barranquilla más limpia y verde.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
