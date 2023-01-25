import React, {useState} from "react";

export const Likes = () => {
   let [likes, setLikes] = useState(0);


  const countLikes = () => {
    likes ++;
    setLikes(likes);
  }

  return (
    <div>
      <span>Likes: </span>
      <strong>{likes}</strong>
      <br /><br />
      <button onClick={countLikes}>Like it</button>
    </div>
  )
}