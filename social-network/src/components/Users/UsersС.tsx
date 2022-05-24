import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../avatars/images2.png";
import {InitialUsersStateType} from "./UsersContainer";
import axios from "axios";


export class UsersC extends React.Component<InitialUsersStateType> {

    constructor(props: InitialUsersStateType | Readonly<InitialUsersStateType>) {
        super(props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }



    render = () => {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if (i === 10) break
        }

        return <div>
            <div style={{"marginLeft": "400px", "marginTop": "25px"}}>
                {pages.map(p => {
                    return <span className={ this.props.currentPage === p ? styles.selectedPage : ''}
                    onClick={ () => this.onClickHandler(p)}>{p} </span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id} className={styles.all}>
                <span>
                    <div>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"
                             className={styles.userAvatar}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

