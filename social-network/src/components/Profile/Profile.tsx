import React from 'react';
//import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, MyPostsPropsType, PostPropsType} from "../../redux/store";
import MyPostsContainer from "./My posts/MyPostsContainer";


type ProfilePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile