import React from 'react';
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.usersPage.users}
        </div>
    );
};

export default Users;