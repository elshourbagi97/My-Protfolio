import { useEffect, useRef } from "react";
import "./project.scss";

export default function Projects() {
  const videoRefs = useRef([]);
  const videoDivRefs = useRef([]);
  const imageRefs = useRef([]);
  const cardContentRefs = useRef([]);
  const logoPlayRefs = useRef([]);

  const videos = [
      {
      video: "./CRUD.mp4",
      image: "./CRUD.PNG",
      h3: "Product Management CRUD System with Total Calculator & Theme Switcher with Day and Night theme .",
      para: "A dynamic CRUD app for managing products with real-time total price calculation, category-based search, bulk actions, and a responsive interface featuring day/night mode and smooth user interactions.",
      skills: ["./html.png", "./css.png","./js.png"],
    },
    {
      video: "./weather.mp4",
      image: "./weather.PNG",
      h3: "Live Weather App with Location-Based Forecast with using APIs .",
      para: "A sleek weather app that detects your location and displays real-time weather data with matching background visuals, temperature, and condition descriptions and with using APIs.",
      skills: ["./html.png", "./css.png","./js.png"],
    },
     {
      video: "./calculator.mp4",
      image: "./calculator.PNG",
      h3: "Smart Calculator Built with React .",
      para: "A modern calculator built using React, JavaScript, HTML, and CSS. It supports all basic mathematical operations with a clean, responsive UI and handles complex equations smoothly for a better user experience.",
      skills: ["./html.png", "./css.png","./js.png","react.png"],
    },
      {
      video: "./clock.mp4",
      image: "./clock.png",
      h3: "Mobile Clock Interface with Real-Time API in React .",
      para: "A mobile-style clock app built with React that fetches real-time time and date using an API. Features a modern smartphone UI design with live updates, touch icons, and responsive display.",
      skills: ["./html.png", "./css.png","./scss.png","./js.png","react.png"],
    },
    {
      video: "./onlineQuiz.mp4",
      image: "./onlineQuiz.PNG",
      h3: "Online Quiz App ' Interactive Learning Platform '.",
      para: "A simple and intuitive Online Quiz App for students and teachers to create and take quizzes. Designed for interactive learning with a clean, responsive interface.",
      skills: ["./html.png", "./css.png", "./scss.png", "./php.png", "./mysql.png", "./js.png", "./bootstrap.png"],
    },
    {
      video: "./Restaurant.mp4",
      image: "./restaurant.PNG",
      scss: "restaurant",
      h3: "Experience Culinary Excellence in our Restaurant | A Taste You’ll Never Forget .",
      para: "Welcome to our Restaurant, where flavor meets elegance. Enjoy a carefully crafted menu, inviting ambiance, and a dining experience designed to delight.",
      skills: ["./html.png", "./css.png", "./scss.png", "./js.png", "./react.png", "./mysql.png", "./php.png", "./lavarel.png", "./bootstrap.png"],
    },
  ];

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.playbackRate = 1.5;
    });
  }, []);

  const handlePlayVideo = (i) => {
    videoDivRefs.current[i].classList.remove("hidden");
    imageRefs.current[i].classList.add("hidden");
    cardContentRefs.current[i].classList.add("hidden");
    logoPlayRefs.current[i].classList.add("hidden");
  };

  const handleClose = (i) => {
    videoDivRefs.current[i].classList.add("hidden");
    imageRefs.current[i].classList.remove("hidden");
    cardContentRefs.current[i].classList.remove("hidden");
    logoPlayRefs.current[i].classList.remove("hidden");
  };

  return (
    <div className="projectContent">
      <h3 >Projects</h3>
      <div className="videosContent">
        {videos.map((item, i) => (
          <div className="projectCard"  key={i}>
            <div ref={(el) => (videoDivRefs.current[i] = el)} className="video hidden">
              <video ref={(el) => (videoRefs.current[i] = el)} src={item.video} controls></video>
              <button onClick={() => handleClose(i)} className="btn btn-danger">X</button>
            </div>
            <div ref={(el) => (imageRefs.current[i] = el)} className="image">
              <img src={item.image} alt={item.image} className={`bg-image ${item.scss}`} />
            </div>
            <div ref={(el) => (cardContentRefs.current[i] = el)} className="cardContent">
              <h3>{item.h3}</h3>
              <p>{item.para}</p>
              <div className="skills">
                {item.skills.map((skill, id) => (
                  <div className="imgSkill" key={id}>
                    <img
                      src={skill}
                      alt={skill.split("/").pop().split(".")[0]}
                      title={skill.split("/").pop().split(".")[0]}
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div ref={(el) => (logoPlayRefs.current[i] = el)} className="logoPlay">
              <img src="./logoPlay.gif" onClick={() => handlePlayVideo(i)} alt="logoPlay" title="play Video"/>
            </div>
          </div>
        ))}
      </div>
      <div className="line" style={{marginTop:"3rem"}}></div>
    </div>
  );
}
