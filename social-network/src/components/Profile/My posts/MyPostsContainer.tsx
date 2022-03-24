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

    /*let postsElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)*/

    /*let newPostElement = useRef<HTMLTextAreaElement | null>(null)*/

    const onClickAddPostHandler = () => {
        /*let text = newPostElement.current?.value
        return alert(text)*/
        /*if (props.addPost && newPostElement.current) props.addPost(newPostElement.current.value)*/
        /*if (props.addPost) props.addPost(props.newPostText)*/
        if (props.dispatch && props.newPostText) props.dispatch(addPostAC(props.newPostText))

    }
    const onPostChange = (value: string ) => {

        /*if (props.updateNewPostText) props.updateNewPostText(event.currentTarget.value)*/

        if (props.dispatch) props.dispatch(updateNewPostAC(value))
    }

    return (
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 addPost={onClickAddPostHandler}
                 updateNewPostText={onPostChange}/>
    )
}

export default MyPostsContainer