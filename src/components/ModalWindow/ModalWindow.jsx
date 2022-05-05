import { React, useState } from 'react';

// img
import icon1 from '../../img/permissions1.jpg';
import icon2 from '../../img/permissions2.jpg';

// styles
import './ModalWindow.css';

export const ModalWindow = (props) => {

    return (
        <div className={`ModalWindow-container ${props.toggleModalWindow ? 'activeModalWindow' : ''}`}>
            <div className='ModalWindow-containerNavbar'>
                <button 
                    className='ModalWindow-containerCloseBtn'
                    onClick={() => props.setToggleModalWindow(false)}
                >
                    <span className='closeBtnLineUp'></span>
                    <span className='closeBtnLineDown'></span>
                </button>

                <div className='ModalWindow-containerTitle'>
                    <p className='ModalWindow-title'>Warning</p>

                    <span className='ModalWindow-line'></span>
                </div>
            </div>
            
            <div className='ModalWindow-containerDescription'>
                <div className='ModalWindow-containerSteps'>
                    <img 
                        className='ModalWindow-imgSteps' 
                        src={icon1}
                    ></img>

                    <img 
                        className='ModalWindow-imgSteps' 
                        src={icon2}
                    ></img>
                </div>

                <p className='ModalWindow-hint'>(hover over the images to scale up)</p>

                <p className='ModalWindow-description'>Due to some browser limitations (especially in Chrome) we recommend you to manually set sound permissions to avoid unwanted behaviour with the sound notifications. Thank you!</p>
            </div>

            <button
                className='ModalWindow-btnDismiss'
                onClick={() => {
                    props.setToggleModalWindow(false)

                    localStorage.USER_FIRST_TIME = JSON.stringify({
                        firstTime: false
                    })
                }}
            >Dismiss</button>
        </div>
    )
}

export default ModalWindow;