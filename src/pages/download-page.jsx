import "../styles/download-page.css";
import joinNow from "../images/JoinNowContainer.png"
import bands from "../images/orgTappdBands.png";
import downloadNow from "../images/DownloadAppImage.png";
import underline from "../images/UnderLine.png";
function DownloadPage(){
    return (<>
    <div className="download-page-wrapper">
        <button className="download-page-button">We Are Launching Soon</button>
        <div className="download-page-heading-wrapper">
        <p className="download-page-heading">Tap To Connect</p>
        <img src={underline} className="download-page-heading-underline" alt="heading-underline"/>
        </div>
        <div className="download-page-sections">
        <div className="download-page-content">
        <p className="download-page-subheading">The Future of Connection <br/>is a Simple Tap</p>
        <p className="download-page-subtext">Get ready for Phase 2. We're revolutionalising how you connect by<br/>bridging the gap between your 
            first handshake and your first chat. Our<br/>smart wearable tech will let you instantly and safely 
            exchange contact<br/>info with a mutual tap-no more awkward phone number requests.</p>
        <div className="download-page-email-wrapper">
            <input type="email" className="download-page-email-input" placeholder="Email"/>
                <button className="download-page-email-button">Join The Waitlist</button>
        </div>
        <img src={joinNow} className="download-page-joinnow-image" alt="tappd-joinnow"/>
        </div>
        <div className="download-page-image">
        <img src={bands} className="download-bands-image" alt="tappd-bands"/>
        </div>
        </div>
    <img src={downloadNow} className="download-now-image" alt="tappd-bands"/>
    </div>
    </>)
}
export default DownloadPage;