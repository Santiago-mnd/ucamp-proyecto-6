const Header = () => {
  return (
    <section className="intro">
      <header>
        <h1>Proyecto 6</h1>
        <p className="font-bold">Santiago García</p>
        <a
          target="_blank"
          href="https://github.com/Santiago-mnd"
        >
          Aquí puedes ver mi perfil de GitHub!
        </a>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src="src/assets/images/pic01.jpg" alt="" />
        </span>
      </div>
    </section>
  );
};

export default Header;
