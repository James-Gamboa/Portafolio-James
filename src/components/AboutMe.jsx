// @ts-nocheck
import React from "react";
import HelloImg from "/src/public/img/profile-icons/me.png";
import "../public/css/styles.css";

const AboutMe = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section className="about-me">
        <div className="main-container">
          <h1 className="title">¡Hola!</h1>
          <div className="grid-container">
            <img src={HelloImg} alt="Mi foto" />
            <p>
              Mi nombre es James Guevara Gamboa, soy un desarrollador que
              aprovecha cada día para expandir mis conocimientos y enfrentar
              desafíos que ponen a prueba mis habilidades.
              <br />
              <p>
                Soy de Costa Rica, actualmente tengo 23 años y estoy en la
                búsqueda de mi primera experiencia laboral. Mientras espero que
                esta oportunidad llegue, me encuentro trabajando en mis
                conocimientos y enfrentándome a desafíos que ponen a prueba mis
                habilidades.
              </p>
              <br />
              <em>Como próxima meta, tengo aprender sobre desarrollo móvil.</em>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default AboutMe;
