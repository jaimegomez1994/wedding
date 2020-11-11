import React from "react";
import "./saas/parent.scss";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowNavigation = () => {
    var menu = document.getElementById("navigation-container");
    var menuMobile = document.getElementById("nav");
    var menuOpenOption = document.getElementById("icon-container");
    var menuCloseOption = document.getElementById("icon-container-x");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuMobile.style.width = "0";
        menuOpenOption.style.display = "block";
    } else {
        menuOpenOption.style.display = "none";
        menuCloseOption.style.display = "flex";
        menu.style.display = "block";
        menuMobile.style.width = "230px";
    }
}
const closeLeftMenu = () => { 
    if (document.documentElement.clientWidth > 500) {
        return;
    }
    var menu = document.getElementById("navigation-container");
    var menuMobile = document.getElementById("nav");
    var menuOpenOption = document.getElementById("icon-container");

    menu.style.display = "none";
    menuMobile.style.width = "0";
    menuOpenOption.style.display = "block";
}

const printMousePos = (event) => {
    var menuMobile = document.getElementById("nav");
    if (menuMobile.style.width === "230px" && event.clientX>230) { 
        closeLeftMenu();
    }
}
document.addEventListener("click", printMousePos);

const Navigationbar = () => { 
    return (
        <>
        <div id="nav" className="navigation navigation-mobile">
            <a id="icon-container" class="icon-container" >
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faBars}
                    onClick={ ShowNavigation}
                />
            </a>
            <a id="icon-container-x" className="icon-container-x" >
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faTimes}
                    onClick={ ShowNavigation}
                />
            </a>
            <div id="navigation-container" className="navigation-container">
                <div className="navigation-top">H + J</div>
                <ul id="nav" className="navigation-bottom">
                    <li><a href="#home" onClick={closeLeftMenu}>¡Bienvenidos!</a></li>
                    <li><a href="#confirm" onClick={closeLeftMenu}>Confirma tu asistencia</a></li>
                    <li><a href="#direccion" onClick={closeLeftMenu}>Direccion</a></li>
                    <li><a href="#regalo" onClick={closeLeftMenu}>Mesa de regalos</a></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navigationbar;