
const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <h2>BABY GENIUS</h2>
      <div className="menu" 
style={{
  color: "white",
  marginLeft:"auto",
  textDecoration: "none",
  padding: "9px",
  borderRadius:"1rem"
  
}}>       
     
        <a href="/Board">Board</a>
       {user ? (<a href="/Welcome">Logout</a>) :(<a href="/Welcome">Login</a>)}
       
      </div >
    </nav>
  );
};

export default Navbar;
