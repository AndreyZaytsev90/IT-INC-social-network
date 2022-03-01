import React, {useRef} from "react";
import s from "./../Dialogs.module.css"
import {MessagePropsType} from "../../../redux/state";


const Message = (props: MessagePropsType) => {
    let newPostElement = useRef<HTMLTextAreaElement | null>(null)

    const onClickAddPostHandler = () => {
        let text = newPostElement.current!.value
        return alert(text)
    }
    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
            <div><textarea ref={newPostElement}>text</textarea></div>
            <div>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
        </div>
        )
}

export default Message
