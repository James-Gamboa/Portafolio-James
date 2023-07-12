// @ts-nocheck
import React from "react"
import HTMLImg from "/src/public/img/icons-language/html.png";
import CssImg from "/src/public/img/icons-language/css.png";
import JsImg from "/src/public/img/icons-language/javascript.png";
import MongoImg from "/src/public/img/icons-language/mongo.png";
import GitImg from "/src/public/img/icons-language/git.png";
// import SqlImg from "/src/public/img/icons-language/sql-server.png";
import ReactImg from "/src/public/img/icons-language/react.png";

const Skills = () => {
    return(
        <>
        <section className="i-am">
            <div className="main-container">
                <h1 className="title">Habilidades Tecnicas</h1>
                <div className="flex-container-2">
                    <p>
                        Las siguientes competencias son las que adquiri conocimiento a partir de estudios formales e informales, los cuales mediante practica mejore la comprension y el desempeño del conocimiento.
                    </p>
                </div>
            </div>
            <div className="SkillsGrid">
                <img src={HTMLImg} />
                <img src={CssImg} />
                <img src={JsImg} />
                <img src={MongoImg} />
                <img src={GitImg} />
                {/* <img src={SqlImg} /> */}
                <img src={ReactImg} />
            </div>
        </section>
        </>
    )
}

export default Skills