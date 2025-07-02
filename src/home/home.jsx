import Header from "../header/header";
import Particles from '../../ReactBites/Particles/Particles';
import "./home.scss"
import ProfileCard from '../../ReactBites/ProfileCard/ProfileCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import About from "../About/about";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Contact from "../contact/Contact";

export default function Home(){
   const navigate = useNavigate()
   const btnUpRef=useRef();

   const handelContact =()=>{
    document.getElementById("secContact")?.scrollIntoView({behavior: "smooth"});
}

useEffect(() => {
  const handleScroll = () => {
    if (btnUpRef.current) {
      if (window.scrollY >= 60) {
        btnUpRef.current.classList.add("visible");

      } else {
        btnUpRef.current.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,     
      });
}, []);
   
    return(
        <section className="home" >
             <div className="particles">
                <Particles className="particles"
                   particleColors={['#ffffff', '#ffffff']}
                   particleCount={200}
                   particleSpread={10}
                   speed={0.1}
                   particleBaseSize={100}
                   moveParticlesOnHover={true}
                   alphaParticles={false}
                   disableRotation={false}
                   />
           </div>
           <div className="homeContent" id="secHome">
                    <div className="header" data-aos="fade-down" data-aos-delay="100">
                       <Header id="secAbout" />
                    </div>
                    <div className="para1" >
                        <div className="leftPart">
                           <h3 data-aos="fade-right"data-aos-delay="100">hi, i am <br /> Adham Elshourbagi.</h3>
                        <p data-aos="fade-right"data-aos-delay="100">I'm Adham Elshourbagy, a Full Stack Web Developer with an 
                        engineering background and a strong passion for building modern, responsive web applications. I recently completed an intensive one-year diploma in Full Stack Development at AMIT Academy, graduating with a score of 95%. I’m dedicated to writing clean, efficient code and continuously learning 
                        new technologies to grow in the tech industry.</p>
                     <div className="logos" data-aos="fade-right"data-aos-delay="700">
                        <div className="logo1"><a title="Twitter" href="https://x.com/elshourbagii?s=11"><i className="fa-brands fa-x-twitter"></i></a></div>
                        <div className="logo1"><a title="Facebook" href="https://www.facebook.com/share/1MmuYNZidt/?mibextid=wwXIfr"><i className="fa-brands fa-facebook-f"></i></a></div>
                        <div className="logo1"><a title="Instagram" href="https://www.instagram.com/elshourbagi?igsh=aHA2MTJsdG13cGw0&utm_source=qr"><i className="fa-brands fa-instagram"></i></a></div>
                        <div className="logo1"><a title="LinkedIn" href="https://www.linkedin.com/in/elshourbagii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin-in"></i></a></div>
                        <div className="logo1"><a title="GitHub" href="https://github.com/elshourbagi97"><i className="fa-brands fa-github"></i></a></div>
                     </div>
                        </div>
                     <div className="card" data-aos="fade-left" data-aos-delay="100">
                        <ProfileCard
                            name="Adham Elshourbagi"
                            title="Fullstack Developer"
                            handle="Elshourbagi"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="./adham.png"
                            showUserInfo={true}
                            enableTilt={true}
                            onContactClick={handelContact}
                        />
                     </div>
                   </div>
                  <div className="line paraLine"></div>
                   <div className="about" id="secAbout"  >
                     <About/>
                   </div>
                   <div className="skills" id="secSkills">
                     <Skills/>
                   </div>
                    <div className="projects" id="secProjects">
                     <Projects/>
                   </div>
                    <div className="Contact" id="secContact">
                     <Contact />
                   </div>

           </div>
           <button className="btn btn-danger up"
               onClick={()=>{window.scrollTo({top:0,behavior:"smooth"})}} 
               ref={btnUpRef}>
               <i className="fa-solid fa-upload"></i>
            </button>
        </section>
    )
}