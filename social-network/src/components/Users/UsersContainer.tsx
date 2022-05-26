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
import UsersPresentationComponent from "./UsersPresentationComponent";
import axios from "axios";


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


class UsersContainer extends React.Component<InitialUsersStateType> {

    constructor(props: InitialUsersStateType | Readonly<InitialUsersStateType>) {
        super(props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {
        return <UsersPresentationComponent users={this.props.users}
                                           onPageChanged={this.onPageChanged}
                                           follow={this.props.follow}
                                           currentPage={this.props.currentPage}
                                           pageSize={this.props.pageSize}
                                           totalUsersCount={this.props.totalUsersCount}
                                           unfollow={this.props.unfollow}/>
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)