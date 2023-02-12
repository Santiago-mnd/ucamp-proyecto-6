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
            <h3>Erat aliquam</h3>
            <p>
              Vehicula ultrices dolor amet ultricies et
              condimentum. Magna sed etiam consequat, et
              lorem adipiscing sed dolor sit amet,
              consectetur amet do eiusmod tempor incididunt
              ipsum suspendisse ultrices gravida.
            </p>
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
