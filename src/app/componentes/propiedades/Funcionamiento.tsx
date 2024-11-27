export const Funcionamiento = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/46/a8/ba/46a8bad1c119f7d014c95fbdc5a79f58.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "50px 0",
        }}
      >
        <div className="container my-5">
          <h1 className="text-center mb-4 text-dark">Funcionamiento</h1>

          {/* Tabla - Proceso de Quilla Green */}
          <section className="mb-5">
            <h2 className="text-dark text-center mb-4">
              ¿Cómo Funciona Quilla-Green?
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Paso</th>
                    <th>Descripción</th>
                    <th>Ícono</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>1. Monitoreo en Tiempo Real</strong>
                    </td>
                    <td>
                      Los sensores en los contenedores detectan el nivel de
                      llenado y envían la información a la plataforma.
                    </td>
                    <td>
                      <i className="bi bi-bar-chart-line-fill text-success fs-3"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>2. Optimización de Rutas</strong>
                    </td>
                    <td>
                      La plataforma crea rutas eficientes para los camiones,
                      reduciendo costos y contaminación.
                    </td>
                    <td>
                      <i className="bi bi-truck text-primary fs-3"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>3. Fomento de Buenas Prácticas</strong>
                    </td>
                    <td>
                      Se educa a los ciudadanos y se incentivan con recompensas
                      por reciclar correctamente.
                    </td>
                    <td>
                      <i className="bi bi-award text-warning fs-3"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Accordion - Tecnología */}
          <section>
            <h2 className="text-dark text-center mb-4">
              Nuestra Tecnología
            </h2>
            <div className="accordion" id="technologyAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Sensores Inteligentes
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#technologyAccordion"
                >
                  <div className="accordion-body">
                    Los sensores miden el nivel de llenado en tiempo real,
                    permitiendo optimizar la frecuencia de recolección y evitar
                    desbordes de basura.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Plataforma Educativa
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#technologyAccordion"
                >
                  <div className="accordion-body">
                    Una plataforma digital interactiva educa a los ciudadanos
                    sobre reciclaje, ofreciendo consejos prácticos y desafíos
                    ambientales.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Sistema de Recompensas
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#technologyAccordion"
                >
                  <div className="accordion-body">
                    Los ciudadanos obtienen puntos por reciclar, que luego
                    pueden canjear por beneficios o descuentos en comercios
                    aliados.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
