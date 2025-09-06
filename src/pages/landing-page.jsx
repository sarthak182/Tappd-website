import FirstCard from "../images/FirstCardLandingPage.png";
import SecondCard from "../images/SecondCardLandingPage.png";
import ThirdCard from "../images/ThirdCardLandingPage.png";
import FirstGlow from "../images/FirstGlow.png";
import "../styles/landing-page.css";
function LandingPage(){
    return (
        <div className="landing-page-wrapper">
      <img 
        src={FirstGlow} 
        alt="glow"
        style={{
          position: "absolute",
          top: '52vw',
          left: '47vw',
          width: '95vw',
          height:"110vw",
          transform: "translate(-50%, -50%)",
          filter: "brightness(50%)",
          zIndex: -1
        }} 
      />
      <div className="tappd-landing-page-heading-cont">
      <p className="tappd-landing-page-heading">Stop Swiping & <br/>Start Meeting.</p>
      </div>
      <div className="tappd-landing-page-subtext">
      <p>Tappd is the new social platform for discovering curated<br/>
      events and making authentic connections with people<br/>
      who share your interests. Real life, made easy</p>
      </div>
    <div className="tappd-landing-page-buttons-section">
    <button className ="waitlist-btn">Join the Waitlist</button>
    <button className="explore-btn">Explore Tappd</button>
    </div>
    <div className="reviews">
    <div>28Million +<br/>Personal Users</div>
    <div>500+ <br/> Business Users</div>
    <div>200+ <br/> In app currencies</div>
    </div>
      <div className="ImagesStacked">
        <img className="First-image" alt="first-card" src={FirstCard}/>
        <img className="Second-image" alt="first-card" src={SecondCard}/>
        <img className="Third-image" alt="first-card" src={ThirdCard}/>
      </div>
        </div>
    )
}
export default LandingPage;