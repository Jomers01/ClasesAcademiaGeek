import React, { useState } from 'react';
import Audio from '../components/Audio';
import dataAudios from '../assets/audios.json'
import { Div, H1, Input, P } from '../styles/AudioStyles';

const Caja = () => {
    const [title, setTitle] = useState('Heater')
    const [vol, setVol] = useState(0.3)

    const controlarVol = (e)=> {
        setVol(e.target.value)
    }

    return (
            <div>
                <H1>Caja de ritmos</H1>
                <Div>
                    {
                        dataAudios.audios.map(mp3 =>
                            <Audio music={mp3} key={mp3.id} state={setTitle} volumen={vol} />
                        )
                    }
                </Div>
                <P>{title}</P>
                <div align="center"><Input type="range" value={vol} min="0" max="1" step="0.01" onChange={controlarVol} /></div>
            </div>
    )
}

export default Caja
