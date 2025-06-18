import React, { useState, useEffect } from 'react';

// Define the interface for each slide's data
interface SlideData {
  id: number;
  mainImage1: string; // URL for the first main image
  mainImage2: string; // URL for the second main image
  heading: string;
  subheading: string;
  learnMoreLink: string;
  vacancyHiringText: string;
}

// Dummy Slide Data
const slides: SlideData[] = [
  {
    id: 1,
    mainImage1: "https://placehold.co/300x400/0000FF/FFFFFF?text=Slide+1+Prof+1",
    mainImage2: "https://placehold.co/300x400/0000FF/FFFFFF?text=Slide+1+Prof+2",
    heading: "Grow Your Work With Expert.",
    subheading: "We believe in thinking ahead and creating solutions that meet today's challenges and pave the way for future success.",
    learnMoreLink: "#learn-more-1",
    vacancyHiringText: "Vacancy\nHiring",
  },
  {
    id: 2,
    mainImage1: "https://placehold.co/300x400/28a745/FFFFFF?text=Slide+2+Prof+1", // Green theme
    mainImage2: "https://placehold.co/300x400/28a745/FFFFFF?text=Slide+2+Prof+2",
    heading: "Innovate Your Future.",
    subheading: "Driving growth and efficiency through cutting-edge solutions and strategic insights.",
    learnMoreLink: "#learn-more-2",
    vacancyHiringText: "New\nOpenings",
  },
  {
    id: 3,
    mainImage1: "https://placehold.co/300x400/dc3545/FFFFFF?text=Slide+3+Prof+1", // Red theme
    mainImage2: "https://placehold.co/300x400/dc3545/FFFFFF?text=Slide+3+Prof+2",
    heading: "Unlock Your Potential.",
    subheading: "Empowering businesses and individuals to achieve their full potential with tailored strategies.",
    learnMoreLink: "#learn-more-3",
    vacancyHiringText: "Join\nUs",
  },
];

const HeroImageSlider: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <>
      {/* Embedded CSS for this component */}
      <style>{`
        /* Global styles for the page background and font */
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #0d1117;
        }

        .slider-wrapper {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden; /* Important for hiding off-screen slides */
          background-color: #1a237e; /* Default background for slider area */
          display: flex;
          flex-direction: column;
        }

        /* Subtle wave effect at the bottom */
        .slider-wrapper::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 100%;
          height: 150px;
          background: linear-gradient(to top, #f0f2f5, rgba(240, 242, 245, 0));
          border-top-left-radius: 50% 100px;
          border-top-right-radius: 50% 100px;
          transform: rotate(-1deg);
          z-index: 0;
        }

        /* --- Navigation Bar (Static for the whole slider) --- */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 5%;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          z-index: 10;
          position: relative; /* Ensure it's above slides */
        }

        .logo {
          display: flex;
          align-items: center;
          font-weight: bold;
          font-size: 1.5em;
          color: #ffffff;
        }

        .logo img {
          height: 30px;
          margin-right: 10px;
          border-radius: 4px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          padding: 5px 0;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #a7c7ed;
        }

        .nav-buttons {
          display: flex;
          gap: 15px;
        }

        .nav-button {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .login-button {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #ffffff;
        }

        .login-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .get-started-button {
          background-color: #2196f3;
          color: #ffffff;
        }

        .get-started-button:hover {
          background-color: #1976d2;
        }

        /* --- Slider Content Area --- */
        .slides-container {
          display: flex;
          width: ${slides.length * 100}%; /* Total width of all slides */
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth transition */
          transform: translateX(-${(currentSlideIndex / slides.length) * 100}%); /* Slide effect */
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 90px; /* Space for fixed navbar */
        }

        .slide-item {
          width: ${100 / slides.length}%; /* Each slide takes its share of the total width */
          flex-shrink: 0; /* Prevent shrinking */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5%;
          max-width: 1400px; /* Content max width */
          margin: 0 auto; /* Center content within the slide */
          height: calc(100vh - 90px); /* Adjust height based on navbar */
          box-sizing: border-box;
          position: relative; /* For image positioning */
        }

        .text-section {
          flex: 1;
          max-width: 600px;
          margin-right: 50px;
          color: #ffffff; /* Text color for content */
        }

        .hero-heading {
          font-size: 3.5em;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .hero-subheading {
          font-size: 1.2em;
          line-height: 1.5;
          margin-bottom: 30px;
          color: #e0e0e0;
        }

        .learn-more-button {
          background-color: #2196f3;
          color: #ffffff;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1.1em;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .learn-more-button:hover {
          background-color: #1976d2;
        }

        .learn-more-button svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .image-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          min-height: 400px;
        }

        .main-image {
          position: absolute;
          bottom: 0;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          object-fit: cover;
          max-height: 100%; /* Ensure images don't overflow slide height */
        }

        .main-image-1 {
          width: 45%;
          height: auto;
          left: 5%;
          z-index: 2;
          transform: translateY(10px);
        }

        .main-image-2 {
          width: 45%;
          height: auto;
          right: 5%;
          z-index: 1;
          transform: translateY(-10px);
        }

        .vacancy-button {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ffffff;
          color: #1a237e;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.9em;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 3;
          transition: transform 0.3s ease;
        }

        .vacancy-button:hover {
          transform: translateX(-50%) scale(1.05);
        }

        .vacancy-button svg {
          width: 30px;
          height: 30px;
          margin-bottom: 5px;
          fill: currentColor;
        }

        /* --- Slider Navigation (Arrows and Dots) --- */
        .slider-controls {
          position: absolute;
          bottom: 20px; /* Position dots below the slider */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 15; /* Above everything */
        }

        .dot {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .dot.active {
          background-color: #ffffff;
          transform: scale(1.2);
        }

        .arrow-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          padding: 15px 10px;
          cursor: pointer;
          font-size: 1.5em;
          z-index: 12;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .arrow-button:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .arrow-left {
          left: 2%;
        }

        .arrow-right {
          right: 2%;
        }

        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 3em;
          }
          .text-section {
            margin-right: 30px;
          }
          .main-image-1, .main-image-2 {
            width: 50%;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .nav-links {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            display: none; /* Hide nav links on small screens for simplicity, or implement a toggle */
          }
          .nav-buttons {
            width: 100%;
            justify-content: space-around;
          }
          .slide-item {
            flex-direction: column;
            text-align: center;
            padding-top: 20px; /* Adjust padding for smaller screens */
            height: auto; /* Allow height to adjust */
          }
          .text-section {
            margin-right: 0;
            max-width: 100%;
          }
          .hero-heading {
            font-size: 2.5em;
          }
          .image-section {
            min-height: 300px;
            width: 100%;
            margin-top: 40px;
          }
          .main-image-1 {
            left: 10%;
          }
          .main-image-2 {
            right: 10%;
          }
          .vacancy-button {
            bottom: 0;
            width: 80px;
            height: 80px;
            font-size: 0.8em;
          }
          .vacancy-button svg {
            width: 25px;
            height: 25px;
          }
          .arrow-button {
            padding: 10px 5px;
            font-size: 1.2em;
          }
          .slider-controls {
            bottom: 5px; /* Adjust dot position on small screens */
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 2em;
          }
          .hero-subheading {
            font-size: 1em;
          }
          .learn-more-button {
            padding: 12px 20px;
            font-size: 1em;
          }
          .main-image-1, .main-image-2 {
            width: 60%;
          }
        }
      `}</style>

      <div className="slider-wrapper">
        {/* Navigation Bar (remains static outside the sliding part) */}
        <nav className="navbar">
          <div className="logo">
            <img src="https://placehold.co/40x40/FFFFFF/000000?text=Logo" alt="SiliconRECRUIT Logo" />
            SiliconRECRUIT
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Our Services</a>
            <a href="#">Blog</a>
          </div>
          <div className="nav-buttons">
            <button className="nav-button login-button">Login</button>
            <button className="nav-button get-started-button">Get Started</button>
          </div>
        </nav>

        {/* Slides Container */}
        <div className="slides-container" style={{ transform: `translateX(-${(currentSlideIndex / slides.length) * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide-item">
              <div className="text-section">
                <h1 className="hero-heading">{slide.heading}</h1>
                <p className="hero-subheading">{slide.subheading}</p>
                <a href={slide.learnMoreLink} className="learn-more-button">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                  </svg>
                </a>
              </div>
              <div className="image-section">
                <img src={slide.mainImage1} alt={`Professional 1 for ${slide.heading}`} className="main-image main-image-1" />
                <img src={slide.mainImage2} alt={`Professional 2 for ${slide.heading}`} className="main-image main-image-2" />
                <div className="vacancy-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                  </svg>
                  {slide.vacancyHiringText.split('\n').map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation Dots */}
        <div className="slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>

        {/* Slider Navigation Arrows */}
        <button className="arrow-button arrow-left" onClick={goToPrevSlide}>sdadsffd&#10094;</button>
        <button className="arrow-button arrow-right" onClick={goToNextSlide}>&#10095;</button>
      </div>
    </>
  );
};

export default HeroImageSlider;