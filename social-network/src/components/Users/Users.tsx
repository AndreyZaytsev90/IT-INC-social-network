import React from 'react';
import styles from "./users.module.css"
import {InitialUsersStateType} from "./UsersContainer";
import {v1} from "uuid";

const Users = (props: InitialUsersStateType) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: v1(),
            photoUrl: "https://i.ibb.co/6Z9JcZr/003.jpg",
            followed: true,
            fullName: "Andrey",
            status: "I am a programmer",
            location: {city: "Moscow", country: "Russia"}
        },
            {
                id: v1(),
                photoUrl: "https://i.ibb.co/DbLb2Bg/002.jpg",
                followed: true,
                fullName: "Olga",
                status: "I am a head of quality",
                location: {city: "Aleksin", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: "https://i.ibb.co/Bw7pYVg/001.jpg",
                followed: true,
                fullName: "Petr",
                status: "I am a preschool child",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: "https://i.ibb.co/YpXxHKc/P8110099.jpg",
                followed: false,
                fullName: "Sergey",
                status: "I am a student",
                location: {city: "Moscow", country: "Russia"}
            },])
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id} className={styles.all}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt="avatar" className={styles.userAvatar}/>
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
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    );
};

export default Users