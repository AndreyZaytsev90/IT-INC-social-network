import React from 'react';
//import s from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsPropsType} from "../../redux/state";



const Profile = (props: MyPostsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile