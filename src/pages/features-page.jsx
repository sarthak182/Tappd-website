import "../styles/features-page.css";
import firstfeature from "../images/FeatureFirstIcon.png";
import secondfeature from "../images/FeatureSecondIcon.png";
import thirdfeature from "../images/FeatureThirdIcon.png";
import fourthfeature from "../images/FeatureFourthIcon.png";
function FeaturesSection(){
return (<>
<div className="tappd-features-wrapper">
<div className="tappd-features-section"> {/*tappd-features-top-section */}
<button className="tappd-features-button">Tappd features</button>
<p className="tappd-features-heading">The Safer, Smarter way to Socialise</p>
<p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover and create events based on <br/>
  shared interests, ensuring you're always in good company.</p>
</div>
<div className="tappd-features">
  <div className="tappd-features-upper-section" style={{display:"flex"}}>
    <div className="tappd-features-upper-section-first-cont" style={{alignItems:"center", justifyContent:"center"}}>
      <img src={firstfeature} alt="first-icon"  style={{ transform: "scale(0.85)" }} />
      <p className="tappd-features-section-heading">Curated & Interest-Based Events</p>
      <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover and create events based on
        shared interests, ensuring you're always in good company.</p>
    </div>
    <div className="tappd-features-upper-section-second-cont">
      <img src={secondfeature} alt="second-icon" style={{ transform: "scale(0.85)" }}/>
      <p className="tappd-features-section-heading">Meet with Peace of Mind</p>
      <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover and create events based on
        shared interests, ensuring you're always in good company.</p>
    </div>
  </div>
  <div className="tappd-features-lower-section" style={{display:"flex"}}>
    <div className="tappd-features-lower-section-first-cont">
      <img src={thirdfeature} alt="third-icon" style={{ transform: "scale(0.85)" }}/>
      <p className="tappd-features-section-heading">QR Code to Scan & Connect</p>
      <p className="tappd-features-subtext">Stop wondering where to meet like minded people. Our platform helps you discover and create events based on
        shared interests, ensuring you're always in good company.</p>
    </div>
    <div className="tappd-features-lower-section-second-cont">
      <img src={fourthfeature} alt="fourth-icon" style={{ transform: "scale(0.85)" }}/>
      <p className="tappd-features-section-heading">Host or Join. It's Your Call.</p>
      <p className="tappd-features-subtext">Have a great idea for a meetup? Our simple tools make it easy to host your own event. Prefer to
        join? RSVP in one click and get ready to connect.</p>
    </div>
  </div>
</div>
</div>
</>);
}
export default FeaturesSection;