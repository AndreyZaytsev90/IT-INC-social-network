import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import "../../index.css"
import {DialogPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogPropsType) => {

    /* let dialogs = [
         {id: 1, name: "Andrew"},
         {id: 2, name: "Olga"},
         {id: 3, name: "Petr"},
         {id: 4, name: "Sergey"},]*/

    /*     [
         <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>, // Массив JSX элементов
         <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
         <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
         <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
     ];*/

    /*let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},]*/

    /*  <Message message={messages[0].message} id={messages[0].id}/>
                    <Message message={messages[1].message} id={messages[1].id}/>
                    <Message message={messages[2].message} id={messages[2].id}/>*/

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) =>
        <DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages.map((message) =>
        <Message
            key={message.id}
            message={message.message}
            id={message.id}
        />)

    const onClickSendMessageHandler = () => {
        /*let text = newPostElement.current?.value
        return alert(text)*/
        /*if (props.addPost && newPostElement.current) props.addPost(newPostElement.current.value)*/
        /*if (props.addPost) props.addPost(props.newPostText)*/
        props.sendMessage(props.dialogsPage.newMessageBody)
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        /*if (props.updateNewPostText) props.updateNewPostText(event.currentTarget.value)*/
        props.updateNewMessageBody(event.currentTarget.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={props.dialogsPage.newMessageBody}
                                       onChange={onMessageChange}
                                       placeholder="Enter your message"/></div>
                        <div>
                            <button onClick={onClickSendMessageHandler}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs