import React from 'react';
import { useState, useEffect } from "react";
import { Timer } from './Timer';
import './style/app.css'

export default function App() {
    const [amountTimers, setAmountTimers] = useState(4);
    const [saveLocalTime, setSaveLocalTime] = useState({
        COMM: [

        ],

        BOOK: [

        ],

        PROJ: [

        ]
    });

    const commTimes = [
        {text: '10:00:00', value: 'COMM_10_00_00'},
        {text: '09:00:00', value: 'COMM_09_00_00'},
        {text: '08:00:00', value: 'COMM_08_00_00'},
        {text: '06:00:00', value: 'COMM_06_00_00'},
        {text: '05:20:00', value: 'COMM_05_20_00'},
        {text: '05:00:00', value: 'COMM_05_00_00'},
        {text: '04:00:00', value: 'COMM_04_00_00'},
        {text: '03:20:00', value: 'COMM_03_20_00'},
        {text: '03:00:00', value: 'COMM_03_00_00'},
        {text: '02:40:00', value: 'COMM_02_40_00'},
        {text: '02:30:00', value: 'COMM_02_30_00'},
        {text: '02:15:00', value: 'COMM_02_15_00'},
        {text: '02:00:00', value: 'COMM_02_00_00'},
        {text: '01:45:00', value: 'COMM_01_45_00'},
        {text: '01:40:00', value: 'COMM_01_40_00'},
        {text: '01:30:00', value: 'COMM_01_30_00'},
        {text: '01:20:00', value: 'COMM_01_20_00'},
        {text: '01:10:00', value: 'COMM_01_10_00'},
        {text: '01:00:00', value: 'COMM_01_00_00'},
        {text: '00:30:00', value: 'COMM_00_30_00'},
        {text: '00:20:00', value: 'COMM_00_20_00'}
    ]

    const bookTimes = [
        {text: '08:00:00', value: 'BOOK_08_00_00'},
        {text: '04:00:00', value: 'BOOK_04_00_00'},
        {text: '02:00:00', value: 'BOOK_02_00_00'}
    ]
    
    const projTimes = [
        {text: '12:00:00', value: 'PROJ_10_00_00'},
        {text: '10:00:00', value: 'PROJ_10_00_00'},
        {text: '09:00:00', value: 'PROJ_09_00_00'},
        {text: '08:00:00', value: 'PROJ_08_00_00'},
        {text: '06:00:00', value: 'PROJ_06_00_00'},
        {text: '05:00:00', value: 'PROJ_05_00_00'},
        {text: '04:00:00', value: 'PROJ_04_00_00'},
        {text: '03:00:00', value: 'PROJ_03_00_00'},
        {text: '02:30:00', value: 'PROJ_02_30_00'},
        {text: '02:00:00', value: 'PROJ_02_00_00'},
        {text: '01:30:00', value: 'PROJ_01_30_00'},
        {text: '01:00:00', value: 'PROJ_01_00_00'},
        {text: '00:30:00', value: 'PROJ_00_30_00'},
    ]

    const setTime = (e) => {
        let typeTimer = e.target.name

        saveLocalTime[typeTimer].length ?
            setSaveLocalTime((prev) => {
                return {
                    ...prev, 
                    [typeTimer]: [
                        ...prev[typeTimer], {
                            id: prev[typeTimer][prev[typeTimer].length - 1].id + 1,
                            time: '00:00:00'
                        }
                    ],
                }
            })

            :

            setSaveLocalTime((prev) => {
                return {
                    ...prev, 
                    [typeTimer]: [
                        ...prev[typeTimer], {
                            id: 0,
                            time: '00:00:00'
                        }
                    ],
                }
            })  
    }

    return (
        <div className='container'>
            {/*  COMM */}
            <div className='containerTimer'>
                <div className='containerCommissionTitle'>
                    <p>COMMISSION</p>

                    <div className='containerCommissionTitleAvailable'>
                        <p>Available {amountTimers - saveLocalTime.COMM.length}</p>

                        <label className='containerCommissionTitleEvent'>
                            <p>Event</p>
                            <input 
                                type='checkbox' 
                                onClick={(e) => {
                                    setAmountTimers(e.target.checked ? 5 : 4)

                                    {
                                        saveLocalTime.COMM.length === 5 &&
                                            setSaveLocalTime((prev) => {
                                                return {
                                                    ...prev, 
                                                    COMM: [
                                                        ...prev.COMM.slice(0, -1)
                                                    ],
                                                }
                                            })
                                    }
                                }}
                            />
                        </label>
                    </div>
                </div>
                
                <div>
                    {
                        saveLocalTime.COMM.length ? 
                            saveLocalTime.COMM.map((item, i) => {
                                return <Timer 
                                    item={item} 
                                    key={item.id}
                                    id={i}
                                    saveLocalTime={saveLocalTime} 
                                    setSaveLocalTime={setSaveLocalTime}
                                    times={commTimes}
                                    typeTimer={'COMM'}
                                />
                            })
                        
                            : 
                        
                            <div className='availableTimer'>Not found</div>
                    }
                </div>
                
                {
                    saveLocalTime.COMM.length !== amountTimers && 
                        <button 
                            name='COMM'
                            className='addTimer' 
                            onClick={(e) => {setTime(e)}}
                        >+</button>
                }
            </div>

            {/* BOOK */}
            <div className='containerTimer'>
                <div className='containerTitle'>
                    <p>CLASSROOM</p>
                    <div>Available {4 - saveLocalTime.BOOK.length}</div>
                </div>
                
                <div>
                    {
                        saveLocalTime.BOOK.length ? 
                            saveLocalTime.BOOK.map((item, i) => {
                                return <Timer 
                                    item={item} 
                                    key={item.id}
                                    id={i}
                                    saveLocalTime={saveLocalTime} 
                                    setSaveLocalTime={setSaveLocalTime}
                                    times={bookTimes}
                                    typeTimer={'BOOK'} 
                                />
                            })
                        
                            : 
                        
                            <div className='availableTimer'>Not found</div>
                    }
                </div>
                
                {
                    saveLocalTime.BOOK.length !== 4 && 
                        <button 
                            name='BOOK'
                            className='addTimer' 
                            onClick={(e) => {setTime(e)}}
                        >+</button>
                }
            </div>

            {/* PROJ */}
            <div className='containerTimer'>
                <div className='containerTitle'>
                    <p>LAB</p>
                    <div>Available {1 - saveLocalTime.PROJ.length}</div>
                </div>
                
                <div>
                    {
                        saveLocalTime.PROJ.length ? 
                            saveLocalTime.PROJ.map((item, i) => {
                                return <Timer 
                                    item={item} 
                                    key={item.id}
                                    id={i}
                                    saveLocalTime={saveLocalTime} 
                                    setSaveLocalTime={setSaveLocalTime}
                                    times={projTimes}
                                    typeTimer={'PROJ'}
                                />
                            })
                        
                            : 
                        
                            <div className='availableTimer'>Not found</div>
                    }
                </div>
                
                {
                    saveLocalTime.PROJ.length !== 1 && 
                        <button 
                            name='PROJ'
                            className='addTimer' 
                            onClick={(e) => {setTime(e)}}
                        >+</button>
                }
            </div>
        </div>
    )
}