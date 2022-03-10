//in the form create a handle submit function with prevent default 
//second step of function what should happen by use state values []
//create use states for each input field title, created by etc
import { CenterFocusStrong, Email } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
  
  const [title, setTitle] =useState("")
  const [createdBy, setCreatedBy]=useState("")
  const [description,setDescription]=useState("")
  const [lookingFor,setLookingFor]=useState("")
  const [Email, setEmail] =useState("")

  
  const history = useHistory()
const handleForm = (e) => {
  e.preventDefault()
  fetch("https://walky-ideas.uk.r.appspot.com/ideas", {
  method:"POST",
  headers:{
    "content-Type": "application/json",
  },
  body: JSON.stringify({title: title, createdBy: createdBy, description: description, lookingFor: lookingFor,Email:Email})
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
      
      <form onSubmit={handleForm} className="createIdeaCard" >
        <label className="formLabels">Title:
        <br/>
          <input onChange={(e)=>setTitle(e.target.value)} type="text"/>
        </label>
        <label className="formLabels">Idea by:
        <br/>
          <input onChange={(e)=>setCreatedBy(e.target.value)} type="text"/>
        </label>
        <br/>
        <label className="formLabels">Description:
        <br/>
          <TextField onChange={(e)=>setDescription(e.target.value)} type="text"/>
        </label>
        <br/>
        <label className="formLabels">Looking for:
        <br/>
          <TextField onChange={(e)=>setLookingFor(e.target.value)} type="text"/>
        </label>
        <br/>
        <label className="formLabels">Email:
        <br/>
          <input onChange={(e)=>setEmail(e.target.value)} type="text"/>
          <br/>
        </label>
        <input className= "create-button" type="submit" value="Submit" />
        <br/>
      </form>
    </section>
    </div>
  )
};



export default Create;
