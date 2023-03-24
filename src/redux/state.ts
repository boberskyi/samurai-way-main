import {DialogsItmPropsType, MessagesPropsType, PostsPropsType} from "../types";

let renderTree = () => {
  console.log('Hello');
}

export const subscribe = (callback: () => void) => {
  renderTree = callback;
}



export type RootStateType = {
  blogPage: BlogPagePropsType,
  dialogsPage: DialogsPagePropsType
}

type BlogPagePropsType = {
  messageForNewPost: string,
  posts: PostsPropsType[]
}

type DialogsPagePropsType = {
  dialogs: DialogsItmPropsType[],
  messages: MessagesPropsType[]
}

export let state:RootStateType = {
  blogPage: {
    messageForNewPost: '',
    posts: [
      {id: 1, img: 'https://via.placeholder.com/350x150', title: 'Post 1', descript: '1 Lorem ipsum lalala'},
      {id: 2, img: 'https://via.placeholder.com/350x150', title: 'Post 2', descript: '2 Lorem ipsum lalala'},
      {id: 3, img: 'https://via.placeholder.com/350x150', title: 'Post 3', descript: '3 Lorem ipsum lalala'}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Rebeca Powel', online: '3 days ago'},
      {id: 2, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Andre Dubus', online: '8 days ago'},
      {id: 3, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'John Caius', online: '1 week ago'},
      {id: 4, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Wynonna Judd', online: '1 month ago'},
      {id: 5, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Keir Dullea', online: '1 month ago'},
      {id: 6, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Cecelia Cichan', online: '5 months ago'},
      {id: 7, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Ron Faucheux', online: '10 months ago'}
    ],
    messages: [
      {id: 1, message: 'Hi Bohdan, how are you?'},
      {id: 2, message: 'Your new project is amazing!'},
      {id: 3, message: 'Please call me today 🤪'}
    ]
  }
}

export const addNewPost = () => {
  const newPost: PostsPropsType = {
    id: 5,
    img: 'https://via.placeholder.com/350x150',
    title: 'Post 5',
    descript: state.blogPage.messageForNewPost
  }
  state.blogPage.posts.push(newPost);
  state.blogPage.messageForNewPost = '';
  renderTree();
}

export const addNewMessage = (newMsg:string) => {
  const messagesCount = state.dialogsPage.messages.length;
  const newMessage:MessagesPropsType = {
    id: messagesCount + 1,
    message: newMsg
  }
  state.dialogsPage.messages.splice(messagesCount, 0, newMessage);

}

export const changeText = (newText: string) => {
  state.blogPage.messageForNewPost = newText;
  renderTree();
}