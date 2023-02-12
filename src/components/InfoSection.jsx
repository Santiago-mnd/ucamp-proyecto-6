import React from 'react';

const InfoSection = () => {
  return (
    <section id="first">
      <header>
        <h2>¿Quién soy?</h2>
      </header>
      <div className="content">
        <p>
          Soy un
          <strong className="font-semibold">
            {' '}
            Desarrollador Fullstack{' '}
          </strong>
          con amplia experiencia en el desarrollo de
          aplicaciones web. Contando con conocimientos en{' '}
          <strong className="font-semibold">
            JavaScript, NodeJS, MongoDB, React, Svelte,
            TailwindCSS, Git, GitHub,{' '}
          </strong>
          entre otros.
        </p>
        {/* <span className="image main">
          <img src="src/assets/images/pic02.jpg" alt="" />
        </span> */}
      </div>
    </section>
  );
};

export default InfoSection;
