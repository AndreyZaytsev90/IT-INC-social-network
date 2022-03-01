import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "../../redux/state";



const Dialogs = (props: DialogsPropsType) => {

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

    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);

    let messagesElements = props.messages.map((message) => <Message message={message.message} id={message.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
             {/*   <img alt="Andrey" src="../../avatars/Olga.jpg"/>*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs