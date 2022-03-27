import React, {ChangeEvent} from "react";
import {ActionsTypes, DialogItemPropsType, MessagePropsType, StateType} from "../../redux/store";
import "../../index.css"
import {addMessageAC, InitialDialogsStateType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootReducerType, store} from "../../redux/redux-store";
import {connect} from "react-redux";

/*type DialogsContainerPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    /!*dispatch: (action: ActionsTypes) => void*!/
}*/

/*const DialogsContainer = (props: DialogsContainerPropsType) => {


    return (
        <StoreContext.Consumer children={(store) => {

            const onClickSendMessageHandler = () => store.dispatch(addMessageAC(props.newMessageBody))

            const onMessageChange = (body: string) => store.dispatch(updateNewMessageAC(body))

            return <Dialogs dialogs={props.dialogs}
                            messages={props.messages}
                            newMessageBody={props.newMessageBody}
                            sendMessage={onClickSendMessageHandler}
                            updateNewMessageBody={onMessageChange}/>
        }}/>
    )
}*/

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
}

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageAC(body))
        },
        sendMessage: (newMessageBody: string) => {
            dispatch(addMessageAC(newMessageBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer