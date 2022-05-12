import { React, useState, useEffect, useRef } from 'react';

// components
import { Timer } from './Timer/Timer';

// style
import './TimerInterface.css';

// icons
import iconStartTimer from '../../../img/icon/iconStartTimer.svg';
import iconRemoveTimer from '../../../img/icon/iconRemoveTimer.svg';
import iconCancelTimer from '../../../img/icon/iconCancelTimer.svg';
import iconCompleteTimer from '../../../img/icon/iconCompleteTimer.svg';

export const TimerInterface = (props) => {
    const zeroLength = 2
    const tabTitle = document.title
    const tabIcon = '/altimes/favicon.ico'
    const tabTitleActive = 'Timer completed!'
    const tabIconActive = '/altimes/timer.ico'

    const [animationTimerRemove, setAnimationTimerRemove] = useState(false)
    const [selectedTime, setSelectedTime] = useState('Select time')
    const [coutingTime, setCoutingTime] = useState(false)
    const [remainingTime, setRemainingTime] = useState({})
    const [loadTime, setLoadTime] = useState(
        props.generalSettings.isActive ? true : false 
    )
    const [finishingTime, setFinishingTime] = useState(
        props.generalSettings.isActive ? new Date(props.generalSettings.savedDate) : ''
    )
    const [startTimer, setStartTimer] = useState(
        props.generalSettings.isActive ? true : false    
    )

    const intervalTimer = useRef()
    const intervalNotify = useRef()

    //* scrollTimer
    function stopScroll(elem){
        elem.onwheel = (e) => {
            e.preventDefault()
        }
    }

    function resumeScroll(elem){
        elem.onwheel = () => {}
    }

    const scrollHandler = (e) => {
        if(e.deltaY < 0){
            if(e.target.options.selectedIndex !== 0) {
                e.target.options.selectedIndex--
                setSelectedTime(e.target.options[e.target.selectedIndex].value)
            }
        } else if(e.deltaY > 0){
            if(e.target.options.selectedIndex !== e.target.options.length - 1) {
                e.target.options.selectedIndex++
                setSelectedTime(e.target.options[e.target.selectedIndex].value)
            }
        }
    }

    const tabBlinkNotify = () => {
        let titleState = 0

        window.focus();

        intervalNotify.current = setInterval(() => {
            if (titleState === 1) {
                document.title = tabTitle
                document.head.children[1].attributes[1].value = tabIcon
            } else {
                document.title = tabTitleActive
                document.head.children[1].attributes[1].value = tabIconActive
            }
            
            titleState = titleState ? 0 : 1
        }, 1000);
    }

    //* coutingTime
    useEffect(() => {
        if(coutingTime) {
            const [id, hours, minutes, seconds] = selectedTime.split('_')
        
            setFinishingTime(finishingTime.setHours(finishingTime.getHours() + Number(hours)))
            setFinishingTime(finishingTime.setMinutes(finishingTime.getMinutes() + Number(minutes)))
            setFinishingTime(finishingTime.setSeconds(finishingTime.getSeconds() + Number(seconds)))

            saveTimeChanges(
                finishingTime.toJSON(),
                `${String(finishingTime.getHours()).padStart(zeroLength, '0')}:${String(finishingTime.getMinutes()).padStart(zeroLength, '0')}:${String(finishingTime.getSeconds()).padStart(zeroLength, '0')}`,
                true,
                false
            )

            setCoutingTime(false)
        }
        
    }, [coutingTime])

    const saveTimeChanges = (savedDate, completedTime, isActive, isFinish) => {
        props.setSaveLocalTime((prev) => {
            const changingTimerFormArray = {
                ...prev, [props.typeTimer]: [
                    ...prev[props.typeTimer].map(item => {
                        if(item.id === props.id) {
                            item = {
                                id: props.id,
                                savedDate: savedDate,
                                completedTime: completedTime,
                                isActive: isActive,
                                isFinish: isFinish
                            }
                        }
    
                        return item
                    })
                ]
            }

            localStorage.USER_TIME = JSON.stringify(changingTimerFormArray)

            return changingTimerFormArray
        })
    }

    const removeTimer = () => {
        const arrayTimes = JSON.parse(localStorage.getItem('USER_TIME'))

        props.setSaveLocalTime((prev) => {
            return {
                ...prev, [props.typeTimer]: [
                    ...prev[props.typeTimer].filter(item => item.id !== props.id)
                ]
            }
        })

        arrayTimes[props.typeTimer] = arrayTimes[props.typeTimer].filter(
            item => item.id !== props.id
        )

        localStorage.USER_TIME = JSON.stringify(arrayTimes)
    }

    return (
        <>
            <div 
                className={`TimerInterface-containerAnimationTimer ${animationTimerRemove ? 'TimerInterface-animationTimerRemove' : ''}`}
                onAnimationEnd={(e) => {
                    if (e.animationName === 'animationTimerRemoveSize' && !props.generalSettings.isFinish) {
                        clearInterval(intervalTimer.current)

                        removeTimer()
                    } else if (e.animationName === 'animationTimerRemoveSize' && props.generalSettings.isFinish) {
                        clearInterval(intervalTimer.current)
                        clearInterval(intervalNotify.current)
                        removeTimer()

                        window.blur()
                        document.title = tabTitle
                        document.head.children[1].attributes[1].value = tabIcon
                    }
                }}
            >
                <div className='TimerInterface-timerСreateAnimation'></div>
                
                <div className='TimerInterface-containerTimer'>
                    <div className='TimerInterface-conteinerTimerStart'>
                        {
                            props.generalSettings.isFinish &&
                                <button
                                    className='TimerInterface-completedTimerBtn'
                                    onClick={() => {
                                        // trigger animation remove btn createTimer
                                        if (props.saveLocalTime[props.typeTimer].length - 1 !== props.maxAmountTimers) {
                                            props.setAnimationBtnCreateTimer(true)
                                        } else {
                                            props.setAnimationBtnCreateTimer(false)
                                        }

                                        setAnimationTimerRemove(true)
                                    }}
                                >
                                    <img 
                                        className='TimerInterface-completedTimerBtnImg' 
                                        src={iconCompleteTimer} 
                                    />
                                </button>
                        }
                    
                        {
                            !props.generalSettings.isFinish &&
                                <button
                                    className='TimerInterface-removeTimerBtn'
                                    
                                    onClick={() => {
                                        // trigger animation remove btn createTimer
                                        if (props.saveLocalTime[props.typeTimer].length - 1 !== props.maxAmountTimers) {
                                            props.setAnimationBtnCreateTimer(true)
                                        } else {
                                            props.setAnimationBtnCreateTimer(false)
                                        }
                                        
                                        setAnimationTimerRemove(true)
                                    }}
                                >
                                    <img 
                                        className='TimerInterface-removeTimerBtnImg' 
                                        src={iconRemoveTimer} 
                                    />
                                </button>
                        }
                        
                        <div className='TimerInterface-timer'>
                            <div className='TimerInterface-time'>
                                <Timer
                                    zeroLength={zeroLength}

                                    selectedTime={selectedTime}
                                    loadTime={loadTime}
                                    setLoadTime={setLoadTime}
                                    remainingTime={remainingTime}
                                    setRemainingTime={setRemainingTime}
                                    finishingTime={finishingTime}
                                    setFinishingTime={setFinishingTime}
                                    startTimer={startTimer}
                                    setStartTimer={setStartTimer}

                                    saveTimeChanges={saveTimeChanges}

                                    intervalTimer={intervalTimer}
                                    intervalNotify={intervalNotify}

                                    tabBlinkNotify={tabBlinkNotify}
                                    agentSoundNotify={props.agentSoundNotify}
                                />
                            </div>

                            <div className='TimerInterface-containerCompletedTimer'>
                                <p className='TimerInterface-completedTimerText'>Completed: </p>
                                <p>{props.generalSettings.completedTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className='TimerInterface-containerTimerEnd'>
                        {
                            !props.generalSettings.isActive &&
                                !props.generalSettings.isFinish &&
                                    <div className='TimerInterface-containerTimerSelect'>
                                        <select 
                                            className='TimerInterface-timerSelect'
                                            onWheel={(e) => scrollHandler(e)}
                                            onMouseEnter={() => stopScroll(document.querySelector('.Main-wrapper'))}
                                            onMouseLeave={() => resumeScroll(document.querySelector('.Main-wrapper'))}
                                            onChange={(e) => {
                                                setSelectedTime(e.target.value)
                                            }}
                                        > 
                                            <option>Select time</option>
                                            {
                                                props.collectionTimes.map((item, i) => {
                                                    return <option key={i} value={item.value}>{item.text}</option>
                                                })
                                            }  
                                        </select>

                                        <button
                                            className='TimerInterface-startTimerBtn'
                                            style={selectedTime === 'Select time' ? {cursor: 'not-allowed', opacity: '50%'} : {cursor: 'pointer'}}
                                            disabled={selectedTime === 'Select time' ? true : false} 
                                            onClick={() => {
                                                setFinishingTime(new Date())
                                                setCoutingTime(true)
                                                setStartTimer(true)
                                            }}
                                        >
                                            <img 
                                                className='TimerInterface-startTimerBtnImg' 
                                                src={iconStartTimer} 
                                            />
                                        </button>
                                    </div>
                        }
                        
                        
                        {
                            props.generalSettings.isActive &&
                                <button
                                    className='TimerInterface-cancelTimerBtn'
                                    onClick={() => {
                                        clearInterval(intervalTimer.current)
                                        setStartTimer(false)
                                        setSelectedTime('Select time')
                                        setRemainingTime((remainingTime) => {
                                            return {
                                                ...remainingTime,
                                                hours: '00',
                                                minutes: '00',
                                                seconds: '00'
                                            }
                                        })
                                        saveTimeChanges(
                                            null, 
                                            '00:00:00', 
                                            false, 
                                            false
                                        )
                                    }}
                                >
                                    <img 
                                        className='TimerInterface-cancelTimerBtnImg' 
                                        src={iconCancelTimer} 
                                    />
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}