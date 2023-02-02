import {Post} from "./Post/Post";
import {Container} from "../MainWrapper";
import styled from "styled-components";
import {BlogPropsType} from "../../../types";



export const Blog = (props:BlogPropsType) => {
  return (
    <BlogBlock>
      <Container>
        <Post posts={props.posts}/>
      </Container>
    </BlogBlock>
  )
}

const BlogBlock = styled.div`
  
`