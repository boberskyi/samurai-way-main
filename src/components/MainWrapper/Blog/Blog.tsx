import blogStl from './blog.module.css';
import {Post} from "./Post/Post";

export const Blog = () => {
  let dataPosts = [
    {id: 1, img: 'https://via.placeholder.com/350x150', title: 'Post 1', descript: '1 Lorem ipsum lalala'},
    {id: 2, img: 'https://via.placeholder.com/350x150', title: 'Post 2', descript: '2 Lorem ipsum lalala'},
    {id: 3, img: 'https://via.placeholder.com/350x150', title: 'Post 3', descript: '3 Lorem ipsum lalala'}
  ]


  return (
    <div className={blogStl.blog}>
      <div className={"container"}>
        <Post dataPosts={dataPosts}/>
      </div>
    </div>

  )
}