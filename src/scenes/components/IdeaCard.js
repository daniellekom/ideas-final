import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function IdeaCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ width: 500, margin: "auto", marginTop: 5, borderRadius: 4 }}>
      <div className="ideaCard">
        <CardHeader MuiCardHeader-title title={props.idea.createdBy} />
        <CardMedia height="120" />
        <CardContent>
          <Typography className="card">
            <div key={props.idea.id}>
                <h2>Title</h2> <h4>{props.idea.title}</h4> 
                <hr/> <br/>
                <h3>Description</h3> <p>{props.idea.description}</p> 
                <h3>Looking for </h3>< h5>{props.idea.lookingFor}</h5>
                <h3>Your email</h3> <h5>{props.idea.email}</h5>
              <container>
              <hr/> <br/>
                <Link to={`/invite/${props.idea.id}`}>
                  <button className="card-button">COLLAB</button>
                </Link>
              </container>
            </div>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
