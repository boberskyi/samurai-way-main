export type PostsPropsType = {
  dataPosts: PostPropsType[]
}

type PostPropsType = {
  id: number,
  img: string,
  title: string,
  descript: string
}

export const Post = (props:PostsPropsType) => {
  return (
    <>
      {props.dataPosts.map(post => {
        return (
          <div className={"post"} key={post.id}>
            <img className={"postImg"} src={post.img} alt=""/>
            <h3 className="postTitle">{post.title}</h3>
            <p className="postDescript">
              {post.descript}
            </p>
          </div>
          )
      })}

  </>
  )
}