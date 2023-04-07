import {DialogsItmPropsType, MessagesPropsType, PostsPropsType} from "../types";
import {blogPageReducer} from "./blogPageReducer";
import {dialgsPageReducer} from "./dialogsPageReducer";

export type RootStateType = {
  blogPage: BlogPagePropsType,
  dialogsPage: DialogsPagePropsType
}

export type BlogPagePropsType = {
  messageForNewPost: string,
  posts: PostsPropsType[]
}

export type DialogsPagePropsType = {
  dialogs: DialogsItmPropsType[],
  messages: MessagesPropsType[],
  newMessageBody: string
}

export type StoreType = {
  _state: RootStateType
  changeText: (newText: string) => void
  addNewPost: () => void
  _onChange: () => void
  subscribe: (callback: () => void) => void
  addNewMessage: (newMsg: string) => void
  getState: () => RootStateType
  dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddMessageAC> | ReturnType<typeof ChangeTextAC> | ReturnType<typeof UpdateMessageAC>;

export const ChangeTextAC = (newText:string) => {
  return {
    type: 'CHANGE-TEXT',
    newText: newText
  } as const
}

export const AddMessageAC = () => {
  return {
    type: 'ADD-NEW-MESSAGE'
  } as const
}

export const UpdateMessageAC = (newMsg:string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE',
    newMsg: newMsg
  } as const
}

export const AddPostAC = (newText:string) => {
  return {
    type: 'ADD-POST',
    newText: newText
  } as const
}

const store: StoreType = {
  _state: {
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
        {
          id: 1,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Rebeca Powel',
          online: '3 days ago'
        },
        {
          id: 2,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Andre Dubus',
          online: '8 days ago'
        },
        {
          id: 3,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'John Caius',
          online: '1 week ago'
        },
        {
          id: 4,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Wynonna Judd',
          online: '1 month ago'
        },
        {
          id: 5,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Keir Dullea',
          online: '1 month ago'
        },
        {
          id: 6,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Cecelia Cichan',
          online: '5 months ago'
        },
        {
          id: 7,
          ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
          name: 'Ron Faucheux',
          online: '10 months ago'
        }
      ],
      messages: [
        {id: 1, message: 'Hi Bohdan, how are you?'},
        {id: 2, message: 'Your new project is amazing!'},
        {id: 3, message: 'Please call me today 🤪'}
      ],
      newMessageBody: ''
    }
  },
  changeText(newText: string) {
    this._state.blogPage.messageForNewPost = newText;
    this._onChange();
  },
  addNewPost() {
    const newPost: PostsPropsType = {
      id: new Date().getTime(),
      img: 'https://via.placeholder.com/350x150',
      title: this._state.blogPage.messageForNewPost,
      descript: 'Lorem ipsum lalalala'
    }
    this._state.blogPage.posts.push(newPost);
    this._state.blogPage.messageForNewPost = '';
    this._onChange();
  },
  _onChange() {
    console.log('State changed');
  },
  subscribe(callback: () => void) {
    this._onChange = callback;
  },
  addNewMessage(newMsg: string) {
    const messagesCount = this._state.dialogsPage.messages.length;
    const newMessage: MessagesPropsType = {
      id: messagesCount + 1,
      message: newMsg
    }
    this._state.dialogsPage.messages.splice(messagesCount, 0, newMessage);
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.blogPage = blogPageReducer(this._state.blogPage, action);
    this._state.dialogsPage = dialgsPageReducer(this._state.dialogsPage, action);

    this._onChange();
  }
}


export default store;