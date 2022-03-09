import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { brown } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function IdeaCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ width: 300, margin: "auto", marginTop: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: brown[300] }} aria-label="idea">
            idea
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.idea.title}
        subheader="Date Created"
      />
      <CardMedia height="120" />
      <CardContent>
        <Typography className="card">
          <div key={props.idea.id}>
            <h3>Idea by:</h3> <h5>{props.idea.createdBy}</h5>
            <h3>Description:</h3> <h5>{props.idea.description}</h5>
            <h3>Looking for </h3>
            <h5>{props.idea.lookingFor}</h5>
            <br />
            <container>
              <Link to="/invite:OnU7ckbAVoVdJhVCQmP2" >
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
    </Card>
  );
}
