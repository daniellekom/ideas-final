
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Walky Ideas</h1>
      <div className="menu" 
style={{
  color: "white",
  marginleft: "100px",
  textDecoration: "none",
  padding: "9px",
  borderRadius:"1rem"
}}>       
        <a href="/create">Create +</a> 
        <a href="/invite">Invite</a>
        <a href="/Board">Board</a>
        <a href="/Welcome">Logout</a>
       
      </div >
    </nav>
  );
};

export default Navbar;
