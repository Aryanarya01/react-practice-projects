import { useState } from "react"
import CommentsForm from "./CommentsForm";
 import "./Comments.css"

export default function Comments() {

    let [comment,setComment] = useState([{
    username : "@aryanarya01",
    remark : "greate Experience",
    rating : 5
    }])

    let addComment = (comment)=>{
    setComment((currComment)=>[...currComment,comment])
    console.log("added a new comment");
    }

    return(
        <>
        <div> 
            <h3>All Comments!</h3>
        {comment.map((comment,idx)=>(
         <div className="comment" key={idx} >
            <span>{comment.remark}</span>
             &nbsp;
             <span>(Rating = {comment.rating})</span>
             &nbsp;
             <span>- {comment.username}</span>
            &nbsp;
         </div>
         

        ))}
        </div>
         <hr />
         <hr />
         <CommentsForm addComment={addComment} />
        </>
    )
}