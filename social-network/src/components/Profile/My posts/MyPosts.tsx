import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import '../../../index.css'
import {MyPostPropsType} from "./MyPostsContainer";

/*type MyPostPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}*/

const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.profilePage.posts.map((post) =>
        <Post
            message={post.message}
            likesCount={post.likesCount}
            id={post.id}/>)

    const onClickAddPostHandler = () => {
        /*let text = newPostElement.current?.value
        return alert(text)*/
        /*if (props.addPost && newPostElement.current) props.addPost(newPostElement.current.value)*/
        props.addPost(props.profilePage.newPostText)
    }
    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <div>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}
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