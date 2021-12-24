import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Olga"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Sergey"},]

    let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    /*     [
         <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>, // Массив JSX элементов
         <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
         <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
         <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
     ];*/

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},]

    {/*  <Message message={messages[0].message} id={messages[0].id}/>
                    <Message message={messages[1].message} id={messages[1].id}/>
                    <Message message={messages[2].message} id={messages[2].id}/>*/}

    let messagesElement = messages.map((message) => <Message message={message.message} id={message.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs