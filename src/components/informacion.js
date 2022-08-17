import React from "react";
import '../css/info.css';

function Informacion(props){
    return(
        <div className="contenedor-info">
            <img
            className="imagen-info"
            src={require(`../img/${props.imagen}.jpg`)}
            alt='mi foto'
            />
            <div className="texto-info">
                <p className="nombre-info"><strong>Nombre:</strong> {props.nombre}</p>
                <p className="carrera-info"><strong>Carrera:</strong> {props.carrera}</p>
                <p className="habilidades-info"><strong>Habilidades:</strong> {props.habilidades}</p>
            </div>
        </div>
    )
}
export default Informacion;