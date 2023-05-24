import React from 'react'
import ProjectCard from './ProjectCard'
import '/src/styles/css/styles.css'
// Importacion de Imagenes
import P1Img from '/src/img/projects/cocacola-page.png';
import P2Img from '/src/img/projects/pokedex-page.png';
import P3Img from '/src/img/projects/testomonios-freecodecamp.png';
import P4Img from '/src/img/projects/netflix-page.png';
import P5Img from '/src/img/projects/conectaCuatro-page.png';
import P6Img from '/src/img/projects/loopstudios-page.png';

const projects = [
    {   
        "id": 1,
        "image": P1Img,
        "title": "Coca Cola Landing Page",
        "description": "Proyecto creado como practica en un Wordcamp",
        "link": "https://james-gamboa.github.io/Practical-coca-cola-page/"
    },
    {
        "id": 2,
        "image": P2Img,
        "title": "Pokedex" ,
        "description": "Proyecto elaborado como practica de conocimientos en Javascript",
        "link": "https://james-gamboa.github.io/Pokedex/"
    },
    {
        "id": 3,
        "image": P3Img,
        "title": "Testimonios freeCodecamp" ,
        "description": "Curso Practico de React de Proyectos en React de freeCodecamp",
        "link": "https://marvelous-otter-5098e9.netlify.app/"
    },
    {
        "id": 4,
        "image": P4Img,
        "title": "Netflix" ,
        "description": "Pagina Elaborada como practica de conocimientos en Html,Css y Javascript",
        "link": "https://stunning-froyo-fb4a99.netlify.app"
    },
    {
        "id": 5,
        "image": P5Img,
        "title": "Conecta Cuatro" ,
        "description": "Proyecto elaborado como practica de conocimientos en Javascript",
        "link": "https://james-gamboa.github.io/conecta-cuatro/conecta4.html"
    },
    {
        "id": 6,
        "image": P6Img,
        "title": "Frontend-Mentor-Loopstudios" ,
        "description": "Pagina elaborada como practica de conocimientos en Sass",
        "link": "https://james-gamboa.github.io/Frontend-Mentor-Loopstudios-landing-page/"
    },
]

function Projects() {
    return (
        <>
        <h2 className="title">Proyectos</h2>
            <div className="projects-grid-container">
                {
                    projects.map(proyecto => 
                    <ProjectCard 
                    key={proyecto.id}
                    image={proyecto.image} 
                    title={proyecto.title} 
                    description={proyecto.description} 
                    link={proyecto.link} />)
                }
                    {/* <ProjectCard/> */}
            </div>
        </>
    )
}

export default Projects
