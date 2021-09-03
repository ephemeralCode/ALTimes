import React from 'react';
import { useState, useEffect } from "react";
import { Timer } from './Timer';
import './style/app.css';
import './style/font.css';

export default function App() {
    const amountTimers = 4;
    const [saveLocalTime, setSaveLocalTime] = useState({
        COMM: [
            
        ],

        BOOK: [

        ],

        PROJ: [

        ]
    });

    const commTimes = [
        {text: '00:20:00', value: 'COMM_00_20_00'},
        {text: '00:30:00', value: 'COMM_00_30_00'},
        {text: '01:00:00', value: 'COMM_01_00_00'},
        {text: '01:10:00', value: 'COMM_01_10_00'},
        {text: '01:20:00', value: 'COMM_01_20_00'},
        {text: '01:30:00', value: 'COMM_01_30_00'},
        {text: '01:40:00', value: 'COMM_01_40_00'},
        {text: '01:45:00', value: 'COMM_01_45_00'},
        {text: '02:00:00', value: 'COMM_02_00_00'},
        {text: '02:15:00', value: 'COMM_02_15_00'},
        {text: '02:30:00', value: 'COMM_02_30_00'},
        {text: '02:40:00', value: 'COMM_02_40_00'},
        {text: '03:00:00', value: 'COMM_03_00_00'},
        {text: '03:20:00', value: 'COMM_03_20_00'},
        {text: '04:00:00', value: 'COMM_04_00_00'},
        {text: '05:00:00', value: 'COMM_05_00_00'},
        {text: '05:20:00', value: 'COMM_05_20_00'},
        {text: '06:00:00', value: 'COMM_06_00_00'},
        {text: '08:00:00', value: 'COMM_08_00_00'},
        {text: '09:00:00', value: 'COMM_09_00_00'},
        {text: '10:00:00', value: 'COMM_10_00_00'},
    ]

    const bookTimes = [
        {text: '02:00:00', value: 'BOOK_02_00_00'},
        {text: '04:00:00', value: 'BOOK_04_00_00'},
        {text: '08:00:00', value: 'BOOK_08_00_00'},
    ]
    
    const projTimes = [
        {text: '00:30:00', value: 'PROJ_00_30_00'},
        {text: '01:00:00', value: 'PROJ_01_00_00'},
        {text: '01:30:00', value: 'PROJ_01_30_00'},
        {text: '02:00:00', value: 'PROJ_02_00_00'},
        {text: '02:30:00', value: 'PROJ_02_30_00'},
        {text: '03:00:00', value: 'PROJ_03_00_00'},
        {text: '04:00:00', value: 'PROJ_04_00_00'},
        {text: '05:00:00', value: 'PROJ_05_00_00'},
        {text: '06:00:00', value: 'PROJ_06_00_00'},
        {text: '08:00:00', value: 'PROJ_08_00_00'},
        {text: '09:00:00', value: 'PROJ_09_00_00'},
        {text: '10:00:00', value: 'PROJ_10_00_00'},
        {text: '12:00:00', value: 'PROJ_10_00_00'},  
    ]

    // проверка и создание LC
    if (!localStorage.getItem('USER_TIME')) {
        localStorage.setItem('USER_TIME', (JSON.stringify({COMM:[], BOOK:[], PROJ:[]})));
    }

    useEffect(() => {
        let arrayTimes = JSON.parse(localStorage.getItem('USER_TIME'))

        if(arrayTimes.COMM.length || arrayTimes.BOOK.length || arrayTimes.PROJ.length) {
            setSaveLocalTime(() => {return arrayTimes})
        }
    }, [0])

    // создание таймера
    const setTime = (e) => {
        let typeTimer = e.target.name
        let arrayTimes = JSON.parse(localStorage.getItem('USER_TIME'))

        // сохранение в хук созданного таймера
        setSaveLocalTime((prev) => {
            return {
                ...prev, 
                [typeTimer]: [
                    ...prev[typeTimer], {
                        id: prev[typeTimer].length ? 
                                prev[typeTimer][prev[typeTimer].length - 1].id + 1 : 0,
                        savedDate: null,
                        completedTime: '00:00:00',
                        isActive: false,
                        timerFinish: false
                    }
                ],
            }
        })

        // сохранение в LC таймера
        setSaveLocalTime((prev) => {
            arrayTimes[typeTimer].push({
                id: prev[typeTimer][prev[typeTimer].length - 1].id,
                savedDate: null,
                completedTime: '00:00:00',
                isActive: false,
                timerFinish: false
            })
    
            localStorage.USER_TIME = JSON.stringify(arrayTimes)

            return prev
        })     
    }

    return (
        <>
            <div className='containerBgTitle'>
                <p className='bgTitle'>ALTimes</p>
            </div>

            <div className='container'>
                {/*  COMM */}
                <fieldset className='containerTimers'>
                    <legend className='containerTitle'>
                        <p className='commissionTitle'>COMMISSION</p>
                    </legend>
                    
                    <div className='wrapperTimer'>
                        {
                            saveLocalTime.COMM.length ? 
                                saveLocalTime.COMM.map((item, i) => { 
                                    return <Timer 
                                    time={item}
                                    key={item.id}
                                    id={i}
                                    setSaveLocalTime={setSaveLocalTime}
                                    collectionTimes={commTimes}
                                    typeTimer={'COMM'}
                                    isActive={item.isActive}
                                    timerFinish={item.timerFinish}
                                    />
                                })
                            
                                : 
                            
                                <div className='availableTimerText'>Not found</div>
                        }
                    </div>
                    
                    {
                        saveLocalTime.COMM.length !== amountTimers && 
                            <div className='containerAddTimerBtn'>
                                <button 
                                    name='COMM'
                                    className='addTimerBtn' 
                                    onClick={(e) => {setTime(e)}}
                                ></button>
                                
                                <div className='containerTitleAvailable'>
                                    <p className='titleAvailable'>Available:</p><p>{amountTimers - saveLocalTime.COMM.length}</p>
                                </div>
                            </div>
                    }
                </fieldset>

                {/* BOOK */}
                <fieldset className='containerTimers'>
                    <legend className='containerTitle'>
                        <p>CLASSROOM</p>
                    </legend>
                    
                    <div className='wrapperTimer'>
                        {
                            saveLocalTime.BOOK.length ? 
                                saveLocalTime.BOOK.map((item, i) => {
                                    return <Timer 
                                        time={item}
                                        key={item.id}
                                        id={i}
                                        setSaveLocalTime={setSaveLocalTime}
                                        collectionTimes={bookTimes}
                                        typeTimer={'BOOK'}
                                        isActive={item.isActive}
                                        timerFinish={item.timerFinish}
                                    />
                                })
                            
                                : 
                            
                                <div className='availableTimerText'>Not found</div>
                        }
                    </div>
                    
                    {
                        saveLocalTime.BOOK.length !== 4 && 
                            <div className='containerAddTimerBtn'>
                                <button 
                                    name='BOOK'
                                    className='addTimerBtn' 
                                    onClick={(e) => {setTime(e)}}
                                ></button>

                                <div className='containerTitleAvailable'>
                                    <p className='titleAvailable'>Available:</p><p>{4 - saveLocalTime.BOOK.length}</p>
                                </div>
                            </div>
                    }
                </fieldset>

                {/* PROJ */}
                <fieldset className='containerTimers'>
                    <legend className='containerTitle'>
                        <p>LAB</p>
                    </legend>
                    
                    <div className='wrapperTimer'>
                        {
                            saveLocalTime.PROJ.length ? 
                                saveLocalTime.PROJ.map((item, i) => {
                                    return <Timer 
                                        time={item}
                                        key={item.id}
                                        id={i}
                                        setSaveLocalTime={setSaveLocalTime}
                                        collectionTimes={projTimes}
                                        typeTimer={'PROJ'}
                                        isActive={item.isActive}
                                        timerFinish={item.timerFinish}
                                    />
                                })
                            
                                : 
                            
                                <div className='availableTimerText'>Not found</div>
                        }
                    </div>
                    
                    {
                        saveLocalTime.PROJ.length !== 1 &&
                            <div className='containerAddTimerBtn'>
                                <button 
                                    name='PROJ'
                                    className='addTimerBtn' 
                                    onClick={(e) => {setTime(e)}}
                                ></button>

                                <div className='containerTitleAvailable'>
                                    <p className='titleAvailable'>Available:</p><p>{1 - saveLocalTime.PROJ.length}</p>
                                </div>
                            </div>
                    }
                </fieldset>

                {/* <div>
    
                    <br/>
                    <button onClick = {() => {
                        localStorage.clear()
                        localStorage.setItem('USER_TIME', (JSON.stringify({COMM:[], BOOK:[], PROJ:[]})));
                    }}
                        
                    >Update LC</button>
                </div> */}
            </div>
        </>
    )
}