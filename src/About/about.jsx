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
          <p>I’m Adham Elshourbagy, a 27-year-old Full Stack Web Developer based in Egypt, with a background in Mechanical Engineering from Cairo University.</p>
          <p>While my academic journey started in engineering, my real passion led me to tech. I completed a one-year Full Stack Development diploma at AMIT Academy, graduating with a 95% grade — and ever since, I’ve been building dynamic, responsive, and user-friendly web applications.</p>
          <p>During the program, I gained hands-on experience in both frontend and backend development. On the frontend, I’ve worked with technologies like HTML, CSS, JavaScript, React, and responsive design to build clean and engaging user interfaces. On the backend, I developed solid skills using Node.js, Express, Laravel, MySQL, and APIs, allowing me to build robust, full-featured applications from the ground up.</p>
          <p>I’m especially interested in technologies like React, Node.js, and Laravel, and I care deeply about clean code, accessibility, and creating smooth user experiences. Right now, I’m exploring Webflow, diving deeper into UI/UX design, and always looking to push my skill set further.</p>
          <p>Outside of coding, you’ll usually find me on the football field, behind a camera, or teaming up in a game of Valorant. I'm passionate, curious, and excited to keep growing in this ever-evolving world of web development.</p>
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
