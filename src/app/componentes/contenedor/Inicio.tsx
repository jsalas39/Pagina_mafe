export const Inicio = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div
          className="hero-section text-white text-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/3d/7e/46/3d7e46be55640482a8d4ddbf244de2f3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container">
            <h1 className="display-4 fw-bold" style={{ color: "black" }}>
              Quilla-Green
            </h1>
            <h2 className="lead mb-4" style={{ color: "black" }}>
              <strong>
                Transformamos la recolección de basura en Barranquilla con
                soluciones inteligentes y sostenibles.
              </strong>
            </h2>
            <div className="my-4">
              {/* Video de YouTube */}
              <div
                className="ratio ratio-16x9"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/Wo6NkVAWpZg"
                  title="Video de Quilla-Green"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded shadow"
                ></iframe>
              </div>
            </div>

            {/* Botón de CTA */}
            <a href="#more" className="btn btn-light btn-lg shadow">
              Únete al cambio
            </a>
          </div>
        </div>

        {/* Resumen / Sección de Misión */}
        <div className="bg-light py-5" id="more">
          <div className="container">
            <h2 className="text-center mb-4">Nuestra Misión</h2>
            <p className="text-center text-muted">
              En <strong>Quilla-Green</strong>, estamos comprometidos con un
              Barranquilla más limpio, conectando tecnología, educación y
              sostenibilidad. Juntos, hacemos de nuestra ciudad un ejemplo de
              gestión ambiental inteligente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
