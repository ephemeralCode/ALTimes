import { React, useState } from 'react';

// components
import { UserMenu } from './UserMenu/UserMenu';
import { ModalWindowPermission } from './ModalWindow/ModalWindowPermission/ModalWindowPermission';
import { ModalWindowDangerousSettings } from './ModalWindow/ModalWindowDangerousSettings/ModalWindowDangerousSettings';

export const WrapperUserMenu = (props) => {
    const [typeReset, setTypeReset] = useState(false)

    const softReset = () => {
        props.setSaveLocalTime({COMM:[], BOOK:[], PROJ:[]})

        localStorage.setItem('USER_TIME', (JSON.stringify({COMM:[], BOOK:[], PROJ:[]})))
    }

    const hardReset = () => {
        props.setSaveLocalTime({COMM:[], BOOK:[], PROJ:[]})
        props.setSoundNotify(new Audio(props.collectionSoundNotify[0].value))
        props.soundNotify.current = new Audio(props.collectionSoundNotify[0].value)
        props.setVolumeSoundNotify(5)
        props.setToggleSoundNotify(true)

        localStorage.setItem('USER_TIME', (JSON.stringify({COMM:[], BOOK:[], PROJ:[]})))
        localStorage.setItem('USER_SETTINGS', JSON.stringify({
            soundNotify: true,
            music: props.collectionSoundNotify[0].value,
            volume: '5'
        }))
    }

    return (
        <>
            {/* ModalWindow Permission */}
            <div className={`ModalWindow-blur ${props.toggleModalWindowPermission ? 'activeModalWindow' : ''}`}>
                <ModalWindowPermission 
                    toggleModalWindowPermission={props.toggleModalWindowPermission}
                    setToggleModalWindowPermission={props.setToggleModalWindowPermission}
                />
            </div>

            {/* ModalWindow Dangerous settings */}
            <div className={`ModalWindow-blur ${props.toggleModalWindowDangerousSettings ? 'activeModalWindow' : ''}`}>
                <ModalWindowDangerousSettings 
                    toggleModalWindowDangerousSettings={props.toggleModalWindowDangerousSettings}
                    setToggleModalWindowDangerousSettings={props.setToggleModalWindowDangerousSettings}

                    softReset={softReset}
                    hardReset={hardReset}
                    typeReset={typeReset}
                />
            </div>

            {/* UserMenu */}
            <div className={`Main-containerUserMenu ${props.toggleUserMenu ? 'activeUserMenu' : ''}`}>
                <UserMenu
                    collectionSoundNotify={props.collectionSoundNotify}
                    toggleSoundNotify={props.toggleSoundNotify}
                    setToggleSoundNotify={props.setToggleSoundNotify}
                    soundNotify={props.soundNotify}
                    setSoundNotify={props.setSoundNotify}
                    volumeSoundNotify={props.volumeSoundNotify}
                    setVolumeSoundNotify={props.setVolumeSoundNotify}
                    tabSoundNotify={props.tabSoundNotify}

                    setSaveLocalTime={props.setSaveLocalTime}
                    
                    setToggleModalWindowPermission={props.setToggleModalWindowPermission}
                    setToggleModalWindowDangerousSettings={props.setToggleModalWindowDangerousSettings}
                    setTypeReset={setTypeReset}
                />
            </div>

            {/* UserMenu btns */}
            <div className='Main-containerBtnsUserMenu'>
                <button 
                    className={`Main-containerBtnArrow ${props.toggleUserMenu ? 'activeUserMenu' : ''}`}
                    style={props.toggleUserMenu ? {zIndex: -1} : {zIndex: 1}}
                    onClick={() => {
                        props.setToggleUserMenu(true)
                    }}
                >
                    <div className='Main-containerMainArrow'>
                        <div className={`Main-mainArrowUp ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                        <div className={`Main-mainArrowDown ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                    </div>
                    
                    <div className='Main-containerSecondArrow'>
                        <div className={`Main-secondArrowUp ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                        <div className={`Main-secondArrowDown ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                    </div>
                </button>

                <button 
                    className={`Main-containerBtnCloseUserMenu ${props.toggleUserMenu ? 'activeUserMenu' : ''}`}
                    style={props.toggleUserMenu ? {zIndex: 1, cursor: 'pointer'} : {zIndex: -1}}
                    disabled={props.toggleUserMenu ? false : true} 
                    onClick={() => {
                        props.setToggleUserMenu(false)
                    }}
                >
                    <div className={`Main-lineUp ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                    <div className={`Main-lineDown ${props.toggleUserMenu ? 'animation' : ''}`}></div>
                </button>
            </div>
        </>
    )
}