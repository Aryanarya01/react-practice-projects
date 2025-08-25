 import { useState } from 'react';

export default function Message() {
    let [mess,setMess] = useState(["sample message"])
    let [newMsg,setNewMsg]=useState("")

   let addMess= ()=> {
      setMess([...mess,newMsg])
   }

   let updateMessVal = (event)=>{
       setNewMsg(event.target.value);
   }


    return (
        <div> 
     <input placeholder="Write your message "  value={newMsg} onChange={updateMessVal}/>
     <button onClick={addMess}>Send Message</button>
  <hr />
  <hr />
  <hr />
     <h3>All Messages</h3>
     <ul>
       {
        mess.map((sms)=>
            <li>{sms}</li>
        )
       
       }
     </ul>
     </div>
    )
}