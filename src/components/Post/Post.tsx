import blogStl from "../Blog/blog.module.css";

export type PostsPropsType = {
  dataPosts: PostPropsType[]
}

type PostPropsType = {
  id: number,
  img: string,
  title: string,
  dcr: string
}

export const Post = (props:PostsPropsType) => {
  return (
    <>
      {props.dataPosts.map(post => {
        return (
          <div className={blogStl.post} key={post.id}>
            <img className={"postImg"} src={post.img} alt=""/>
            <h3 className="postTitle">{post.title}</h3>
            <p className="postDescript">
              {post.dcr}
            </p>
          </div>
          )
      })}

  </>
  )
}