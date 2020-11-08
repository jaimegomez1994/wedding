import React, { useState, useEffect } from "react";
import "./saas/parent.scss";
import { db } from "./services/firebase.js"




const Pages = () => { 
    const [id, setID] = useState('');
    const [invitados, setInvitados] = useState([]);
    const inv = [
        {name:'fernando',confirmado:false},
        {name:'adriana',confirmado:false}
    ]
    // const [invitados, setInvitados] = useState([]);

    const handleID = (e) => { 
        console.log(e.target.value);
        setID(e.target.value)
    }

    const hideMenus = () => { 
        var menu = document.getElementById("confirm-form");
        var menuList = document.getElementById("confirm-list");
        if (menu.style.display != "none") {
            menu.style.display = "none";
            menuList.style.display = "block";
        } else {
            menu.style.display = "block";
        }
    }

    useEffect(() => {
        console.log('invitados',JSON.stringify(invitados));
    }, [invitados]);
    

    const submitHandler = (e) => { 
        e.preventDefault();
        // hideMenus();
         db.collection("invitados")
                .get()
             .then((querySnapshot) => {
                querySnapshot.docs.map(row => {
                    if (row.id === "08Q6T" ) {
                        console.log(row.data());
                        setInvitados(row.data().invitados);
                        // setInvitados(Array.from(row.data().keys));
                        // console.log('x', Array.from(row.data()));
                    }
                });
            });
    }

    return (
        <>
        <div id="home" className="home">
            <div className="names">
                HANNY & JAIME
            </div>
            <span className="fecha"><br></br>
                Sábado 26 de diciembre 2020
            </span>
        </div>
            <div id="confirm" className="confirm">
            <div className="confirm-container">
                <form id="confirm-form" className="confirm-form" onSubmit={submitHandler}>
                    <div className="confirm-title">Confirmación</div>
                    <div className="confirm-detail">Ingresa tu código de invitado</div>
                    <div className="">
                        <input
                        type="string"
                        name="confirm-d"
                        className="confirm-input"
                        placeholder="Código"
                        value={id}
                        onChange={(e) => handleID(e)}
                        ></input>
                    </div>
                    <button
                        className="btn-search"
                        // onClick={() => completeOrder()}
                    >
                        Buscar
                    </button>
                </form>
                <form id="confirm-list" className="confirm-list">
                    <ul id="xxxx" className="xxxx">
                            {invitados.map((invitado, index) => {
                               
                                return (
                                     <li>
                                    {invitado.name}
                                    </li>
                                    
                                );
                            })
                            }
                        <li><a href="#home">¡Bienvenidos!</a></li>
                        <li><a href="#home2">Confirma tu asistencia</a></li>
                        <li><a href="#home3">Direccion</a></li>
                        <li><a href="#home4">Mesa de regalos</a></li>
                            <input type="checkbox"></input>
                          <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        {/* <button className="btn-primary">hola</button> */}
                            
                    </ul>    
                </form>
            </div>
        </div>
        </>
    );
}

export default Pages;