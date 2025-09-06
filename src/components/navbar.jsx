import "../styles/navbar.css";
import logo from "../images/orgtappd-logo.png";
function NavbarComponent(){
    const ScrollScreen=(remAmount)=>{
    const pixels = remAmount * parseFloat(getComputedStyle(document.documentElement).fontSize);
        window.scrollBy({
        top: pixels,
        left: 0,
        behavior: "smooth",
    });
    }
    return (
    <div className="navbar-wrapper" style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height:"9vw"}}>
    <div className="navbar-logo">
    <img src={logo} alt="Nothing" className="navbar-tappd-logo"/>
    </div>
    <div className="navbar-bar">
        <button className="navbar-buttons" onClick={()=>{ScrollScreen(62)}}>About Us</button>
        <button className="navbar-buttons" onClick={()=>{ScrollScreen(169)}}>Features</button>
        <button className="navbar-buttons" onClick={()=>{ScrollScreen(227)}}>Host</button>
        <button className="navbar-buttons" onClick={()=>{ScrollScreen(280)}}>Business</button>
        <button className="navbar-buttons" onClick={()=>{ScrollScreen(350)}}>Careers</button>
    </div>
    <div className="navbar-right-button">
    <button className="waitlist-btn">Join the Waitlist</button>
    </div>
    </div>);
}
export default NavbarComponent;
