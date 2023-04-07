import {MessagesPropsType, PostsPropsType} from "../types";
import {DialogsPagePropsType} from "./state";

export const dialgsPageReducer = (state:DialogsPagePropsType, action:any):DialogsPagePropsType => {
  switch(action.type) {
    case 'UPDATE-NEW-MESSAGE': {
      state.newMessageBody = action.newMsg;
      return state;
    }
    case 'ADD-NEW-MESSAGE': {
      const messagesCount = state.messages.length;
         const newMessage: MessagesPropsType = {
           id: messagesCount + 1,
           message: state.newMessageBody
         }
         state.messages.push(newMessage);
         return state;
    }
    default: return state;
  }
}