import React from 'react'
import { Button } from '../styles/AudioStyles';

const Audio = ({ music, state, volumen }) => {
    const {pista,key, name} = music;
    const playAudio = ()=> {
        const sonido = document.createElement('audio');
        sonido.src = `${pista}`
        sonido.style.display = "none";
        sonido.volume = volumen;
        sonido.play()
        state(name)
    }

    return (
           <Button onClick={playAudio} keyCode={key} >{key}</Button>
    )
}

export default Audio
