import React from 'react';
import '../../../index.css'
import {addPostAC, InitialProfileStateType, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootReducerType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

type MapStatePropsType = {
    profilePage: InitialProfileStateType
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state : RootReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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