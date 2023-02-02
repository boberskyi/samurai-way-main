import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
  {id: 1, img: 'https://via.placeholder.com/350x150', title: 'Post 1', descript: '1 Lorem ipsum lalala'},
  {id: 2, img: 'https://via.placeholder.com/350x150', title: 'Post 2', descript: '2 Lorem ipsum lalala'},
  {id: 3, img: 'https://via.placeholder.com/350x150', title: 'Post 3', descript: '3 Lorem ipsum lalala'}
]
let dialogs = [
  {id: 1, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Rebeca Powel', online: '3 days ago'},
  {id: 2, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Andre Dubus', online: '8 days ago'},
  {id: 3, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'John Caius', online: '1 week ago'},
  {id: 4, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Wynonna Judd', online: '1 month ago'},
  {id: 5, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Keir Dullea', online: '1 month ago'},
  {id: 6, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Cecelia Cichan', online: '5 months ago'},
  {id: 7, ava: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png', name: 'Ron Faucheux', online: '10 months ago'}
]
let messages = [
  {id: 1, message: 'My message 1'},
  {id: 2, message: 'My message 2'},
  {id: 3, message: 'My message 3'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);