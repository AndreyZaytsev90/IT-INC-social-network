import React, {MouseEventHandler} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {UsersPropsType} from "../../redux/store";
import {UsersC} from "./UsersС";


export type MapStatePropsType = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => MouseEventHandler<HTMLSpanElement>
    setTotalCount: (totalCount: number) => void
}
export type InitialUsersStateType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    } as MapDispatchPropsType
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)