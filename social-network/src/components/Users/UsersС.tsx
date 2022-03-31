import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../avatars/images2.png";
import {InitialUsersStateType} from "./UsersContainer";
import axios from "axios";


export class UsersC extends React.Component<InitialUsersStateType> {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render = () => {
        return <div>
            <button onClick={this.getUsers}>Дай стэйт сука!</button>
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

