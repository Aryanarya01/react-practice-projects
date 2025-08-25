function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}> 
            <input placeholder="Write something"/>
           <button >Submit</button>
        </form>
    )
}