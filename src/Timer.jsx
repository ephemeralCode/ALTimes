import React from 'react';
import { useState, useEffect, useRef } from "react";
import soundNotify from '../src/music/soundNotify.mp3';

export function Timer(props) {
    const didMount = useRef(false)
    const [time, setTime] = useState('Select time')
    const [startTimer, setStartTimer] = useState(props.isActive)
    const [finishingTime, setFinishingTime] = useState(
        props.isActive &&
            new Date(props.time.savedDate)
    )
    const [remainingTime, setRemainingTime] = useState({
        hours: '00', 
        minutes: '00', 
        seconds: '00'
    })

    const zeroLength = 2;
    const interval = useRef();

    //* timer finishing sound notification
    function tabTitleNotify() {
        let audio = new Audio(soundNotify)
        audio.volume = 0.3
        audio.play()
    }

    //* scrollTimer
    const scrollHandler = (e) => {
        if(e.deltaY < 0){
            if(e.target.options.selectedIndex !== 0) {
                e.target.options.selectedIndex--
                setTime(e.target.options[e.target.selectedIndex].value)
            }
        } else if(e.deltaY > 0){
            if(e.target.options.selectedIndex !== e.target.options.length - 1) {
                e.target.options.selectedIndex++
                setTime(e.target.options[e.target.selectedIndex].value)
            }
        }
    }

    //* remove timer
    const removeTime = () => {
        let arrayTimes = JSON.parse(localStorage.getItem('USER_TIME'))

        props.setSaveLocalTime((prev) => {
            return {
                ...prev, 
                [props.typeTimer]: [
                    ...prev[props.typeTimer].filter(item => item.id !== props.time.id)
                ]
            }
        })

        arrayTimes[props.typeTimer] = arrayTimes[props.typeTimer].filter(
            item => item.id !== props.time.id
        )

        localStorage.USER_TIME = JSON.stringify(arrayTimes)
    }

    const saveChanges = (savedDate, completedTime, isActive, finishTimer) => {
        let arrayTimes = JSON.parse(localStorage.getItem('USER_TIME'))

        props.setSaveLocalTime((prev) => {
            let arrayTimes = [...prev[props.typeTimer]]
            
            arrayTimes[props.id] = {
                id: props.id,
                savedDate: savedDate,
                completedTime: completedTime,
                isActive: isActive,
                timerFinish: finishTimer
            }

            return {
                ...prev, 
                [props.typeTimer]: [...arrayTimes]
            }
        })
        
        arrayTimes[props.typeTimer][props.id] = ({
            id: props.id,
            savedDate: savedDate,
            completedTime: completedTime,
            isActive: isActive,
            timerFinish: finishTimer
        })

        localStorage.USER_TIME = JSON.stringify(arrayTimes)
    }

    useEffect(() => {
        if (didMount.current) {
            const [id, hours, minutes, seconds] = time.split('_')

            setFinishingTime(finishingTime.setHours(finishingTime.getHours() + Number(hours)))
            setFinishingTime(finishingTime.setMinutes(finishingTime.getMinutes() + Number(minutes)))
            setFinishingTime(finishingTime.setSeconds(finishingTime.getSeconds() + Number(seconds)))

            saveChanges(
                finishingTime.toJSON(),
                `${String(finishingTime.getHours()).padStart(zeroLength, '0')}:${String(finishingTime.getMinutes()).padStart(zeroLength, '0')}:${String(finishingTime.getSeconds()).padStart(zeroLength, '0')}`,
                true,
                false
            )
        } 

    }, [startTimer])

    //* TimerOn/Off
    useEffect(() => {
        if (startTimer) {
            interval.current = setInterval(() => {
                const currentTime = new Date()
                const countDownTime = new Date()

                countDownTime.setHours(finishingTime.getHours() - currentTime.getHours())
                countDownTime.setMinutes(finishingTime.getMinutes() - currentTime.getMinutes())
                countDownTime.setSeconds(finishingTime.getSeconds() - currentTime.getSeconds())

                if (finishingTime.getTime() - currentTime.getTime() > 0) {
                    setRemainingTime((prev) => {
                        return {
                            ...prev,
                            hours: countDownTime.getHours(),
                            minutes: countDownTime.getMinutes(),
                            seconds: countDownTime.getSeconds()
                        }
                    })
                } else {
                    clearInterval(interval.current)
                    setRemainingTime((prev) => {
                        return {
                            ...prev,
                            hours: '00',
                            minutes: '00',
                            seconds: '00'
                        }
                    })
                    saveChanges(
                        null,
                        `${String(finishingTime.getHours()).padStart(zeroLength, '0')}:${String(finishingTime.getMinutes()).padStart(zeroLength, '0')}:${String(finishingTime.getSeconds()).padStart(zeroLength, '0')}`,
                        false,
                        true
                    )

                    tabTitleNotify()
                }
            }, 1000)

        } else {
            didMount.current = true
        }

    }, [startTimer])

    return (
            <div className='containerTimer'>
                <div className='conteinerTimerStart'>
                    {
                        props.timerFinish &&
                            <button className='completedTimerBtn' onClick={() => {
                                clearInterval(interval.current)
                                didMount.current = false
                                removeTime()
                            }}></button>
                    }

                    {
                        !props.timerFinish && 
                            <button className='removeTimerBtn' onClick={() => {
                                clearInterval(interval.current)
                                didMount.current = false
                                removeTime()
                            }}></button>
                    }

                    <div className='timer'>
                        <p className='time'>{`
                            ${String(remainingTime.hours).padStart(zeroLength, '0')}:${String(remainingTime.minutes).padStart(zeroLength, '0')}:${String(remainingTime.seconds).padStart(zeroLength, '0')}
                        `}</p>
                        
                        <div className='containerCompletedTimerText'>
                            <p className='completedTimerText'>Completed: </p>
                            <p>{props.time.completedTime}</p>
                        </div>
                    </div>
                </div>

                <div className='containerTimerEnd'>
                    { 
                        !props.timerFinish ?
                            !startTimer ? 
                                !props.isActive &&
                                    <div className='containerTimerSelect'>
                                        {/* select times */}   
                                        <select 
                                            className='timerSelect'
                                            onWheel={(e) => scrollHandler(e)}
                                            onClick={(e) => {
                                                if(e.target.options){
                                                    setTime(e.target.options[e.target.selectedIndex].value)
                                                    return
                                                }
                                                setTime(e.target.value)
                                            }}
                                        > 

                                            <option>Select time</option>
                                            {
                                                props.collectionTimes.map((item, i) => {
                                                    return <option key={i} value={item.value}>{item.text}</option>
                                                })
                                            }  
                                        </select>
                                        
                                        {/* start btn */}
                                        <button 
                                            style={time === 'Select time' ? {cursor: 'not-allowed', opacity: '50%'} : {cursor: 'pointer'}}
                                            className='startTimerBtn' 
                                            disabled={time === 'Select time' ? true : false} 
                                            onClick={() => {
                                                setFinishingTime(new Date())
                                                setStartTimer(true)
                                                didMount.current = true
                                            }}
                                        ></button>
                                    </div>

                            :

                            <></>   

                        :

                        <></>
                    }

                    {
                        props.isActive &&
                            <button className='cancelTimerBtn' onClick={() => {
                                clearInterval(interval.current)
                                setStartTimer(false)
                                didMount.current = false
                                setTime('Select time')
                                setRemainingTime((prev) => {
                                    return {
                                        ...prev,
                                        hours: '00',
                                        minutes: '00',
                                        seconds: '00'
                                    }
                                })
                                saveChanges(null, '00:00:00', false, false)
                            }}></button>
                    }
                </div>
            </div>
    )
}