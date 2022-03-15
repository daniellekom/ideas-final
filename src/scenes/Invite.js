import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Invite = () => {
  // get id for each invite example OnU7ckbAVoVdJhVCQmP2
  // then fetch the API for that single invite
  const [idea, setIdea] = useState();

  const params = useParams();

  useEffect(() => {
    fetch(`https://walky-ideas.uk.r.appspot.com/ideas/${params.id}`)
      .then((response) => response.json())
      .then((data) => setIdea(data))
      .catch(alert);
  }, []);

 

  return (

    
    <section className="WelcomeBg" style={{  backgroundImage: "url(https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxuZW9uJTIwYmFja2dyb3VuZCUyMGJyaWNrd2FsbHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)"}}>
     <div className="invite" >
       <div className="inviteText">
      <h3>Email {idea?.createdBy} to Collaborate!</h3>
      <h5>Their email: {idea?.email}</h5>
     </div>
     </div>
    </section>
  );
};

export default Invite;
