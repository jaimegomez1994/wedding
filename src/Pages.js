import React, { useState, useEffect } from "react";
import "./saas/parent.scss";
import { db } from "./services/firebase.js"
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Pages = () => { 
    const [id, setID] = useState('');
    const [invitados, setInvitados] = useState([]);
    const [displayError, setDisplayError] = useState(false);

    const handleID = (e) => { 
        setID(e.target.value)
    }

    const handleConfirm = (e,index) => { 
        var newInvitados = [...invitados];
        newInvitados[index].confirmar = !newInvitados[index].confirmar;
        newInvitados[index].dateUpdated =new Date();
        setInvitados(newInvitados);

    }

    const hideMenusFromConfirm = () => { 
        var menuConfirm = document.getElementById("confirm-form");
        var menuConfirmList = document.getElementById("confirm-list");
        if (menuConfirm.style.display != "none") {
            menuConfirm.style.display = "none";
            menuConfirmList.style.display = "block";
        } else {
            menuConfirm.style.display = "block";
        }
    }
    const hideMenusFromConfirmList = () => { 
        var menuConfirmList = document.getElementById("confirm-list");
        var menuConfirmReady = document.getElementById("confirm-ready");
        if (menuConfirmList.style.display != "none") {
            menuConfirmList.style.display = "none";
            menuConfirmReady.style.display = "block";
        }
    }

    const submitHandlerConfirm = (e) => { 
        e.preventDefault();
        
        var cont = 0;
         db.collection("invitados")
                .get()
             .then((querySnapshot) => {
                querySnapshot.docs.map(row => {
                    if (row.id === id) {
                        cont = cont + 1;
                        setInvitados(row.data().invitados);
                    }
                });
                if (cont <= 0) {
                    setDisplayError(true);
                } else {
                    setDisplayError(false);
                    hideMenusFromConfirm();
                }
                 
            });

    }
    const submitHandlerConfirmList = (e) => { 
        e.preventDefault();
        hideMenusFromConfirmList();
        db.collection("invitados").doc(id).update(
            { "invitados":  invitados  }
        );
    }
    useEffect(() => {
        if (window.location.search.length > 11) {
            setID(window.location.search.substring(8));
        }
    });

    return (
        <>
        <div id="home" className="home">
             <div className="names">
                <div className="title-name">
                    HANNY & JAIME
                </div>
                <div className="fecha">
                    Sábado 26 de diciembre 2020
                </div>
            </div>
        </div>
        <div id="confirm" className="confirm">
            <div className="confirm-container">
                <form id="confirm-form" className="confirm-display confirm-form" onSubmit={submitHandlerConfirm}>
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
                        {displayError && (
                            <div className="confirm-detail"> No encontramos tu invitacion.</div>
                        )
                        
                        }
                    <button
                        className="btn-search btn-block"
                    >
                        Buscar
                    </button>
                </form>
                    

                <form id="confirm-list" className="confirm-display confirm-list" onSubmit={submitHandlerConfirmList}>
                    <div className="confirm-title confirm-title-list">
                        Confirmación de invitados
                    </div>
                    <div className="confirm-detail confirm-detail-list">
                        Selecciona la casilla a lado del nombre de los invitados que desees confimar.
                    </div>
                    { invitados.map((invitado, index) => {
                        return (
                            <div class="form-check invitado">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value={invitado.confirmar}
                                    checked={invitado.confirmar}
                                    id="defaultCheck1"
                                    onChange={(e) => handleConfirm(e,index)}
                                />
                                <label class="form-check-label" for="defaultCheck1">
                                    {invitado.name}
                                </label>
                            </div>
                        );
                    })
                    }
                    <button
                        className="btn-search btn-block"
                    >
                        Confirmar
                    </button>

                    
                </form>
                
                <form id="confirm-ready" className="confirm-display confirm-ready">
                    <div className="confirm-title">Gracias!</div>
                </form>    


            </div>
        </div>
        <div id="direccion" className="direccion">
            <div className="name-detail">
                {/* Direccion */}
            </div>
            <div className="iglesia">
                <div>
                    <div className="iglesia-titulo">
                        Catedral Metropolitana de Monterrey
                    </div>
                    <div className="iglesia-hora">
                       Ceremonia Religiosa: 2:30 pm
                    </div>
                    <div className="iglesia-direccion">
                        Juan Zuazua 1100 Sur, Centro 64000 Monterrey, Nuevo León
                    </div>
                    <div className="iglesia-mapa">
                        <a href="http://maps.google.com/?q=Catedral Metropolitana de Monterrey">
                            Ver direccion
                        </a>
                    </div>
                </div>
            </div>
            <div className="salon">
                <div>
                    <div className="iglesia-titulo salon-titulo-desktop">
                        Crowne Plaza Monterrey
                    </div>
                    <div className="iglesia-hora salon-civil">
                       Civil : 5:00 pm
                    </div>
                    <div className="iglesia-hora">
                       Recepción : 6:00 pm
                    </div>
                    <div className="iglesia-direccion">
                        Constitución Oriente 300, Centro 64000 Monterrey, Nuevo León
                    </div>
                    <div className="iglesia-mapa">
                        <a href="http://maps.google.com/?q=crowne plaza monterrey centro">
                            Ver direccion
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="regalo" className="regalo">
            <div className="name-detail">
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faGift}
                />
            </div>
            <div className="iglesia">
                <div>
                    <div className="iglesia-titulo">
                        Mesa de regalos
                    </div>
                    <div className="image-liverpool"></div>
                    <div className="iglesia-mapa">
                        <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50462090">
                            Mesa Hanny y Jaime número de evento: 50462090
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Pages;