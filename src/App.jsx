import { React, useState, useEffect, useRef } from 'react';

// components
import { TimerCreater } from './components/TimerCreater/TimerCreater';
import { UserMenu } from './components/UserMenu/UserMenu';
import { ModalWindow } from './components/ModalWindow/ModalWindow';


// styles
import './style/App.css';
import './style/media.css';

// fonts
import './style/fonts.css'

// sounds 
import soundNotify1 from '../src/music/1.mp3';
import soundNotify2 from '../src/music/2.mp3';
import soundNotify3 from '../src/music/3.mp3';
import soundNotify4 from '../src/music/4.mp3';
import soundNotify5 from '../src/music/5.mp3';
import soundNotify6 from '../src/music/6.mp3';
import shipGirlsVoice from '../src/music/7.mp3';

export function App() {
    const commTimes = [
        {text: '00:01:00', value: 'COMM_00_01_00'},
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
        {text: '10:00:00', value: 'COMM_10_00_00'}
    ]
    const bookTimes = [
        {text: '02:00:00', value: 'BOOK_02_00_00'},
        {text: '04:00:00', value: 'BOOK_04_00_00'},
        {text: '08:00:00', value: 'BOOK_08_00_00'}
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
        {text: '12:00:00', value: 'PROJ_10_00_00'}
    ]
    const collectionSoundNotify = [
        {text: 'Sound 1', value: soundNotify1},
        {text: 'Sound 2', value: soundNotify2},
        {text: 'Sound 3', value: soundNotify3},
        {text: 'Sound 4', value: soundNotify4},
        {text: 'Sound 5', value: soundNotify5},
        {text: 'Sound 6', value: soundNotify6},
        {text: `Ship girl's voice`, value: shipGirlsVoice}
    ]

    const [saveLocalTime, setSaveLocalTime] = useState({COMM:[], BOOK:[], PROJ:[]})
    const [toggleUserMenu, setToggleUserMenu] = useState(false)
    const [toggleModalWindow, setToggleModalWindow] = useState(
        localStorage.USER_FIRST_TIME ?
            JSON.parse(localStorage.USER_FIRST_TIME).firstTime
            :
            true
    )
    const [toggleSoundNotify, setToggleSoundNotify] = useState(
        localStorage.USER_SETTINGS ? 
            JSON.parse(localStorage.USER_SETTINGS).soundNotify
            : 
            true
    )
    const [soundNotify, setSoundNotify] = useState(
        localStorage.USER_SETTINGS ? 
            new Audio(JSON.parse(localStorage.USER_SETTINGS).music) 
            : 
            new Audio(soundNotify1)
    )
    const [volumeSoundNotify, setVolumeSoundNotify] = useState(
        localStorage.USER_SETTINGS ? 
            JSON.parse(localStorage.USER_SETTINGS).volume
            : 
            '5'
    )

    const currentPlayingSound = useRef(soundNotify)
    const controlSoundNotify = useRef(false)
    const intervalAgentControl = useRef()
  
    //* LC check
    if (!localStorage.USER_TIME) {
        localStorage.setItem('USER_TIME', (JSON.stringify({COMM:[], BOOK:[], PROJ:[]})))
    }

    if (!localStorage.USER_SETTINGS) {
        localStorage.setItem('USER_SETTINGS', JSON.stringify({
            soundNotify: true,
            music: collectionSoundNotify[0].value,
            volume: '5'
        }))
    }

    if (!localStorage.USER_FIRST_TIME) {
        localStorage.setItem('USER_FIRST_TIME', (JSON.stringify({firstTime: true})))
    }

    //* load LC
    useEffect(() => {
        const arrayTimes = JSON.parse(localStorage.USER_TIME)

        if(arrayTimes.COMM.length || arrayTimes.BOOK.length || arrayTimes.PROJ.length) {
            setSaveLocalTime(() => {
                return arrayTimes
            })
        }
  
    }, [0])

    //* notify
    const tabSoundNotify = (toggleSoundNotify, soundNotify, volumeSoundNotify) => {
        if (toggleSoundNotify) {
            // clearing prev sound
            currentPlayingSound.current.pause()
            currentPlayingSound.current.currentTime = 0
            currentPlayingSound.current = soundNotify

            // add new sound
            currentPlayingSound.current.volume = volumeSoundNotify / 10
            currentPlayingSound.current.play()
        }
    }

    //* manager notify
    const agentSoundNotify = () => {
        const music = soundNotify
        const volume = volumeSoundNotify
        
        if (!controlSoundNotify.current) {
            controlSoundNotify.current = true

            tabSoundNotify(
                toggleSoundNotify, 
                music, 
                volume
            )

            intervalAgentControl.current = setInterval(() => {
                controlSoundNotify.current = false

                clearInterval(intervalAgentControl.current)
            }, 10 * 1000)
        } 
    }

    return (
        <>
            {/* ModalWindow */}
            <div className={`ModalWindow-blur ${toggleModalWindow ? 'activeModalWindow' : ''}`}>
                <ModalWindow 
                    toggleModalWindow={toggleModalWindow}
                    setToggleModalWindow={setToggleModalWindow}
                />
            </div>

            {/* UserMenu */}
            <div className={`Main-containerUserMenu ${toggleUserMenu ? 'activeUserMenu' : ''}`}>
                <UserMenu
                    collectionSoundNotify={collectionSoundNotify}
                    toggleSoundNotify={toggleSoundNotify}
                    setToggleSoundNotify={setToggleSoundNotify}
                    tabSoundNotify={tabSoundNotify}
                    soundNotify={soundNotify}
                    setSoundNotify={setSoundNotify}
                    volumeSoundNotify={volumeSoundNotify}
                    setVolumeSoundNotify={setVolumeSoundNotify}

                    setSaveLocalTime={setSaveLocalTime}
                    setToggleModalWindow={setToggleModalWindow}
                />
            </div>

            {/* UserMenu btns */}
            <div className='Main-containerBtnsUserMenu'>
                <button 
                    className={`Main-containerBtnArrow ${toggleUserMenu ? 'activeUserMenu' : ''}`}
                    style={toggleUserMenu ? {zIndex: -1} : {zIndex: 1}}
                    onClick={() => {
                        setToggleUserMenu(true)
                    }}
                >
                    <div className='Main-containerMainArrow'>
                        <div className={`Main-mainArrowUp ${toggleUserMenu ? 'animation' : ''}`}></div>
                        <div className={`Main-mainArrowDown ${toggleUserMenu ? 'animation' : ''}`}></div>
                    </div>
                    
                    <div className='Main-containerSecondArrow'>
                        <div className={`Main-secondArrowUp ${toggleUserMenu ? 'animation' : ''}`}></div>
                        <div className={`Main-secondArrowDown ${toggleUserMenu ? 'animation' : ''}`}></div>
                    </div>
                </button>

                <button 
                    className={`Main-containerBtnCloseUserMenu ${toggleUserMenu ? 'activeUserMenu' : ''}`}
                    style={toggleUserMenu ? {zIndex: 1, cursor: 'pointer'} : {zIndex: -1}}
                    disabled={toggleUserMenu ? false : true} 
                    onClick={() => {
                        setToggleUserMenu(false)
                    }}
                >
                    <div className={`Main-lineUp ${toggleUserMenu ? 'animation' : ''}`}></div>
                    <div className={`Main-lineDown ${toggleUserMenu ? 'animation' : ''}`}></div>
                </button>
            </div>

            <div className={`Main-containerBgTitle ${toggleUserMenu ? 'activeUserMenu' : ''}`}>
                <h1 className='Main-titleBg'>ALTimes</h1>

                <p className='Main-textVer'>v. 0.2</p>
    
                <span className='Main-dotTitle'></span>
            </div>

            {/* main container */}
            <div className={`Main-container ${toggleUserMenu ? 'activeUserMenu' : ''}`}>
                <div className={`Main-wrapper ${toggleModalWindow ? 'activeModalWindow' : ''}`}>
                    {/* COMMISSION */}
                    <div className='Main-containerTimers'>
                        <p className='Main-titleContainerTimers'>Commission</p>

                        <TimerCreater
                            agentSoundNotify={agentSoundNotify}
                            controlSoundNotify={controlSoundNotify}

                            saveLocalTime={saveLocalTime}
                            setSaveLocalTime={setSaveLocalTime}
                            collectionTimes={commTimes}
                            maxAmountTimers={4}
                            typeTimer='COMM'
                        />
                    </div>

                    {/* CLASSROOM */}
                    <div className='Main-containerTimers'>
                        <p className='Main-titleContainerTimers'>Classroom</p>

                        <TimerCreater
                            agentSoundNotify={agentSoundNotify}
                            controlSoundNotify={controlSoundNotify}

                            saveLocalTime={saveLocalTime}
                            setSaveLocalTime={setSaveLocalTime}
                            collectionTimes={bookTimes}
                            maxAmountTimers={4}
                            typeTimer='BOOK'
                        />
                    </div>

                    {/* LAB */}
                    <div className='Main-containerTimers'>
                        <p className='Main-titleContainerTimers'>Lab</p>

                        <TimerCreater
                            agentSoundNotify={agentSoundNotify}
                            controlSoundNotify={controlSoundNotify}

                            saveLocalTime={saveLocalTime}
                            setSaveLocalTime={setSaveLocalTime}
                            collectionTimes={projTimes}
                            maxAmountTimers={1}
                            typeTimer='PROJ'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;