// import React from 'react';
import Solution1 from "../assets/images/SolutionWeProvide/image1.png";
import Solution2 from "../assets/images/SolutionWeProvide/image2.png";
import Solution3 from "../assets/images/SolutionWeProvide/image3.png";
import Solution6 from "../assets/images/SolutionWeProvide/image6.png";
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      {/* Embedded CSS for this component */}
      <style>{`
        /* --- General Styles --- */
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: rgb(255, 255, 255);
          color: #333;
          line-height: 1.6;
        }

        /* Ensure images are always responsive */
        img {
            max-width: 100%;
            height: auto; /* Maintain aspect ratio */
            display: block; /* Remove extra space below images */
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr; /* Three columns */
          gap: 30px; /* Space between columns */
          max-width: 1200px; /* Max width for the whole layout */
          margin: 60px auto; /* Center the layout */
          padding: 20px; /* Add padding for smaller screens */
          align-items: start; /* Align items to the top of their grid areas */
        }

        /* --- Left Column --- */
        .left-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .highlight-text {
          background-color: #e0f2f7; /* Light blue background */
          color: #2196f3; /* Blue text color */
          padding: 5px 15px;
          border-radius: 20px;
          display: inline-block; /* Makes background only span text width */
          font-weight: bold;
          font-size: 0.9em;
          margin-bottom: 10px; /* Space below it */
        }

        .main-heading {
          font-size: 2.8em; /* Large heading */
          font-weight: bold;
          line-height: 1.2;
          color: #1a1a1a; /* Dark text */
          margin: 0; /* Remove default margin */
        }

        /* Ensure images within heading/paragraph scale */
        .main-heading img, .sub-text img {
          max-width: 100%;
          height: auto;
        }

        .sub-text {
          font-size: 1em;
          color: #555;
          margin-top: 15px;
        }
        
        .dark-card {
          background-color: #2c3e50; /* Dark blue/purple from image */
          color: #ffffff;
          border-radius: 12px;
          padding: 25px;
          overflow: hidden; /* Hide overflowing background image */
          position: relative;
          min-height: 180px; /* Adjust height as needed */
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Push content to bottom */
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .dark-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://via.placeholder.com/400x300?text=Dummy+Background') no-repeat center center/cover; /* Dummy background image */
          opacity: 0.2; /* Make it transparent */
          z-index: 1;
        }

        .dark-card-content {
          position: relative;
          z-index: 2; /* Ensure content is above background image */
        }

        .dark-card-content p {
          font-size: 2.5em; /* Large "10+ Years" text */
          font-weight: bold;
          margin: 0;
        }
        
        .contact-us-button {
            background-color: #2196f3; /* Blue button */
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none; /* For anchor tag */
            transition: background-color 0.3s ease;
        }
        .contact-us-button:hover {
            background-color: #1976d2;
        }

        /* --- Middle Column --- */
        .middle-column {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center items horizontally within the column */
          gap: 30px; /* Space between the two images */
          /* No person-image class, handled by general img rules or specific styles below */
        }

        /* Specific styles for the main images in the middle column */
        .middle-column .main-image {
          border-radius: 15% / 25%; /* Apply specific border-radius here */
          object-fit: cover;
          max-width: 100%; /* Ensure it scales within its column */
          /* You can set a fixed width if you want, but then manage overflow or use object-fit-cover well */
          /* For example, if images are naturally different sizes, max-width: 100% is best */
        }

        /* Adjust max-width for the larger Solution6 image */
        .middle-column .solution6-image {
            max-width: 100%; /* Still ensures it fits its container */
            border-radius: 15% / 25%;
            object-fit: cover;
        }


        .pie-chart-container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 300px; /* Adjust size */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pie-chart-legend {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
            font-size: 0.9em;
        }
        .legend-item {
            display: flex;
            align-items: center;
        }
        .legend-color-box {
            width: 15px;
            height: 15px;
            border-radius: 3px;
            margin-right: 8px;
        }

        /* --- Right Column --- */
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .checklist-item {
          display: flex;
          align-items: flex-start; /* Align text to top if multiple lines */
          gap: 15px;
        }

        .check-icon {
          color: #28a745; /* Green checkmark */
          font-size: 1.5em; /* Larger checkmark */
          margin-top: 2px; /* Slight adjustment */
        }

        .checklist-content h3 {
          margin: 0 0 5px 0;
          font-size: 1.1em;
          color: #1a1a1a;
        }

        .checklist-content p {
          margin: 0;
          font-size: 0.9em;
          color: #555;
        }

        .appointment-card {
          background-color: #2c3e50; /* Dark blue/purple */
          color: #ffffff;
          border-radius: 12px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center; /* Center content horizontally */
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        .appointment-card h3 {
            margin: 0;
            font-size: 1.3em;
            text-align: center;
        }

        .client-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .client-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #555; /* Placeholder for avatar */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8em;
            font-weight: bold;
            color: #fff;
            border: 2px solid #ffffff; /* White border around avatar */
        }

        .star-rating {
            color: #ffc107; /* Gold stars */
            font-size: 1.2em;
        }

        .trusted-clients-text {
            font-size: 0.9em;
            color: #bbb;
        }
        .trusted-clients-text span {
            display: block; /* Make "Trusted Clients" stack above rating */
            font-size: 0.8em;
        }
        
        /* --- Responsiveness --- */
        @media (max-width: 992px) {
          .container {
            grid-template-columns: 1fr 1fr; /* 2 columns on medium screens */
            gap: 25px; /* Adjust gap for smaller screens */
          }
          .middle-column {
              grid-column: span 2; /* Middle column spans both columns */
              order: 3; /* Move middle column to the bottom on smaller screens */
          }
          .left-column {
              order: 1;
          }
          .right-column {
              order: 2;
          }
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr; /* Single column on small screens */
            gap: 20px;
            padding: 15px; /* More padding for very small screens */
          }
          .middle-column, .left-column, .right-column {
              grid-column: unset; /* Reset span */
              order: unset; /* Reset order */
          }
          /* Ensure all cards and images take full width on small screens */
          .dark-card, .pie-chart-container, .appointment-card {
              max-width: 100%;
          }
          .main-heading {
              font-size: 2.2em; /* Smaller heading on mobile */
          }
        }

        /* Extra small screens adjustments */
        @media (max-width: 480px) {
            .container {
                padding: 10px;
                margin: 30px auto; /* Less vertical margin */
            }
            .main-heading {
                font-size: 1.8em;
            }
            .contact-us-button {
                padding: 10px 20px;
                font-size: 1em;
            }
            .checklist-content h3 {
                font-size: 1em;
            }
            .checklist-content p {
                font-size: 0.85em;
            }
            .appointment-card {
                padding: 20px;
            }
            .appointment-card h3 {
                font-size: 1.1em;
            }
        }
      `}</style>

      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <div>
            {/* If Solution1 and Solution2 are meant to be a combined heading/intro, keep them.
                If Solution1 is the "Solution We Provide" highlight text, then change h1 to span
                and adjust its styling. Assuming they are part of the visual design for now.
            */}
            {/* <span className="highlight-text">Solution We Provide</span> */}
            <h1 className="main-heading">
                <img src={Solution1} alt="Solution Title" />
            </h1>
          </div>
          <p className="sub-text">
            <img src={Solution2} alt="Solution Description" />
          </p>
          {/* Re-introducing the commented out section if you intend to use it */}
          {/* <p className="sub-text">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <button className="contact-us-button">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
            </svg>
          </button> */}
        </div>

        {/* Middle Column */}
        {/* Corrected: Removed the nested middle-column div */}
        <div className="middle-column">
          <img
            src={Solution3}
            alt="Smiling Professional"
            className="main-image" // Use a class for consistency
          />
          <img
            src={Solution6}
            alt="Solution Details"
            className="solution6-image" // Specific class for potential distinct styling
          />
          {/* Re-introducing the commented out section if you intend to use it */}
          {/* <div className="pie-chart-container">
            Dummy Pie Chart (using SVG for basic shape)
            <svg width="150" height="150" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#f0f0f0" />
              <path d="M50 50 L50 5 A45 45 0 0 1 93.682 66.862 Z" fill="#ffc107" />
              <path d="M50 50 L93.682 66.862 A45 45 0 0 1 50 95 Z" fill="#9c27b0" />
              <path d="M50 50 L50 95 A45 45 0 0 1 6.318 66.862 Z" fill="#2196f3" />
              <path d="M50 50 L6.318 66.862 A45 45 0 0 1 50 5 Z" fill="#f44336" />
              <circle cx="50" cy="50" r="25" fill="white" />
              <text x="50" y="55" textAnchor="middle" fontSize="18" fill="#333" fontWeight="bold">77%</text>
            </svg>
            <div className="pie-chart-legend">
                <div className="legend-item"><span className="legend-color-box" style={{backgroundColor: '#9c27b0'}}></span>Document</div>
                <div className="legend-item"><span className="legend-color-box" style={{backgroundColor: '#2196f3'}}></span>Videos</div>
                <div className="legend-item"><span className="legend-color-box" style={{backgroundColor: '#f44336'}}></span>Photos</div>
                <div className="legend-item"><span className="legend-color-box" style={{backgroundColor: '#ffc107'}}></span>Music</div>
            </div>
          </div> */}
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="checklist-item">
            <span className="check-icon">&#10003;</span> {/* Checkmark unicode */}
            <div className="checklist-content">
              <h3>Employer Branding</h3>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-icon">&#10003;</span>
            <div className="checklist-content">
              <h3>Industry Knowledge</h3>
              <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="appointment-card">
            <h3>MAKE APPOINTMENT</h3>
            <div className="client-info">
              <div className="client-avatar">+24</div> {/* Dummy avatar with text */}
              <div>
                <div className="trusted-clients-text">Trusted Clients</div>
                <div className="star-rating">★★★★★</div> {/* 5 stars unicode */}
              </div>
            </div>
            <Link to="/get-started" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;