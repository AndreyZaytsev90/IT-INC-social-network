import React, {MouseEventHandler} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {UsersPropsType} from "../../redux/store";
import UsersPresentationComponent from "./UsersPresentationComponent";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStatePropsType = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
    setCurrentPage: (pageNumber: number) => MouseEventHandler<HTMLSpanElement>
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type InitialUsersStateType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<InitialUsersStateType> {

    constructor(props: InitialUsersStateType | Readonly<InitialUsersStateType>) {
        super(props)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <UsersPresentationComponent users={this.props.users}
                                        onPageChanged={this.onPageChanged}
                                        follow={this.props.follow}
                                        currentPage={this.props.currentPage}
                                        pageSize={this.props.pageSize}
                                        totalUsersCount={this.props.totalUsersCount}
                                        unfollow={this.props.unfollow}
            />
        </>
    }
}


const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    } as MapDispatchPropsType
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)