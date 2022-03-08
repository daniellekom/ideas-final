import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Board() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("https://walky-ideas.uk.r.appspot.com/ideas")
    // fetch("http://localhost:3001/ideas")
      .then((response) => response.json())
      .then((data) => setIdeas(data.ideas))
      .catch(alert);
  }, []);

  return (
    <div>
      <section
        className="ideaboard"
        initial={{ x: "-20vw" }}
        animate={{ x: 0 }}
      >
        <h1
          style={{
            align: "center",
            marginLeft: "40%",
            marginTop: "50px",
            position: "absolute",
            color: "orange",
          }}
        >
          Idea Board
        </h1>
        {ideas.map((idea) => {
        return (
          <div className="ideas" key={idea.id}>
            <h2>Idea by: {idea.createdBy}</h2>
            <h4>Title: {idea.title}</h4>
            <h4>Description: {idea.description}</h4>
            <h4>Looking for: {idea.lookingFor}</h4>
          </div>
        );
      })}
      </section>
      <Link to="/create">
      <button className="btn">
        Create your own
      </button> 
      </Link>
    </div>
  );
}
