import React from "react";
import HelloImg from "/src/img/profile-icons/me.png";
import "/src/styles/css/styles.css";

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
              Mi nombre es James Guevara Gamboa, soy un desarrollador que aprovecha 
              cada día para expandir mis conocimientos y enfrentar desafíos que 
              pongan a prueba mis habilidades.
              <br />
              <p>Soy Heredia de Costa Rica,actualmente tengo 22 años y estoy en la búsqueda de mi primera experiencia laboral. 
                Mientras espero que esta oportunidad llegue, me encuentro trabajando mis conocimientos y enfrentandome en  desafíos que pongan a prueba mis habilidades</p>
              <br />
              <em>Como proxima Meta tengo Aprender sobre desarrollo Movil</em>
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default AboutMe;
