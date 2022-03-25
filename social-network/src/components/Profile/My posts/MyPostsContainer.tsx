import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, MyPostsPropsType, PostPropsType} from "../../../redux/store";
import '../../../index.css'
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostContainerPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostContainerPropsType) => {

    const onClickAddPostHandler = () => props.dispatch(addPostAC(props.newPostText))
    const onPostChange = (newText: string) => props.dispatch(updateNewPostAC(newText))

    return (
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 addPost={onClickAddPostHandler}
                 updateNewPostText={onPostChange}/>
    )
}

export default MyPostsContainer