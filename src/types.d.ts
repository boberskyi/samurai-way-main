import {ActionTypes} from "./redux/state";

export type AppStateType = {
  state: AppPropsType
  addNewPost: (postMessage: string) => void
  addNewMessage: (newMsg:string) => void
}
export type MainWrapperType = {
  state: AppPropsType
  messageForNewPost: string
  addNewPost: (postMessage: string) => void
  changeText: (newText: string) => void
  addNewMessage: (newMsg:string) => void
  dispatch: (action: ActionTypes) => void
}
export type AppPropsType = {
  blogPage: BlogPagePropsType,
  dialogsPage: DialogsPagePropsType
}
export type DialogsStateType = {
  state: DialogsPropsType
  addNewMessage: (newMsg:string) => void
  dispatch: (action: ActionTypes) => void
}
export type DialogsPropsType = {
  dialogs: DialogsItmPropsType[],
  messages: MessagesPropsType[],
  newMessageBody: string
}
export type DialogsItmPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}
export type BlogPagePropsType = {
  posts: PostsPropsType[]
  messageForNewPost: string
}
export type PostsPropsType = {
  id: number,
  img: string,
  title: string,
  descript: string
}
export type MessagesPropsType = {
  id: number,
  message: string
}
export type BlogPropsType = {
  changeText: (newText: string) => void
  messageForNewPost: string
  posts: PostsPropsType[]
  addNewPost: (postMessage: string) => void
  dispatch: (action: ActionTypes) => void
}
export type PostPropsType = {
  posts: PostsPropsType[]
}