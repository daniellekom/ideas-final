import { motion } from "framer-motion";


const IdeaBoard = () => {
    return (
     <> 
      <motion.section className="ideaboard" initial={{x:'-20vw'}} animate={{x:0}}>
     <h1 style={{align: "center", marginLeft:"40%",marginTop:"50px", position: "absolute", color:"orange"}}> Idea Board</h1>
      
      
      </motion.section>
     <motion.button className="btn" whileHover={{scale:1.1, textShadow:"0px,0px,8px rgb(240, 128, 128)",
     boxShadow:"0px,0px,8px rgb(225, 118, 30)"}} >
 Create your own</motion.button>
  
     </>
    );
  };
  
  export default IdeaBoard;