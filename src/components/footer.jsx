import React, {useState, useEffect} from "react";
import "../styles/footer.css";
import instagramIcon from "../images/InstagramIcon.png";
import linkedinIcon from "../images/LinkedinIcon.png";
import twitterIcon from "../images/TwitterIcon.png";
import logo from "../images/orgtappd-logo.png";
function Footer(){
     const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        const maxWidth = 80;
        setWidth(scrollPercent * maxWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        <>
        <div
      style={{
        height: "1.5px",
        width: `${width}%`,
        margin: "5.5rem auto 3rem auto",
        backgroundColor: "#404040",
        borderRadius: "8px",
        transition: "width 0.1s ease-out",
      }}
    />

        <div className="container-div">
        <div className="left-div">
                <div className="left-div-logo">
                    <img src={logo} alt="tappd-logo" className="footer-tappd-logo"/>
                </div>
                <div className="social">
                <button className="social-links"><img src={instagramIcon} alt="instagram"/></button>
                <button className="social-links"><img src={linkedinIcon} alt="linkedin"/></button>
                <button className="social-links"><img src={twitterIcon} alt="twitter"/></button>
                </div>
                <div className="copyright-container">Copyright © 2025 by Tappd<br/>Pvt Ltd. All rights reserved.</div>
        </div>
        <div className="right-div">
            <div className="right-div-cont">
                <p className="right-div-headings">Contact Us</p>
                <p className="right-div-text">Sector 29, Gurgaon,<br/>India</p>
                <p className="right-div-text">+91-8700890980</p>
                <p className="right-div-text">hr@tappd.com</p>
            </div>
            <div className="right-div-cont">
                <p className="right-div-headings">Account</p>
                <p className="right-div-text">Create Account</p>
                <p className="right-div-text">Login Account</p>
                <p className="right-div-text">IOS App</p>
                <p className="right-div-text">Android App</p>
            </div>
            <div className="right-div-cont">
                <p className="right-div-headings">Company</p>
                <p className="right-div-text">About Tappd</p>
                <p className="right-div-text">For Business</p>
                <p className="right-div-text">Tappd Partners</p>
                <p className="right-div-text">Host at Tappd</p>
                <p className="right-div-text">Careers</p>
            </div>
            <div className="right-div-cont">
                <p className="right-div-headings">Resources</p>
                <p className="right-div-text">Help Center</p>
                <p className="right-div-text">Privacy & Policy</p>
                <p className="right-div-text">Terms & Conditions</p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Footer;