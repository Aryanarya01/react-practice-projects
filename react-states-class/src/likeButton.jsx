import { useState } from 'react';

export default function LikeButton() {
 let [isLiked, setisLiked] = useState(false);
let [click,setclick] = useState(0);
    const toggleLike = () => {
      setisLiked(!isLiked);
      setclick(click + 1);
    }
  
     let likeStyle = {color : "red"}

    return (
        <div>
             <p>clicks = {click}</p>
            <p onClick={toggleLike}>
                {isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>}
            </p>
        </div>
    )
}