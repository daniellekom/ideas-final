import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Walky Ideas</h1>
      <motion.div className="menu"  initial= {{opacity:0}}animate={{opacity:1}} transition={{delay:0.2,duration:0.5,}}>       
        <a href="/create">Create +</a> 
        <a href="/invite">Invite</a>
        <a href="/Board">Board</a>
        <a href="/Welcome">Logout</a>
       
      </motion.div >
    </nav>
  );
};

export default Navbar;

// style={{
//   color: "white",
//   marginleft: "100px",
//   textDecoration: "none",
//   padding: "9px",
//   backgroundColor: "orange",
//   borderRadius:"1rem"
// }}