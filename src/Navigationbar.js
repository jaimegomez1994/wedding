import React from "react";
import "./saas/parent.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowNavigation = () => {
    var menu = document.getElementById("navigation-container");
    var menuMobile = document.getElementById("nav");
    console.log('menu',menu);
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuMobile.style.width = "0";
    } else {
        menu.style.display = "block";
        menuMobile.style.width = "230px";
    }
}

const Navigationbar = () => { 
    return (
        <>
        <div id="nav" className="navigation navigation-mobile">
            <a class="icon-container" >
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faBars}
                    onClick={ ShowNavigation}
                    //swipe left
                />
            </a>
            <div id="navigation-container" className="navigation-container">
                <div className="navigation-top">H + J</div>
                <ul id="nav" className="navigation-bottom">
                    <li><a href="#home">¡Bienvenidos!</a></li>
                    <li><a href="#home2">Confirma tu asistencia</a></li>
                    <li><a href="#home3">Direccion</a></li>
                    <li><a href="#home4">Mesa de regalos</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navigationbar;