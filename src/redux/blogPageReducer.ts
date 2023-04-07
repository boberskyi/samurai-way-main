import {PostsPropsType} from "../types";
import {BlogPagePropsType} from "./state";

export const blogPageReducer = (state:BlogPagePropsType, action:any) => {
  switch(action.type) {
    case 'ADD-POST': {
      const newPost: PostsPropsType = {
        id: new Date().getTime(),
        img: 'https://via.placeholder.com/350x150',
        title: state.messageForNewPost,
        descript: 'Lorem ipsum lalalala'
      }
      state.posts.push(newPost);
      state.messageForNewPost = '';
      return state;
    }
    case 'CHANGE-TEXT': {
      state.messageForNewPost = action.newText;
      return state;
    }
    default: return state;
  }

}