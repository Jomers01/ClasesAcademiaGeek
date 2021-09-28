//Dependencias
import React, { useEffect, useState } from 'react'
import { ArrowDownward, ArrowUpward, Pause, PlayArrow, ReplaySharp } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
//Compornentes y funciones
import { counterDown, counterUP } from '../hooks/counter'
//Estilos
import '../styles/pomodoro.css'

const AppPomodoro = () => {
    console.log('Me renderizo');
    //Estados
    const [session, setSession] = useState(25)
    const [breack, setBreack] = useState(5)
    //Estados del timer
    const [minutes, setMinutes] = useState(session)
    const [seconds, setSeconds] = useState(0)
    const [state, setState] = useState(false)

    useEffect(() => {
        setMinutes(session)
        if (state) {
            playTimer()
        }
    }, [seconds, session])

    const playTimer = ()=> {
        setState(true)
        const interval = setInterval(()=> {
            clearInterval(interval);
    
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }else{
                     //Que suene el pitido
                    setMinutes(breack -1)
                    setSeconds(59);
                }
            }else{
                setSeconds(seconds - 1)
            }
            }, 1000);
    }

    const pauseTimer = ()=> {
        setState(false)
    }

    const reset = ()=> {
        setState(false)
        setBreack(5)
        setSeconds(0)
        setMinutes(25)
        setSession(25)
    }

        const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
        const timerSeconds = seconds < 10 ? `0${seconds}` : seconds
    
    //Cuando de click llamo a una funcion que sube o baja el numero
    const handleClick = (bool, type)=> {
        if (bool && type === 'breack') {
            counterUP(breack, setBreack)
        }else if (type === 'breack'){
            counterDown(breack, setBreack)
        }else if(bool && type === 'session'){
            counterUP(session, setSession)
        }else if(type === 'session'){
            counterDown(session, setSession)
        }
    }



    return (
        <div className="container-pomodoro">
            <h1 className="title-pomodoro-clock">25 + 5 Clock</h1>

            <div className="container-pomodoro-timer">
                <div className="container-pomodoro-break">
                    <p className="text-pomodoro-control-break">Breack Length</p>
                    <div className="container-pomodoro-control-breack">
                        <IconButton
                            aria-label="ArrowDownward"
                            onClick={()=> handleClick(false, 'breack')}
                        >
                            <ArrowDownward
                               className="icon-pomodoro"
                            />
                        </IconButton>
                        <p className="text-pomodoro-timer-beack">{breack}</p>
                        <IconButton
                            aria-label="ArrowUpward"
                            onClick={()=> handleClick(true, 'breack')}
                        >
                            <ArrowUpward
                                className="icon-pomodoro"
                            />
                        </IconButton>
                    </div>
                </div>

                <div className="container-pomodoro-session">
                    <p className="text-pomodoro-control-session">Session Length</p>
                    <div className="container-pomodoro-control-session">
                        <IconButton
                            aria-label="ArrowDownward"
                            onClick={()=> handleClick(false, 'session')}
                        >
                            <ArrowDownward
                                className="icon-pomodoro"
                            />
                        </IconButton>
                        <p className="text-pomodoro-timer-session">{session}</p>
                        <IconButton
                            aria-label="ArrowUpward"
                            onClick={()=> handleClick(true, 'session')}
                        >
                            <ArrowUpward
                                className="icon-pomodoro"
                            />
                        </IconButton>
                    </div>
                </div>
            </div>

            <div className="container-pomodoro-time">
                <p className="text-pomodoro-session">Session</p>
                <h1 className="title-pomodoro-time">{timerMinutes}:{timerSeconds}</h1>
            </div>

            <div className="container-pomodoro-controls">
                <IconButton
                    aria-label="PlayArrow"
                    onClick={playTimer}
                >
                    <PlayArrow
                        className="icon-pomodoro"
                    />
                </IconButton>
                <IconButton
                    aria-label="Pause"
                    onClick={pauseTimer}
                >
                    <Pause
                        className="icon-pomodoro"
                    />
                </IconButton>
                <IconButton
                    aria-label="ReplaySharp"
                    onClick={reset}
                >
                    <ReplaySharp
                        className="icon-pomodoro"
                    />
                </IconButton>
            </div>
        </div>
    )
}

export default AppPomodoro
