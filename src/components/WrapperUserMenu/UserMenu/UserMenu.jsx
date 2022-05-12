import { React } from 'react';

// icon
import iconVolume from '../../../img/icon/iconVolume.svg';

// style
import './UserMenu.css'

export const UserMenu = (props) => {
    const selectedNewSound = (e) => {
        props.setSoundNotify(new Audio(e.target.options[e.target.selectedIndex].attributes[0].value))

        localStorage.USER_SETTINGS = JSON.stringify({
            soundNotify: props.toggleSoundNotify,
            music: e.target.options[e.target.selectedIndex].attributes[0].value,
            volume: props.volumeSoundNotify
        })
    }

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
                
                selectedNewSound(e)
            }
        } else if(e.deltaY > 0){
            if(e.target.options.selectedIndex !== e.target.options.length - 1) {
                e.target.options.selectedIndex++

                selectedNewSound(e)
            }
        }
    }

    return (
        <div className='UserMenu-wrapper'>
            <div className='UserMenu-containerNotification'>
                <p className='UserMenu-titleNotification'>Notification Settings</p>

                <div className='UserMenu-containerToggleSound'>
                    <p className='UserMenu-textToggle'>On \ Off</p>

                    
                    {/* <input 
                        onChange={() => setToggleSoundNotify()}
                        className='UserMenu-toggleInput' 
                        type='checkbox' 
                    /> */}
                    {/* checkbox */}
                    <label className='UserMenu-toggleContainer'>
                        <input
                            className='UserMenu-toggleInput'
                            onChange={(e) => {
                                props.setToggleSoundNotify(e.target.checked)

                                localStorage.USER_SETTINGS = JSON.stringify({
                                    soundNotify: e.target.checked,
                                    music: props.soundNotify.attributes[1].value,
                                    volume: props.volumeSoundNotify
                                })
                            }}
                            type='checkbox'
                            checked={props.toggleSoundNotify} // dinamic attribute (Instead of defaultValue)
                        />
                        <span className='UserMenu-toggleSlider'></span>
                    </label>
                </div>
                        
                <div className='UserMenu-containerSelectSound'>
                    <p className='UserMenu-textSelect'>Sound</p>

                    {/* sound select */}
                    <select
                        className='UserMenu-selectSound'
                        onWheel={(e) => scrollHandler(e)}
                        onMouseEnter={() => stopScroll(document.querySelector('.UserMenu-wrapper'))}
                        onMouseLeave={() => resumeScroll(document.querySelector('.UserMenu-wrapper'))}
                        onChange={(e) => selectedNewSound(e)}
                        value={props.soundNotify.attributes[1].value} // dinamic attribute (Instead of defaultValue)
                    >
                        {
                            props.collectionSoundNotify.map((item, i) => {
                                return <option key={i} music={item.music} value={item.value}>{item.text}</option>
                            })
                        }  
                    </select>
                </div>

                <div className='UserMenu-containerVolume'>
                    <p className='UserMenu-textVolume'>Volume</p>

                    {/* slider */}
                    <div className='UserMenu-wrapperVolume'>
                        <img 
                            className='UserMenu-iconVolume' 
                            src={iconVolume}
                        />

                        <input
                            className='UserMenu-inputVolume' 
                            type='range'
                            min={0}
                            max={10}
                            step={1}
                            onChange={(e) => {
                                props.setVolumeSoundNotify(e.target.value)

                                console.log(props.volumeSoundNotify)
                                
                                localStorage.USER_SETTINGS = JSON.stringify({
                                    soundNotify: props.toggleSoundNotify,
                                    music: props.soundNotify.attributes[1].value,
                                    volume: e.target.value
                                })
                            }}
                            value={props.volumeSoundNotify} // dinamic attribute (Instead of defaultValue)
                        />
                    </div>

                    <div className='UserMenu-containerNotifyBtns'>
                        <button 
                            className='UserMenu-btnListenSound'
                            onClick={() => props.tabSoundNotify(props.toggleSoundNotify, props.soundNotify, props.volumeSoundNotify)}
                        >Test Sound</button>

                        <button
                            className='UserMenu-btnSoundPermissions'
                            onClick={() => props.setToggleModalWindowPermission(true)}
                        >Sound Permissions</button>
                    </div>
                </div>
            </div>

            <div className='UserMenu-containerDangerBtns'>
                <p className='UserMenu-titleDanger'>Dangerous Stuff</p>

                <div className='UserMenu-wrapperDangerBtns'>
                    <button
                        className='UserMenu-btnSoftReset'
                        name={'soft'}
                        onClick={(e) => {
                            props.setTypeReset(e.target.name)
                            props.setToggleModalWindowDangerousSettings(true)
                        }}
                    >Timers Reset</button>

                    <button
                        className='UserMenu-btnHardReset'
                        name={'hard'}
                        onClick={(e) => {
                            props.setTypeReset(e.target.name)
                            props.setToggleModalWindowDangerousSettings(true)
                        }}
                    >Reset All</button>
                </div>
            </div>
        
            <p className='UserMenu-textBackground'>MENU</p>
        </div>
    )
}

export default UserMenu;