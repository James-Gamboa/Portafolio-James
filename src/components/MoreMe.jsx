import React from "react";
import "/src/public/css/styles.css";

const MoreMe = () => {
  return (
    <>
      <section className="about">
        <div className="main-container">
          <h1 className="title">Acerca de mi </h1>
          <div className="flex-container-2">
            <p>
            Comencé a estudiar programacion en el año 2021, 
            desde entonces he completado diferentes cursos en plataformas de renombre como Udemy 
            o FreeCodeCamp, asi como tambien he desarrollado 
            proyectos como una Pokedex , una recreacion de la pagina 
            de coca cola y netflix entre otras.
            </p>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
      <br /><br />
    </>
  );
};

export default MoreMe;
