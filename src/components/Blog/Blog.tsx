import blogStl from './blog.module.css';
import globStl from './../global.module.css';
import {Post} from "../Post/Post";

export const Blog = () => {
  let dataPosts = [
    {id: 1, img: 'https://via.placeholder.com/350x150', title: 'Post 1', dcr: '1 Lorem ipsum lalala'},
    {id: 2, img: 'https://via.placeholder.com/350x150', title: 'Post 2', dcr: '2 Lorem ipsum lalala'},
    {id: 3, img: 'https://via.placeholder.com/350x150', title: 'Post 3', dcr: '3 Lorem ipsum lalala'}
  ]


  return (
    <div className={blogStl.blog}>
      <div className={globStl.container}>
        <Post dataPosts={dataPosts}/>
      </div>
    </div>

  )
}