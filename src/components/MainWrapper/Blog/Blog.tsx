import {Post} from "./Post/Post";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";
import React from "react";


const postTitle = React.createRef<HTMLInputElement>();

export const Blog = (props:BlogPropsType) => {

  const addPosts = () => {
  const text = postTitle.current?.value;
    alert(text);
  }
  return (
    <StyledBlog>
      <StyledContainer>
        <button onClick={addPosts}>Add post</button>
        <input type="text" placeholder={"Title"} ref={postTitle}/>

        <Post posts={props.posts}/>
      </StyledContainer>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  
`