// @ts-nocheck
import React from "react";
import MeImg from "/src/public/img/profile-icons/icon-profile.jpg";
import "/src/public/css/styles.css";

const Iam = () => {
    return(
        <>
        <section className="i-am">
        <div className="main-container">
            <h1 className="title">Yo Soy</h1>
            <div className="flex-container-2">
                <img src={MeImg} alt="Mi foto"/>
                <ul>
                    <li>James Guevara Gamboa</li>
                    <li>Soy de Costa Rica - Heredia </li>
                    <li>Nacido el 8 de Noviembre del 2000</li>
                    <li className="floating"><a href="https://drive.google.com/file/d/1VUNftgruuZgUJU0qBIVsby72aXb-wCQT/view?usp=sharing" target={"_blank"}>CV</a></li>
                </ul>
            </div>
        </div>
        <div className="section-divider"></div>
    </section>
        </>
    )
}

export default Iam