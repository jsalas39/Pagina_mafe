export const Cliente = () => {
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
          <h1 className="text-center mb-4">Nuestros Clientes</h1>

          {/* Público Objetivo */}
          <section className="mb-5">
            <h2 className="text-dark">Público Objetivo</h2>
            <p>
              Nos enfocamos en los residentes de las áreas más críticas de
              Barranquilla, que enfrentan problemas recurrentes de acumulación
              de basura y mala gestión de residuos. Entre estas áreas se
              encuentran:
            </p>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-black">
                Calle 30
              </li>
              <li className="list-group-item bg-transparent text-black">
                Calle 17
              </li>
              <li className="list-group-item bg-transparent text-black">
                Circunvalar
              </li>
              <li className="list-group-item bg-transparent text-black">
                Los Andes
              </li>
            </ul>
          </section>

          {/* Beneficiarios */}
          <section>
            <h2 className="text-dark">Beneficiarios</h2>
            <p>
              Nuestro proyecto tiene un impacto directo en las comunidades más
              afectadas por la acumulación de residuos. Estas zonas se
              beneficiarán a través de:
            </p>
            <ul className="list-group">
              <li className="list-group-item bg-transparent text-black">
                Reducción de puntos críticos de basura en las calles.
              </li>
              <li className="list-group-item bg-transparent text-black">
                Mejora en la calidad de vida y salud de los residentes.
              </li>
              <li className="list-group-item bg-transparent text-black">
                Implementación de soluciones tecnológicas para un entorno más
                limpio y sostenible.
              </li>
              <li className="list-group-item bg-transparent text-black">
                Educación ambiental para fomentar el reciclaje y la gestión
                adecuada de residuos.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
