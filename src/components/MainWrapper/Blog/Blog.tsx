import {Post} from "./Post/Post";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";
import React from "react";
import {AddPostAC, ChangeTextAC} from "../../../redux/state";




export const Blog = (props:BlogPropsType) => {

  const addPosts = () => {
    props.dispatch(AddPostAC(props.messageForNewPost));
    //props.addNewPost(props.messageForNewPost);
    props.dispatch(ChangeTextAC(''));
    //props.changeText('');

  }

  const onChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(ChangeTextAC(e.currentTarget.value))
    //props.changeText(e.currentTarget.value);
  }


  return (
    <StyledBlog>
      <StyledContainer>
        <button onClick={addPosts}>Add post</button>
        <textarea onChange={onChangeHandler} value={props.messageForNewPost} />

        <Post posts={props.posts}/>
      </StyledContainer>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  
`