import {Post} from "./Post/Post";
import {Container} from "../MainWrapper";
import styled from "styled-components";

export const Blog = () => {
  let dataPosts = [
    {id: 1, img: 'https://via.placeholder.com/350x150', title: 'Post 1', descript: '1 Lorem ipsum lalala'},
    {id: 2, img: 'https://via.placeholder.com/350x150', title: 'Post 2', descript: '2 Lorem ipsum lalala'},
    {id: 3, img: 'https://via.placeholder.com/350x150', title: 'Post 3', descript: '3 Lorem ipsum lalala'}
  ]


  return (
    <BlogBlock>
      <Container>
        <Post dataPosts={dataPosts}/>
      </Container>
    </BlogBlock>
  )
}

const BlogBlock = styled.div`
  
`