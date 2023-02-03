import {Post} from "./Post/Post";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";



export const Blog = (props:BlogPropsType) => {
  return (
    <StyledBlog>
      <StyledContainer>
        <Post posts={props.posts}/>
      </StyledContainer>
    </StyledBlog>
  )
}

const StyledBlog = styled.div`
  
`