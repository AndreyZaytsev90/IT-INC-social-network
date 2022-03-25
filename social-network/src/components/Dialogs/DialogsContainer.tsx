import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogItemPropsType, DialogsPropsType, MessagePropsType} from "../../redux/store";
import "../../index.css"
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    const onClickSendMessageHandler = () => props.dispatch(addMessageAC(props.newMessageBody))
    const onMessageChange = (body: string) => props.dispatch(updateNewMessageAC(body))

    return (
        <Dialogs dialogs={props.dialogs}
                 messages={props.messages}
                 newMessageBody={props.newMessageBody}
                 sendMessage={onClickSendMessageHandler}
                 updateNewMessageBody={onMessageChange}/>
    )
}

export default DialogsContainer