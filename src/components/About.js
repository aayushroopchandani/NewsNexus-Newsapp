import React from "react";
import './About.css'
const About = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" ,width:'84vw'}}>
      <div className="col-md-8 text-center p-5 rounded " style={{backgroundColor:'#282828',boxShadow:'0 6px 15px rgba(255, 255, 255, 0.5)',animation: 'fadeIn 2s ease-in-out'}}>
        <h1 className="fw-bold mb-4">About NewsNexus</h1>
        
        <p className="fs-5 mb-4">
          Welcome to <strong>NewsNexus</strong>, your go-to source for 
          <span className="text-primary"> free, concise, and real-time news</span>.  
          Our goal is to keep you updated with the latest news <strong>without overwhelming you</strong>—
          all in a <strong>clear, digestible format and ad-free environment</strong>.
        </p>

        <div className="p-4 rounded " style={{boxShadow:'0 4px 10px rgba(255, 255, 255, 0.3)'}}>
          <h2 className="fw-semibold mb-3">Why Choose NewsNexus?</h2>
          
          <ul className="list-unstyled fs-5">
            <li className="mb-2">
              <span className="text-primary fs-4">📢</span>
              <strong> Short & Clear</strong> – Get the news you need, without the clutter.
            </li>
            <li className="mb-2">
              <span className="text-success fs-4">⚡</span>
              <strong> Real-Time Updates</strong> – Stay ahead with instant coverage.
            </li>
            <li className="mb-2">
              <span className="text-danger fs-4">🚫</span>
              <strong> Ad-Free Experience</strong> – No distractions, just pure news.
            </li>
          </ul>
        </div>

        <p className="fs-5 mt-4">
          Stay informed, stay ahead—only with <strong>NewsNexus</strong>. 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
// box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset;
// box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;