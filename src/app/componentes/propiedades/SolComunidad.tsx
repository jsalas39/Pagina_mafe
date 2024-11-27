export const SolucionesComunidad = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/46/a8/ba/46a8bad1c119f7d014c95fbdc5a79f58.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-4 text-dark">
            Soluciones para la Comunidad
          </h1>

          {/* Tabs - Soluciones */}
          <section className="mb-5">
            <h2 className="text-dark text-center mb-4">
              Participación Ciudadana
            </h2>
            <ul className="nav nav-tabs" id="solucionesTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="ciudadanos-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ciudadanos"
                  type="button"
                  role="tab"
                  aria-controls="ciudadanos"
                  aria-selected="true"
                >
                  Ciudadanos
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="empresas-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#empresas"
                  type="button"
                  role="tab"
                  aria-controls="empresas"
                  aria-selected="false"
                >
                  Empresas y Municipalidades
                </button>
              </li>
            </ul>
            <div className="tab-content mt-4" id="solucionesTabContent">
              {/* Tab Ciudadanos */}
              <div
                className="tab-pane fade show active"
                id="ciudadanos"
                role="tabpanel"
                aria-labelledby="ciudadanos-tab"
              >
                <p className="text-dark">
                  Los ciudadanos son el corazón de Quilla-Green. Pueden
                  participar activamente reciclando y separando correctamente
                  los residuos en los contenedores inteligentes. A través del
                  sistema de recompensas, recibirán puntos que podrán canjear
                  por descuentos en tiendas, entradas a eventos culturales, o
                  donaciones a causas sociales.
                </p>
                <div className="alert alert-success">
                  <strong>Impacto directo:</strong> Zonas más limpias, reducción
                  de acumulación de basura y un entorno más agradable para
                  vivir.
                </div>
              </div>

              {/* Tab Empresas y Municipalidades */}
              <div
                className="tab-pane fade text-dark"
                id="empresas"
                role="tabpanel"
                aria-labelledby="empresas-tab"
              >
                <p>
                  Empresas y municipalidades se benefician de la plataforma al
                  lograr una gestión eficiente de los residuos. Con datos en
                  tiempo real, se optimizan recursos, se disminuyen costos
                  operativos, y se contribuye a la sostenibilidad urbana.
                </p>
                <ul>
                  <li>Reducción de costos en recolección de residuos.</li>
                  <li>Mejora en la imagen de sostenibilidad para empresas.</li>
                  <li>Mayor cumplimiento de normativas ambientales.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Progress Bars - Beneficios */}
          <section className="container py-5">
            <h2 className="text-dark text-center mb-4">Beneficios Clave</h2>
            <div className="mb-3">
              <h5 className="text-dark">Impacto ambiental</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  80% Reducción de residuos mal gestionados
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-dark">Compromiso ciudadano</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  70% Participación activa
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h5 className="text-dark">Eficiencia en la recolección</h5>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  90% Optimización de rutas
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
