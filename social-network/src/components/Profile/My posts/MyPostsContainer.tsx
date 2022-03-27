import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, MyPostsPropsType, PostPropsType, StateType} from "../../../redux/store";
import '../../../index.css'
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootReducerType, store} from "../../../redux/redux-store";
import {connect} from "react-redux";

/*type MyPostContainerPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    /!*dispatch: (action: ActionsTypes) => void*!/
    /!*children: JSX.Element | JSX.Element[]*!/
}*/

/*const MyPostsContainer = (props: MyPostContainerPropsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onClickAddPostHandler = () => store.dispatch(addPostAC(props.newPostText))
                    const onPostChange = (newText: string) => store.dispatch(updateNewPostAC(newText))
                    return <MyPosts posts={props.posts}
                                    newPostText={props.newPostText}
                                    addPost={onClickAddPostHandler}
                                    updateNewPostText={onPostChange}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state : RootReducerType) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer