import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="invite">
      <h3> Email {idea?.createdBy} to Collab!</h3>
      <h5>Their email: {idea?.email}</h5>
    </div>
  );
};

export default Invite;
