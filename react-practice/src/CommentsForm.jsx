import { useState } from "react"

export default function CommentsForm({addComment}){

let [formData, setFormData] = useState({
    username : "",
    remark : "",
    rating : 5
})

    let handleInuptChange = (event)=>{
     setFormData((currData)=>{
        return{...currData,[event.target.name] : event.target.value}
     })
    }

    let formSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        addComment(formData)
        setFormData({
    username : "",
    remark : "",
    rating : 5
        })
    }

    return (
        <div>
            <h3>Give a Comments!</h3>
            <form onSubmit={formSubmit}>
                <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter your username" id="username" value={formData.username} onChange={handleInuptChange} name="username"/>
            <br /><br />
            <label htmlFor="remark">Remark</label>
            <textarea placeholder="enter your Remark" name="remark" id="remark" value={formData.remark} onChange={handleInuptChange}  ></textarea>
            <br /><br />
            <label htmlFor="rating">Rating</label>
            <input type="number" id="rating" min={1} max={5} value={formData.rating} onChange={handleInuptChange} name="rating" />
            <br /><br />
            <button>Submit</button>
            </form>
        </div>
    )
}