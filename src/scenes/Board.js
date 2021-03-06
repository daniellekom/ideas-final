import { Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IdeaCard from "./components/IdeaCard";

export default function Board() {
  const [ideas, setIdeas] = useState([]);
 

  useEffect(() => {
    fetch("https://walky-ideas.uk.r.appspot.com/ideas")
      // fetch("http://localhost:3001/ideas")
      .then((response) => response.json())

      //sort in order by checking network in inspect
      .then((data) => setIdeas(data.ideas.sort((a,b) => {
        return b.dateCreated?._seconds-a.dateCreated?._seconds
      })))
      .catch(alert);
  }, []);


  return (
    <div className="container" style={{ backgroundImage: "url(https://i.pinimg.com/originals/4b/b1/8f/4bb18f46bf73bd4aa9159efe7cea5512.jpg)"
  }}>   
     <center> <h1 className="h1"> Explore All Dreams </h1></center>
      <section className="ideaboard" >
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
        <Fab sx={{
          bgcolor: '#d7abf5df',
          boxShadow: 1,
          borderRadius: 10,
          minHeight:60,
          minWidth: 60,
        }} size="large" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
