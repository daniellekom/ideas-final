import { useHistory } from "react-router-dom";

const Invite = (props) => {
// get id for each invite example OnU7ckbAVoVdJhVCQmP2
// then fetch the API for that single invite

  const history = useHistory();

  console.log("history here ->>>>", history);

  return (
    <div className="content">
      <h1> single colab</h1>
      <h1> Email to COLLAB!</h1>
    </div>
  );
};

export default Invite;
