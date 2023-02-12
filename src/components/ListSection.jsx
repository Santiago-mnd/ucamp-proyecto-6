const ListSection = () => {
  return (
    <section>
      <header>
        <h2>¿Qué construí?</h2>
      </header>
      <div className="content">
        <p>
          A lo largo del Bootcamp se construyeron distintos
          páginas web, con la finalidad de adquirir y
          practicar los conocimientos otorgados durante las
          clases. Desde una landing page sencilla, hasta un
          <span className="font-semibold">
            {' '}
            E-commerce
          </span>{' '}
          completo, creando{' '}
          <span className="font-semibold">
            backend y frontend
          </span>{' '}
          desde cero.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">
            1.- Landing Page
          </li>
          <li className="icon solid fa-bolt">
            2.- Todo list
          </li>
          <li className="icon solid fa-signal">
            3.- Consumo de un API
          </li>
          <li className="icon solid fa-cog">
            4.- Restaurante
          </li>
          <li className="icon solid fa-map-marker-alt">
            5.- E-commerce
          </li>
          <li className="icon solid fa-code">
            6.- Portafolio
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ListSection;
