import React from "react"
import video from '../fondos/videoBG.mp4'
import s from './button.module.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'


export default function principalPage() {
    
    
    return (
        <Contenedor>
            <VideoBG autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </VideoBG>
            <Link to='/home'>
                <button className={s.fancy}>
                    <span className={`${s.topKey}`}></span>
                    <span className={`${s.text}`}>Empezar</span>
                    <span className={`${s.bottomKey1}`}></span>
                    <span className={`${s.bottomKey2}`}></span>
                </button>
            </Link>
                       
        </Contenedor>
    )
}
    
const VideoBG = styled.video`
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
`

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
`
    