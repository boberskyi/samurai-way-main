export type AppStateType = {
  state: AppPropsType
}
export type MainWrapperType = {
  state: AppPropsType
}
export type AppPropsType = {
  blogPage: BlogPagePropsType,
  dialogsPage: DialogsPagePropsType
}
export type DialogsStateType = {
  state: DialogsPropsType
}
export type DialogsPropsType = {
  dialogs: DialogsItmPropsType[],
  messages: MessagesPropsType[]
}
export type DialogsItmPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}
export type BlogPagePropsType = {
  posts: PostsPropsType[]
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
  posts: PostsPropsType[]
}