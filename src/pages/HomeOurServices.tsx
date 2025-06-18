import React from 'react';
import OurServices3 from "../assets/OurServices3.png"
import OurServices4 from "../assets/OurServices4.png"
import OurServices5 from "../assets/OurServices5.png"

const ServicesDesign: React.FC = () => {
  return (
    <div >
      {/* Section Header */}
      <div className="text-center mb-12">
    {/* <img src={AboutBuilding} alt="" className="h-6 w-6 text-blue-600 mr-2"/>
          <span className="text-lg font-semibold text-gray-700">Our Services</span> */}
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          What We Offer.
        </h1>
      </div>

      {/* Services Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Service Card 1: Permanent Staffing */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src= {OurServices3}
            alt="Permanent Staffing"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Permanent staffing</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
             Build a strong foundation. We help you hire long-term talent who align with your vision, culture, and business goals.
            </p>
          </div>
        </div>

        {/* Service Card 2: Temporary Staffing */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src= {OurServices4}
            alt="Temporary Staffing"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Temporary staffing</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get the flexibility you need. Our contract staffing solutions help you scale quickly without compromising quality.
            </p>
          </div>
        </div>

        {/* Service Card 3: RPO */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src= {OurServices5}
            alt="RPO"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Contract-to-Hire</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Test the fit. Our contract-to-hire model lets you evaluate performance before making a long-term commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDesign;