import { use } from "react";
import { useState } from "react"

export default function Form(){
  let [formData, setFormData] = useState({
    fullName : "",
    username : "",
    password : ""
  })

    // let handelNameChange = (event)=>{
    //      setFullName(event.target.value);
    // }


    //   let handelUsername = (event)=>{
    //      setUserName(event.target.value);
    // }

    let handelInputChange = (event)=>{
        

        setFormData((currData)=> {
              
            return {...currData, [event.target.name] : event.target.value}
        })
    }
    
    let handelSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData(
            {
    fullName : "",
    username : "",
    password : ""
  }
        )
    }
    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter Your Full Name" type="text" value={formData.fullName} onChange={handelInputChange} id="fullName" name="fullName"/>
           
            <br /><br />
              <label htmlFor="username">Username</label>
            <input placeholder="Enter Username" type="text" value={formData.username} onChange={handelInputChange} id="username" name="username"/>


            <label htmlFor="password">password</label>
            <input placeholder="Enter password" type="password" value={formData.password} onChange={handelInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    )
}