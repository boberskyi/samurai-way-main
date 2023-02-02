export type AppPropsType = {
  posts: PostsPropsType[],
  dialogs: DialogsPropsType[],
  messages: MessagesPropsType[]
}

export type PostsPropsType = {
  id: number,
  img: string,
  title: string,
  descript: string
}

export type DialogsDataPropsType = {
  dialogs: DialogsPropsType[],
  messages: MessagesPropsType[]
}

export type DialogsPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}

export type MessagesPropsType = {
  id: number,
  message: string
}

export type BlogPropsType = {
  posts: PostsPropsType[]
}