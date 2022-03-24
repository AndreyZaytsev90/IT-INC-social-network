import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType, PostPropsType} from "../../../redux/store";
import '../../../index.css'
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";

type MyPostPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    /*let newPostElement = useRef<HTMLTextAreaElement | null>(null)*/

    const onClickAddPostHandler = () => {
        /*let text = newPostElement.current?.value
        return alert(text)*/
        /*if (props.addPost && newPostElement.current) props.addPost(newPostElement.current.value)*/
        if (props.addPost) props.addPost(props.newPostText)
        /*if (props.dispatch) props.dispatch(addPostAC(props.newPostText))*/

    }
    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement> ) => {

        if (props.updateNewPostText) props.updateNewPostText(event.currentTarget.value)

        /*if (props.dispatch) props.dispatch(updateNewPostAC(event.currentTarget.value))*/
    }

    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <div>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    value={props.newPostText}
                    placeholder="Enter your post">text</textarea></div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    </div>
}

export default MyPosts