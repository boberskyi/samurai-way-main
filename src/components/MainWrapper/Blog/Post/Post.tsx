import styled from "styled-components";
import {BlogPropsType} from "../../../../types";

export const Post = (props: BlogPropsType) => {
  let posts = props.posts.map(post => {
    return (
      <StyledPost key={post.id}>
        <img src={post.img} alt="Blog image"/>
        <StyledPostTitle>{post.title}</StyledPostTitle>
        <StyledPostDescript>{post.descript}</StyledPostDescript>
      </StyledPost>
    )
  })

  return <>{posts}</>
}

const StyledPost = styled.div`
  
`
const StyledPostTitle = styled.h3`
  
`
const StyledPostDescript = styled.p`
  
`