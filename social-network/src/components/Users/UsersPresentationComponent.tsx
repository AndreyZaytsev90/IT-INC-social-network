import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../avatars/images2.png";
import {UsersPropsType} from "../../redux/store";

type UsersPresentationComponentType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UsersPropsType>
    unfollow: (id: string) => void
    follow: (id: string) => void
}

export const UsersPresentationComponent = (props: UsersPresentationComponentType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i === 10) break
    }

    return (
        <div>
            <div style={{"marginLeft": "400px", "marginTop": "25px"}}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}>{p} </span>
                })}
            </div>
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
    );
};

export default UsersPresentationComponent;