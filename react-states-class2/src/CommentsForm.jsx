import { useState } from "react"
 import { useFormik } from 'formik';


 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username is required';
   }  
  
 
   return errors;
 };


export default function CommentForm({addNewComment}){
    // let [formData,setFormData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : 5
    // });

    const formik = useFormik({
     initialValues: {
       username: '',    
       remark: '',
       rating: '',
     },
     validate,
     onSubmit: (values, { resetForm }) => {
      // parent se aaya function call karo
      addNewComment(values);

      // optional: alert for debugging
      // alert(JSON.stringify(values, null, 2));

      // form reset
      resetForm();
    },
   });

// let handleInuptChange = (event)=>{
//     setFormData((currData)=>{
//         return {...currData, [event.target.name] : event.target.value}
//     })
// }

// let formSubmit = (event)=>{
//     console.log(formData);
//      addNewComment(formData);
//     event.preventDefault();
//     setFormData({
//          username : "",
//         remark : "",
//         rating : 5
//     })
// }

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formik.values.username} name="username"  onChange={formik.handleChange} id="username"/>
                <br /><br />
            {formik.errors.username ? <p style={{color: "red"}} >{formik.errors.username}</p> : null}
                <label htmlFor="remark">Remark</label>
                <textarea value={formik.values.remark} placeholder="add few remarks" name="remark"  onChange={formik.handleChange} id="remark"></textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" value={formik.values.rating} min={1} max={5} name="rating"  onChange={formik.handleChange} id="rating"/>
                <br /><br />
                <button type="submit">Add comments</button>

            </form>
        </div>
    )
}