import { React, useEffect } from 'react';

export const Timer = (props) => {
    //* setTimeOnTimer
    useEffect(() => {
        const [id, hours, minutes, seconds] = props.selectedTime.split('_')

        if(props.selectedTime !== 'Select time') {
            props.setRemainingTime(() => {
                return {
                    ...props.remainingTime,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                }
            })
        } else {
            props.setRemainingTime(() => {
                return {
                    ...props.remainingTime,
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                }
            })
        }
        
    }, [props.selectedTime])

    //* loading time
    useEffect(() => {
        if (props.loadTime) {
            const currentTime = new Date()
            const countDownTime = new Date()
    
            countDownTime.setHours(props.finishingTime.getHours() - currentTime.getHours())
            countDownTime.setMinutes(props.finishingTime.getMinutes() - currentTime.getMinutes())
            countDownTime.setSeconds(props.finishingTime.getSeconds() - currentTime.getSeconds())
    
            props.setRemainingTime(() => {
                return {
                    ...props.remainingTime,
                    hours: countDownTime.getHours(),
                    minutes: countDownTime.getMinutes(),
                    seconds: countDownTime.getSeconds()
                }
            })

            props.setLoadTime(false)
        }
        
    }, [props.loadTime])

    //* TimerOn/Off
    useEffect(() => {
        if (props.startTimer) {
            props.intervalTimer.current = setInterval(() => {
                const currentTime = new Date()
                const countDownTime = new Date()

                countDownTime.setHours(props.finishingTime.getHours() - currentTime.getHours())
                countDownTime.setMinutes(props.finishingTime.getMinutes() - currentTime.getMinutes())
                countDownTime.setSeconds(props.finishingTime.getSeconds() - currentTime.getSeconds())

                if (props.finishingTime.getTime() - currentTime.getTime() > 0) {
                    props.setRemainingTime(() => {
                        return {
                            ...props.remainingTime,
                            hours: countDownTime.getHours(),
                            minutes: countDownTime.getMinutes(),
                            seconds: countDownTime.getSeconds()
                        }
                    })
                } else {
                    clearInterval(props.intervalTimer.current)
                    props.setRemainingTime(() => {
                        return {
                            ...props.remainingTime,
                            hours: '00',
                            minutes: '00',
                            seconds: '00'
                        }
                    })
                    props.saveTimeChanges(
                        null,
                        String(props.finishingTime.getHours()).padStart(props.zeroLength, '0') + `:` + String(props.finishingTime.getMinutes()).padStart(props.zeroLength, '0') + `:` + String(props.finishingTime.getSeconds()).padStart(props.zeroLength, '0'),
                        false,
                        true
                    )

                    props.agentSoundNotify()
                    props.tabBlinkNotify()
                }

            }, 1000)
        }

    }, [props.startTimer])

    return (
        <>
            {
                String(props.remainingTime.hours).padStart(props.zeroLength, '0') + `:` + 
                String(props.remainingTime.minutes).padStart(props.zeroLength, '0') + `:` + 
                String(props.remainingTime.seconds).padStart(props.zeroLength, '0')
            }
        </>
    )
}