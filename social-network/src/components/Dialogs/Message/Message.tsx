import React, {useRef} from "react";
import s from "./../Dialogs.module.css"
import {MessagePropsType} from "../../../redux/store";


const Message = (props: MessagePropsType) => {
    /*let newPostElement = useRef<HTMLTextAreaElement | null>(null)

    const onClickAddPostHandler = () => {
        let text = newPostElement.current!.value
        return alert(text)
    }*/
    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
        )
}

export default Message
