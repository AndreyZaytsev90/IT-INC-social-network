import React from 'react';
//import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PropsType} from "../../index";



const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts likesCount={props.likesCount} message={props.message}
                     id={props.id} name={props.name}/>
        </div>
    )
}

export default Profile