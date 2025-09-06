import "../styles/hero.css";
import FirstImage from "../images/FirstCardHeroPage.png";
import SecondImage from "../images/SecondCardHeroPage.png";
import ThirdImage from "../images/ThirdCardHeroPage.png";
function HeroPage(){
    return (
    <div className="hero-page-wrapper">
      <button className="hero-page-how-it-works-cont">How It Works</button>
      <p className="hero-page-heading">Real Connections in 3 Simple Steps</p>
      <div className="hero-steps-container">
        <div className="hero-step">
          <div className="hero-step-text">
            <div>
            <p className="hero-page-step-number-heading">01</p>
            </div>
            <p className="hero-step-title">Discover Your Scene</p>
            <p className="hero-step-subtext">
              Browse a curated feed of events tailored to your passions. <br />
              From tech talks and art walks to sports meetups, <br />
              find what moves you.
            </p>
          </div>
          <div className="hero-step-image">
            <img src={FirstImage} alt="example" />
          </div>
        </div>

        <div className="hero-step reverse">
          <div className="hero-step-text-reverse">
            <p className="hero-page-step-number-heading">02</p>
            <p className="hero-step-title">Join with Confidence</p>
            <p className="hero-step-subtext">
              RSVP to events with verified hosts and see who else is going. <br />
              Our safety-first features, including optional ID verification, <br />
              help build a trusted community.
            </p>
          </div>
          <div className="hero-step-image">
            <img src={SecondImage} alt="example" />
          </div>
        </div>

        <div className="hero-step">
          <div className="hero-step-text">
            <p className="hero-page-step-number-heading">03</p>
            <p className="hero-step-title">Build your Circle</p>
            <p className="hero-step-subtext">
              Attend events, share experiences and make genuine <br />
              connections. Tappd is the bridge between online discovery <br />
              and offline community.
            </p>
          </div>
          <div className="hero-step-image">
            <img src={ThirdImage} alt="example" className="rounded-img" />
          </div>
        </div>
      </div>

    </div>
);
}
export default HeroPage;