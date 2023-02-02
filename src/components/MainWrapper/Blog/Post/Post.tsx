import styled from "styled-components";

export type PostsPropsType = {
  dataPosts: PostPropsType[]
}

type PostPropsType = {
  id: number,
  img: string,
  title: string,
  descript: string
}

export const Post = (props: PostsPropsType) => {
  let posts = props.dataPosts.map(post => {
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