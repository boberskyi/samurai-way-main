import styled from "styled-components";
import {BlogPropsType} from "../../../../types";

export const Post = (props: BlogPropsType) => {
  let posts = props.posts.map(post => {
    return (
      <PostBlock key={post.id}>
        <img src={post.img} alt="Blog image"/>
        <PostTitle>{post.title}</PostTitle>
        <PostDescript>{post.descript}</PostDescript>
      </PostBlock>
    )
  })

  return <>{posts}</>
}

const PostBlock = styled.div`
  
`
const PostTitle = styled.h3`
  
`
const PostDescript = styled.p`
  
`