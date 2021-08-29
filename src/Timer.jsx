import React from 'react';
import { useState, useEffect, useRef } from "react";

export function Timer(props) {
    const didMount = useRef(false)
    const [time, setTime] = useState('Select time')
    const [startTimer, setStartTimer] = useState(false)
    const [isActive, setIsActive] = useState(props.isActive)
    const [finishingTime, setFinishingTime] = useState(
        isActive &&
            new Date(props.time.savedDate)
    )
    const [remainingTime, setRemainingTime] = useState({
        hours: '00', 
        minutes: '00', 
        seconds: '00'
    })

    let zeroLength = 2;
    let interval = useRef();

    // const notificationFinishTimer = () => {
    //     interval.current = setInterval(() => {

    //         document.title = 'Timer complete!'
    //     }, 1000 )
    // }

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

    //
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
        if (isActive) {
            interval.current = setInterval(() => {
                const currentTime = new Date()
                let countDownTime = new Date()

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
                    setIsActive(false)
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
                        true,
                        true
                    )

                    // notificationFinishTimer()
                }
            }, 1000)

        } else {
            didMount.current = true
        }

    }, [startTimer])


    return (
        <div className='wrapperShowTimer'>
            <div className='timer'>
                {
                    props.timerFinish &&
                        <button className='completedTimerBtn' onClick={() => {
                            clearInterval(interval.current)
                            didMount.current = false
                            setIsActive(false)
                            removeTime()
                        }}></button>
                }

                <div className='showTime'>
                    <p className='time'>{`
                        ${String(remainingTime.hours).padStart(zeroLength, '0')}:${String(remainingTime.minutes).padStart(zeroLength, '0')}:${String(remainingTime.seconds).padStart(zeroLength, '0')}
                    `}</p>
                    
                    <span className='completedTimerText'>Completed: </span><span>{props.time.completedTime}</span>        
                </div>
            </div>

            <div className='wrapperTimerBtn'>
                { 
                    !props.timerFinish ?
                        !startTimer ? 
                            !isActive &&
                                <>   
                                    <select className='wrapperTimerSelect' onClick={(e) => {
                                        setTime(e.target.options[e.target.selectedIndex].value)
                                    }}>                   
                                        <option>Select time</option>
                                        {
                                            props.collectionTimes.map((item, i) => {
                                                return <option key={i} value={item.value}>{item.text}</option>
                                            })
                                        }  
                                    </select>

                                    <button className='startTimerBtn' disabled={time === 'Select time' ? true : false} 
                                        onClick={() => {
                                            setFinishingTime(new Date())
                                            setIsActive(true)
                                            setStartTimer(true)
                                            didMount.current = true
                                        }}
                                    >Start</button>
                                </>

                        :

                        <></>   

                    :

                    <></>
                }

                {
                    isActive ?
                        <button className='cancelTimerBtn' onClick={() => {
                            clearInterval(interval.current)
                            setStartTimer(false)
                            didMount.current = false
                            setIsActive(false)
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
                        }}>Cancel</button>
                    
                    :

                    <></>
                }

                {
                    !props.timerFinish && 
                        <button className='removeTimerBtn' onClick={() => {
                            clearInterval(interval.current)
                            didMount.current = false
                            setIsActive(false)
                            removeTime()
                        }}>Remove</button>
                }
            </div>
        </div>
    )
}