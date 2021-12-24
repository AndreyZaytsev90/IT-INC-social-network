import React from 'react';
import s from './Post.module.css'

 type PostPropsType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props: PostPropsType) => {
    return <div>

        <div className={s.item}><img alt=""
                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBX73_sltwESW05Q06z-3n--ppAVp3AO8Y8g&usqp=CAU"/>
            {props.message}
            <div>
                <span>like </span>
                {props.likesCount}
            </div>
        </div>

    </div>
}

export default Post