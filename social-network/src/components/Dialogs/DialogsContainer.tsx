import React from "react";
import "../../index.css"
import {addMessageAC, InitialDialogsStateType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootReducerType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
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