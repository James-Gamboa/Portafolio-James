// @ts-nocheck
import React from "react";
import ExperienceImg from "/src/public/img/icons/oficina.png";
import "/src/public/css/styles.css";

const Experience = () => {
  return (
    <>
      <section className="i-am">
        <div className="main-container">
          <h1 className="title">Experiencia</h1>
          <div className="flex-container-2">
            <img className="empty" src={ExperienceImg} alt="Mi foto" />
            <ul className="letter-small">
              <li>
                <strong>
                  Aunque no tengo experiencia laboral formal en el campo del
                  desarrollo Front-End, he estado buscando constantemente
                  oportunidades para aplicar los conocimientos y habilidades
                  adquiridos a través de cursos y proyectos personales.
                </strong>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default Experience;
