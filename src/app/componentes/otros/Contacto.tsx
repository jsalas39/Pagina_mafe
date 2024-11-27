export const Contacto = () => {
  return (
    <>
      <section
        className="container-fluid py-5"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/46/a8/ba/46a8bad1c119f7d014c95fbdc5a79f58.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-4 text-dark">Contacto</h1>

          <div className="row">
            {/* Formulario de Contacto */}
            <div className="col-md-6">
              <h2 className="mb-4 text-dark">Formulario de Contacto</h2>
              <form>
                <div className="mb-3 text-dark">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="mb-3 text-dark">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Tu correo electrónico"
                    required
                  />
                </div>
                <div className="mb-3 text-dark">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="col-md-6">
              <h2 className="mb-4 text-dark">Información de Contacto</h2>
              <ul className="list-group mb-4">
                <li className="list-group-item">
                  <strong>Dirección:</strong> Calle 50, Barranquilla, Atlántico
                </li>
                <li className="list-group-item">
                  <strong>Teléfono:</strong> +57 300 123 4567
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> contacto@quillagreen.com
                </li>
                <li className="list-group-item">
                  <strong>Redes Sociales:</strong>
                  <a href="#" className="ms-2 text-primary">
                    Facebook
                  </a>
                  ,
                  <a href="#" className="ms-2 text-primary">
                    Instagram
                  </a>
                  ,
                  <a href="#" className="ms-2 text-primary">
                    Twitter
                  </a>
                </li>
              </ul>

              {/* Mapa Placeholder */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.516464040265!2d-74.80886492463116!3d10.987913257601522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d195b83eebb%3A0x9f17f6787a5f7d43!2sBarranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1sen!2sus!4v1688123456789!5m2!1sen!2sus"
                  title="Mapa de Barranquilla"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
