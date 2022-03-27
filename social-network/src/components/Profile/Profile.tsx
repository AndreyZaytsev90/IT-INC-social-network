import React from 'react';
//import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, MyPostsPropsType, PostPropsType} from "../../redux/store";
import MyPostsContainer from "./My posts/MyPostsContainer";


type ProfilePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={[]} newPostText={''}/>
        </div>
    )
}

export default Profile