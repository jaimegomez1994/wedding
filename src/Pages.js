import React from "react";
import "./saas/parent.scss";

const submitHandler = () => { 

}

const Pages = () => { 
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
                <form className="confirm-form" onSubmit={submitHandler}>
                    <div className="confirm-title">Confirmación</div>
                    <div className="confirm-detail">Ingresa tu código de invitado</div>
                    <div className="">
                        <input
                        type="string"
                        name="confirm-d"
                        className="confirm-input"
                        placeholder="Código"
                        // value={cash}
                        // onChange={(e) => handleEditPaymentMethod(e)}
                        ></input>
                    </div>
                    <button
                        className="btn-search"
                        // onClick={() => completeOrder()}
                    >
                        Buscar
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Pages;