import React from "react";
import './Display.css';


// Icones
import clock from '../img/clock-regular.svg'
import calculatorSolid from '../img/calculator-solid.svg'
import iconMenu from '../img/icons8-menu-50.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div className="display">
        <div className="topoDisplay">
            <img className="icones" src={calculatorSolid} alt="iconeCalculadora" />
            <span className="topotextoCalculadora">
                Calculadora
            </span>
        </div>
        <div className="headDisplay">
            <div className="menu-padrão">
                <img className="icones menuIcone" src={iconMenu} alt="MenuIcon" />
                <span className="textoCalculadora">Padrão</span>
            </div>
                <img className="icones" key={clock} src={clock} alt="iconeRelogio" />
        </div>
        <div className="numeroDisplay">
            {props.value}
        </div>
    </div>
