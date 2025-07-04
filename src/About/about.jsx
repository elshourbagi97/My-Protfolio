import "./about.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    

    // Load Spline viewer
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.11/build/spline-viewer.js";
    
    document.body.appendChild(script);

    // Resize listener for responsiveness
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inline responsive styles for spline-viewer
  const splineStyle = {
    width: "100%",
    height: isMobile ? "630px" : "740px",
    borderRadius: "20px",
    display: "block",
  };

  return (
    <>
    <div className="AboutContent">
      <div className="leftAbout"  >
        <h3>About me</h3>
        <div className="aboutMain">
          <h4>I am a Full-Stack developer based in Egypt. Has Engineering background.</h4>
          <p>I'm Adham Elshourbagy, a 27-year-old Full Stack Web Developer from Egypt with a background in Engineering from Cairo University. I shifted to tech after completing a Full Stack Development diploma at AMIT Academy with a 95% grade..</p>
          <p>I build dynamic, user-friendly apps using html, scss, js, css, React, Laravel, Node.js, and MySQL. I’m passionate about clean code, UI/UX, and responsive design. Currently, I’m exploring Webflow and improving my design skill</p>
          <p>During the program, I gained hands-on experience in both frontend and backend development. On the frontend, I’ve worked with technologies like HTML, CSS, JavaScript, React, and responsive design to build clean and engaging user interfaces. On the backend, I developed solid skills using Node.js, Express, Laravel, MySQL, and APIs, allowing me to build robust, full-featured applications from the ground up.</p>
          <a className="btn btn-warning" href="/AdhamElShourbagy-CV.pdf" download title="Download Cv">
            Download MY CV
          </a>
        </div>
      </div>

      <div className="splineWrapper" >
        <spline-viewer
          url="https://prod.spline.design/ORaaAfE6zzTcXxZQ/scene.splinecode"
          style={splineStyle}
        ></spline-viewer>
        <div className="red"></div>
      </div>
    </div>
      <div className="line aboutLine"></div>
       </>
  );
}
