import { useState } from "react"
import "./Comments.css"
import CommentForm from "./CommentsForm";
export default function Comment(){
let [comments, setComments] = useState([{
    username : "@aryanary01",
    remark : "great place",
    rating : 5
}]);

    let addNewComment = (comment)=>{   //new comment 
        setComments((currComments)=>[...currComments,comment]) //currcomment ki jgha new comemnt add and re-render
        console.log("added new comment")
    }

    return (
        <> 
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx)=>(
             <div className="comment" key={idx}>
                <span>{comment.remark}</span>
                &nbsp;
                <span>(rating = {comment.rating})</span>
                &nbsp;
                <span>- {comment.username}</span>
            </div>
            ))}
            
        </div>
        <hr />
        <hr />
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}