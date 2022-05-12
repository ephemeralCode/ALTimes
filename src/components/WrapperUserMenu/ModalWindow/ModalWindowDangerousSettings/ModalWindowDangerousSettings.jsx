import { React, useState } from 'react';
import { SettingsCompleteNotify } from './SettingsCompleteNotify/SettingsCompleteNotify';

// styles
import './ModalWindowDangerousSettings.css';

export const ModalWindowDangerousSettings = (props) => {
    const [resetComplete, setResetComplete] = useState(false)
    const [activeModalWindow, setActiveModalWindow] = useState(false)

    return (
        <>
            <div className={`ModalWindow-container dangerous ${activeModalWindow ? 'activeModalWindow' : ''}`}>
                <div className='ModalWindow-containerNavbar'>
                    <button 
                        className='ModalWindow-containerCloseBtn dangerous'
                        onClick={() => {
                            props.setToggleModalWindowDangerousSettings(false)
                        }}
                    >
                        <span className='closeBtnLineUp'></span>
                        <span className='closeBtnLineDown'></span>
                    </button>

                    <div className='ModalWindow-containerTitle'>
                        <p className='ModalWindow-title dangerous'>Warning</p>

                        <span className={`ModalWindow-line dangerous ${props.toggleModalWindowDangerousSettings ? 'animationOn' : 'animationOff'}`}></span>
                    </div>
                </div>
                
                <div className='ModalWindow-containerDescription'>
                    <p className='ModalWindow-dangerousDescription'>Are you sure?</p>    
                </div>

                <div className='ModalWindow-containerDangerousBtns'>
                    <button
                        className='ModalWindow-dangerousBtn'
                        onClick={() => {
                            props.setToggleModalWindowDangerousSettings(false)
                        }}
                    >No</button>

                    {
                        props.typeReset == 'soft' ? 
                            <button
                                className='ModalWindow-dangerousBtn'
                                onClick={() => {
                                    setResetComplete(true)
                                    setActiveModalWindow(true)
                                    props.softReset()

                                    setTimeout(() => {
                                        setResetComplete(false)
                                        setActiveModalWindow(false)

                                        props.setToggleModalWindowDangerousSettings(false)
                                    }, 2000)
                                }}
                            >Yes</button>

                            :

                            <button
                                className='ModalWindow-dangerousBtn'
                                onClick={() => {
                                    setResetComplete(true)
                                    setActiveModalWindow(true)
                                    props.hardReset()

                                    setTimeout(() => {
                                        setResetComplete(false)
                                        setActiveModalWindow(false)

                                        props.setToggleModalWindowDangerousSettings(false)
                                    }, 2000)
                                }}
                            >Yes</button>
                    }
                </div>
            </div>

            <SettingsCompleteNotify 
                resetComplete={resetComplete}
            />
        </>
    )
}