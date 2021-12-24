import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="night"
                     src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>ava + description</div>
            </div>
        </div>
    )
}

export default ProfileInfo