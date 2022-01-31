import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../index";


type MyPostsPropsType = {
    posts: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    /*let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 30},
        {id: 2, message: "It's my first post", likesCount: 32},
    ]*/
debugger
    let postsElement = props.posts.map((post)=> <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

    return <div className={s.postsBlock}>
        <h3>My posts </h3>
        <div>
            <div>
                <div><textarea>Your text...</textarea></div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
                {/*<Post message={postData[0].message} likesCount={postData[0].likesCount} id={postData[0].id}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount} id={postData[1].id}/>*/}
            </div>
        </div>
    </div>
}

export default MyPosts