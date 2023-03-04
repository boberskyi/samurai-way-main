import {Post} from "./Post/Post";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";
import React from "react";




export const Blog = (props:BlogPropsType) => {

  const addPosts = () => {
    props.addNewPost(props.messageForNewPost);
  }

  const onChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
  props.changeText(e.currentTarget.value);
  }


  return (
    <StyledBlog>
      <StyledContainer>
        <button onClick={addPosts}>Add post</button>
        <textarea onChange={onChangeHandler} value={props.messageForNewPost}> </textarea>

        <Post posts={props.posts}/>
      </StyledContainer>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  
`