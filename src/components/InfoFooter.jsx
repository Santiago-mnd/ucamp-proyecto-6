const InfoFooter = () => {
  return (
    <section>
      <header>
        <h2>Oops!, llegaste al final.</h2>
      </header>
      <div className="content">
        <p>
          Bueno, no hay mucho más que decir. Si te gustó mi
          trabajo, puedes contactarme sin dudarlo. Si no te
          gustó, también puedes contactarme.
        </p>
        <ul className="actions my-4">
          <li>
            <a
              href="#"
              className="button primary large shadow-2xl"
            >
              Volver al inicio
            </a>
          </li>
        </ul>
        <div className="flex gap-4 items-center justify-evenly w-full h-20 ">
          <a
            className="flex flex-col justify-center items-center gap-2"
            href="https://github.com/Santiago-mnd"
            target="_blank"
          >
            <img
              className="rounded-full h-10 w-10"
              src="https://avatars.githubusercontent.com/u/85137304?v=4"
              alt=""
            />
            Github
          </a>
          <a
            href="mailto:santiago.garcia.dev@gmail.com"
            className="flex flex-col justify-center items-center gap-2"
          >
            <img
              className="rounded-full h-10 w-10 object-cover"
              src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png"
              target="_blank"
            />
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoFooter;
