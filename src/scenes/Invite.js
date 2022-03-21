import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


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
    <section className="CollabBg">
      <div className="inviteElement">
        <div className="h3Container">
          <h2>Email {idea?.createdBy} and collaborate!</h2>
          <br/>
          <h3> {idea?.email}</h3>
        </div> 
      </div>
    </section>
  );
};

export default Invite;
