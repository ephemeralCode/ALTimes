import { React } from 'react';

// styles
import './SettingsCompleteNotify.css';

export const SettingsCompleteNotify = (props) => {
    return (
        <>
            <div className={`SettingsCompleteNotify-container ${props.resetComplete ? 'animation' : ''}`}>
                <div className='SettingsCompleteNotify-wrapper'>
                    <span className={`SettingsCompleteNotify-animationLine ${props.resetComplete ? 'animationOn' : 'animationOff'}`}></span>

                    <div className='SettingsCompleteNotify-containerLines'>
                        <span className='SettingsCompleteNotify-line'></span>

                        <p className='SettingsCompleteNotify-description'>Reset complete</p>

                        <span className='SettingsCompleteNotify-line'></span>
                    </div>  
                </div>
            </div>
        </>
    )
}