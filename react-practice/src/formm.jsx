import { useState } from "react";


export default function Formm(){

let [form, setForm] = useState({
    username : "",
    password : ""
})


let handelInputChange = (event)=>{
    setForm((currData)=>{
        return {...currData, [event.target.name] : event.target.value}
    })
}

let formSubmit = (event)=>{
    event.preventDefault();
    console.log(form)
    setForm({
    username : "",
    password : ""
    })
}

return (
     <form onSubmit={formSubmit}>
        <label htmlFor="username">Username</label>
    <input type="text" value={form.username} onChange={handelInputChange} placeholder="Enter your username" id="username" name="username"/>

    <br /><br />
     <label htmlFor="password">Password</label>
    <input type="password" value={form.password} onChange={handelInputChange} placeholder="Enter your password" id="password" name="password"/>

    <br />
    <br />
    <button>Submit</button>
     </form>
)
}