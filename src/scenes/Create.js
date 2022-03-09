//in the form create a handle submit function with prevent default 
//second step of function what should happen by use state values []
//create use states for each input field title, created by etc
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
  
  const [title, setTitle] =useState("")
  const [createdBy, setCreatedBy]=useState("")
  const [description,setDescription]=useState("")
  const [lookingFor,setLookingFor]=useState("")
  
  const history = useHistory()
const handleForm = (e) => {
  e.preventDefault()
  fetch("https://walky-ideas.uk.r.appspot.com/ideas", {
  method:"POST",
  headers:{
    "content-Type": "application/json",
  },
  body: JSON.stringify({title: title, createdBy: createdBy, description: description, lookingFor: lookingFor})
  })
  .then((response) =>response.json())
  .then(data => {
    history.push('/board')
    alert(data.message)
    
  })
  .catch(alert);
}



  return (

    <div>
    <section>
      <form onSubmit={handleForm} className="idea">
        <label >Title:
          <input onChange={(e)=>setTitle(e.target.value)} type="text"/>
        </label>
        <label>Idea by:
          <input onChange={(e)=>setCreatedBy(e.target.value)} type="text"/>
        </label>
        <label>Description:
          <input onChange={(e)=>setDescription(e.target.value)} type="text"/>
        </label>
        <label>Looking for:
          <input onChange={(e)=>setLookingFor(e.target.value)} type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
    </div>
  )
};



export default Create;
