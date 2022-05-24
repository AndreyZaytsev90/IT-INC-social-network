import React from 'react';
import styles from "./users.module.css"
import {InitialUsersStateType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import userPhoto from "../../avatars/images2.png"

const Users = (props: InitialUsersStateType) => {

        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }

    return <div>
        {/*<button onClick={getUsers}>Дай стэйт сука!</button>*/}

        {
            props.users.map(user => <div key={user.id} className={styles.all}>
                <span>
                    <div>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"
                             className={styles.userAvatar}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
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

export default Users