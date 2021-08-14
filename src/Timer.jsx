import React from 'react';
import { useState, useEffect, useRef } from "react";

export function Timer(props) {
    const didMount = useRef()
    const [startTimer, setStartTimer] = useState(false)
    const [removeTimer, setRemoveTimer] = useState(false)
    const [time, setTime] = useState('Select time')
    const [finishingTime, setFinishingTime] = useState(0)
    const [remainingTime, setRemainingTime] = useState({
        remainingSeconds: '00',
        remainingMinutes: '00',
        remainingHours: '00'
    })

    let zeroLength = 2;
    let interval = useRef();

    //* remove timer
    useEffect(() => {
        if(didMount.current) {
            props.setSaveLocalTime((prev) => {
                return {
                    ...prev, 
                    [props.typeTimer]: [
                        ...prev[props.typeTimer].filter(item => item.id !== props.item.id)
                    ]
                }
            })
            
            didMount.current = false
            setRemoveTimer(false)
        } 
        
    }, [removeTimer])

    //* setFinishingTime
    useEffect(() => {
        if (didMount.current) {
            const [id, hours, minutes, seconds] = time.split('_')

            setFinishingTime(finishingTime.setHours(finishingTime.getHours() + Number(hours)))
            setFinishingTime(finishingTime.setMinutes(finishingTime.getMinutes() + Number(minutes)))
            setFinishingTime(finishingTime.setSeconds(finishingTime.getSeconds() + Number(seconds) + 1));
        }

    }, [startTimer])

    //* TimerOn/Off
    useEffect(() => {
        if (didMount.current) {
            interval = setInterval(() => {
                const currentTime = new Date();
                let countDownTime = finishingTime - currentTime
    
                if (countDownTime > 0) {
                    setRemainingTime({
                        ...remainingTime,
                        remainingSeconds: Math.floor((countDownTime % 60000) / 1000),
                        remainingMinutes: Math.floor((countDownTime % 3600000) / 60000),
                        remainingHours: Math.floor((countDownTime % 86400000) / 3600000)
                    })
                } else {
                    clearInterval(interval)
                }
            }, 1000)

        } else {
            didMount.current = true
        }
        
        return () => {
            clearInterval(interval)
        }

    }, [startTimer])

    return (
        <div className='timer'>
            <h2>{`
                ${String(remainingTime.remainingHours).padStart(zeroLength, '0')}:
                ${String(remainingTime.remainingMinutes).padStart(zeroLength, '0')}:
                ${String(remainingTime.remainingSeconds).padStart(zeroLength, '0')}
            `}</h2>

            {
                startTimer ? <button onClick={() => {
                    didMount.current = false
                    setTime('Select time')
                    setStartTimer(false)
                    clearInterval(interval)
                    setFinishingTime(0)
                    setRemainingTime({
                        ...remainingTime,
                        remainingSeconds: '00',
                        remainingMinutes: '00',
                        remainingHours: '00'
                    })
                }}>Cancel</button>

                :
            
                <> 
                    <select onClick={(e) => {
                        setTime(e.target.options[e.target.selectedIndex].value)
                    }}>                   
                        <option>Select time</option>
                        {
                            props.times.map((item, i) => {
                                return <option key={i} value={item.value}>{item.text}</option>
                            })
                        }  
                    </select>
            
                    <button disabled={time === 'Select time' ? true : false} onClick={() => {
                        setStartTimer(true)
                        setFinishingTime(new Date())
                    }}>Go</button>
                </>
            }

            <button onClick={() => {
                clearInterval(interval)
                setRemoveTimer(true)
            }}>Del</button>
        </div>
    )
}