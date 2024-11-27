import Mafe from "../../../assets/img/MariaFernanda.png"
import Maria from "../../../assets/img/MariaDeLosAngeles.png"
import Valen from "../../../assets/img/Valentina.png"

export const Acerca = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/46/a8/ba/46a8bad1c119f7d014c95fbdc5a79f58.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "black",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-4">Acerca de Quilla-Green</h1>

          {/* Historia del Proyecto */}
          <section className="mb-5">
            <h2 className="text-dark">Nuestra Historia</h2>
            <p>
              Quilla Green nació con la misión de resolver problemas críticos en
              la gestión de residuos en Barranquilla. La idea surgió al observar
              la ineficiencia en la recolección de basura y las bajas tasas de
              reciclaje en la ciudad, lo que impacta negativamente al medio
              ambiente y a la comunidad. Nuestro objetivo es construir un futuro
              más sostenible mediante soluciones innovadoras y tecnológicas.
            </p>
            <p>
              Nuestra visión es convertir a Barranquilla en un modelo de gestión
              ambiental inteligente, integrando tecnologías avanzadas y
              fomentando la participación ciudadana en el cuidado del planeta.
            </p>
          </section>

          {/* El Equipo */}
          <section className="mb-5">
            <h2 className="text-dark">Nuestro Equipo</h2>
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={Maria}
                  alt="María de los Ángeles Molina Reyes"
                  className="rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h5>María de los Ángeles Molina Reyes</h5>
                <p>Gestión de Proyectos y Estrategia</p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={Valen}
                  alt="Valentina León López"
                  className="rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h5>Valentina León López</h5>
                <p>Desarrollo Tecnológico e Innovación</p>
              </div>
              <div className="col-md-4 text-center">
                <img
                  src={Mafe}
                  alt="María Sinning Rodríguez"
                  className="rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h5>María Sinning Rodríguez</h5>
                <p>Comunicación y Participación Ciudadana</p>
              </div>
            </div>
          </section>

          {/* Valores del Proyecto */}
          <section>
            <h2 className="text-dark">Nuestros Valores</h2>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-black">
                <strong>Sostenibilidad:</strong> Buscamos proteger el medio
                ambiente y promover prácticas responsables.
              </li>
              <li className="list-group-item bg-transparent text-black">
                <strong>Innovación:</strong> Usamos tecnología de vanguardia
                para transformar la gestión de residuos.
              </li>
              <li className="list-group-item bg-transparent text-black">
                <strong>Participación Ciudadana:</strong> Involucramos a la
                comunidad como pilar fundamental del cambio.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
