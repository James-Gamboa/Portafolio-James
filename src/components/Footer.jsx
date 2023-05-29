import React from 'react'
import "/src/public/css/styles.css";

const MainFooter = () => {
    return (
        <>
        <footer className="main-footer">
            <span className="fi fi-sr-envelope" onClick={() => window.location.href = "mailto:jjguevarag@gmail.com"}> jjguevarag@gmail.com</span>
            <p>Mis Redes Sociales: </p>
            <div className="social-networks">
                <a href="https://www.linkedin.com/in/james-guevara-gamboa-848b86167/" target="_blank"><i className="fi fi-brands-linkedin"></i></a>
                <a href="https://github.com/James-Gamboa" target="_blank"><i className="fi fi-brands-github"></i></a>
            </div>
        </footer>
        </>
    )

}

export default MainFooter
