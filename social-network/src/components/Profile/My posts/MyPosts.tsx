import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "../../../redux/state";
import '../../../index.css'


const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    let newPostElement = useRef<HTMLTextAreaElement | null>(null)

    const onClickAddPostHandler = () => {
        /*let text = newPostElement.current?.value
        return alert(text)*/
        if (props.addPost && newPostElement.current) props.addPost()

    }
    const onPostChange = () => {
        if (props.updateNewPostText && newPostElement.current) props.updateNewPostText(newPostElement.current.value)
    }

    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <div>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}>text</textarea></div>
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