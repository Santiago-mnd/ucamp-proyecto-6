const InfoSubSection = () => {
  return (
    <section>
      <header>
        <h2>Algunos ejemplos: </h2>
      </header>
      <div className="content">
        <p>
          Aquí puedes ver algunos de los proyectos que he
          realizado durante el Bootcamp. No muestro todos,
          así que te invito a que visites{' '}
          <a
            href="https://github.com/Santiago-mnd"
            target="_blank"
          >
            mi perfil de GitHub
          </a>{' '}
          para ver más.
        </p>

        <section>
          <header>
            <h3>Proyectos:</h3>
            <p>
              <span className="font-semibold">
                Puedes dar click en la imágen para abrir el
                código en otra pestaña.
              </span>{' '}
              <br />
              <br />
              <span className="font-semibold">
                Cabe mencionar que todos los diseños son
                propios.
              </span>
              <br />
              <br />
              <span className="font-semibold">
                Another:
                <br />
              </span>{' '}
              Aquí podrás ver una landing page sólo con HTML
              y CSS. Aunque utilicé Tailwind.
              <br />
              <br />
              <span className="font-semibold">
                Music Graph:
                <br />
              </span>
              Este proyecto fue realizado con React y la
              intención principal es contectar con una API,
              practicando los cambios de estado y el uso de
              useEffect.
              <br />
              <br />
              <span className="font-semibold">
                Restaurant-e:
                <br />
              </span>
              Una aplicación con la intención de mostrar la
              conexión entre React y Firebase. En este
              proyecto se utilizó React, Firebase, y React
              Router.
              <br />
              <br />
              <span className="font-semibold">
                E-xclusive:
                <br />
              </span>
              Este proyecto consta de dos partes. La primera
              es el front-end, realizado con React y
              Tailwind. La segunda es el back-end, realizado
              con Node.js y Express. El backend se conecta a
              una base de datos en MongoDB. Ambos están en
              respositorios diferentes y están en deploys
              diferentes.
            </p>
            <br />
            <br />
          </header>
          <div className="content">
            <div className="gallery">
              <a
                href="https://github.com/Santiago-mnd/UCAMP-landing-proyecto-1"
                target="_blank"
                className="landscape"
              >
                <img
                  src="https://i.ibb.co/zbTzM5B/image.png"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/Santiago-mnd/ucamp-proyecto3-ind"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/fQcNNBH/image.png"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/Santiago-mnd/proyecto-4-UCAMP"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/rcB8WW9/image.png"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/Santiago-mnd/ucamp-proyecto-5"
                target="_blank"
                className="landscape"
              >
                <img
                  src="https://i.ibb.co/j5f0mPw/image.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InfoSubSection;
