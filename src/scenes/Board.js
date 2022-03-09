import { Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IdeaCard from "./components/IdeaCard";
import Invite from "./Invite";

export default function Board() {
  const [ideas, setIdeas] = useState([]);
  const [active] = useState(false);

  useEffect(() => {
    fetch("https://walky-ideas.uk.r.appspot.com/ideas")
      // fetch("http://localhost:3001/ideas")
      .then((response) => response.json())
      .then((data) => setIdeas(data.ideas))
      .catch(alert);
  }, []);

  return (
    <div className="container">
      <h1 className="h1"> IDEA BOARD</h1>
      <section className="ideaboard">
        {ideas.map((idea) => {
          console.log(idea);
          return (
            <>
              <IdeaCard idea={idea} />
            </>
          );
        })}
      </section>
      <Link to="/create">
        <Fab aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
