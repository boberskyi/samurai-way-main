import {PostsPropsType} from "../types";
import {BlogPagePropsType} from "./state";

export const blogPageReducer = (state:BlogPagePropsType, action:any) => {
  if (action.type === 'ADD-POST') {
    const newPost: PostsPropsType = {
      id: new Date().getTime(),
      img: 'https://via.placeholder.com/350x150',
      title: state.messageForNewPost,
      descript: 'Lorem ipsum lalalala'
    }
    state.posts.push(newPost);
    state.messageForNewPost = '';
  }  else if (action.type === 'CHANGE-TEXT') {
    state.messageForNewPost = action.newText;
  }

  return state;
}