import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {followAC, InitialUsersStateType, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type MapStatePropsType = {
    users: InitialUsersStateType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersPropsType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)