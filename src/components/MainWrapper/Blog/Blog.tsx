import {Post} from "./Post/Post";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";



export const Blog = (props:BlogPropsType) => {
  return (
    <BlogBlock>
      <StyledContainer>
        <Post posts={props.posts}/>
      </StyledContainer>
    </BlogBlock>
  )
}

const BlogBlock = styled.div`
  
`