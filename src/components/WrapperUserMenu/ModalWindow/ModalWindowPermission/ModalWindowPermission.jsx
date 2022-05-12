import { React } from 'react';

// img
import imgPermission1 from '../../../../img/permissions1.jpg';
import imgPermission2 from '../../../../img/permissions2.jpg';

// styles
import './ModalWindowPermission.css';

export const ModalWindowPermission = (props) => {
    return (
        <div className='ModalWindow-container'>
            <div className='ModalWindow-containerNavbar'>
                <button 
                    className='ModalWindow-containerCloseBtn'
                    onClick={() => {
                        props.setToggleModalWindowPermission(false)
                        props.setToggleModalWindowDangerousSettings(false)
                    }}
                >
                    <span className='closeBtnLineUp'></span>
                    <span className='closeBtnLineDown'></span>
                </button>

                <div className='ModalWindow-containerTitle'>
                    <p className='ModalWindow-title'>Warning</p>

                    <span className={`ModalWindow-line ${props.toggleModalWindowPermission ? 'animationOn' : 'animationOff'}`}></span>
                </div>
            </div>
            
            <div className='ModalWindow-containerDescription'>
                <div className='ModalWindow-containerSteps'>
                    <img 
                        className='ModalWindow-imgSteps' 
                        src={imgPermission1}
                    ></img>

                    <img 
                        className='ModalWindow-imgSteps' 
                        src={imgPermission2}
                    ></img>
                </div>

                <p className='ModalWindow-hint'>(hover over the images to scale up)</p>
 
                <p className='ModalWindow-description'>Due to some browser limitations (especially in Chrome) we recommend you to manually set sound permissions to avoid unwanted behaviour with the sound notifications. Thank you!</p>       
            </div>

            <button
                className='ModalWindow-btnDismiss'
                onClick={() => {
                    props.setToggleModalWindowPermission(false)

                    localStorage.USER_FIRST_TIME = JSON.stringify({
                        firstTime: false
                    })
                }}
            >Dismiss</button>
        </div>
    )
}