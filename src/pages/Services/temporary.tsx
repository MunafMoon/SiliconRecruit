// import { Users, Award, CheckCircle, Briefcase } from 'lucide-react';
import React from 'react';
import { Users,Briefcase, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Permanent from "../../assets/images/Ourservices/permanent.png"
import Ourservices2 from "../../assets/images/Ourservices/ourservice2.png";
// import AboutBuilding from "../assets/AboutBuilding.png";
// import AbouteUs2 from '../assets/AbouteUs2.png'; // Adjust the path as necessary
// import AbouteUs3 from '../assets/AbouteUs3.png'; // Adjust the path as necessary
// import AbouteUs4 from '../assets/AbouteUs4.png'; // Adjust the path as necessary
// import AbouteUs5 from '../assets/AbouteUs5.png'; // Adjust the path as necessary

const About: React.FC = () => {
  return (
    <div className="pt-20" style={{fontFamily: 'Montserrat'}}>
      {/* Header Section */}
      <section className="py-16 bg-[#192B59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* <img src={Permanent} alt="" /> */}
            <h1 className="text-4xl font-bold mb-6">  Temporary Staffing</h1>
            {/* <p className="text-xl text-blue-200">
              Decades of staffing experience at your service. We connect exceptional talent with 
              leading companies across the globe.
            </p> */}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* <div className="lg:w-1/2">
              <div className="relative">
                <tr>
                <td>
                 <img 
                src={Ourservices1}
                alt="Silicon Recruit team" 
                className="rounded-lg shadow-xl"
              />
                </td>
              </tr>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent rounded-lg"></div>
              </div>
            </div> */}
            <div className="lg:w-1/2">
              <div className="flex items-start mb-4">
                {/* <Building2 className="h-6 w-6 text-blue-600 mr-2" /> */}
                {/* <img src={AboutBuilding} alt="" className="h-6 w-6 text-blue-600 mr-2"/> */}
                {/* <h2 className="text-xl font-bold text-gray-800">About Us</h2> */}
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Temporary  Staffing
                {/* <span className="block">Experience at Your Service</span> */}
              </h3>
              
              <p className="text-gray-600 mb-8">
               We bring deep expertise in permanent, temporary, and contract staffing with a sharp focus on results. Whether you're hiring for agility or long-term growth, we deliver the right fit—fast.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <CheckCircle className="h-6 w-6" />
                    </div> */}
                      {/* <img src={AbouteUs4} alt="" /> */}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">Our Vision</h4>
                    <p className="mt-2 text-gray-600">
                      Analyze cash flow, income, expenses, debts, assets, liabilities, and financial ratios to identify potential risks and tolerance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Search className="h-6 w-6" />
                    </div> */}
                    {/* <img src={AbouteUs5} alt="" /> */}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
                    <p className="mt-2 text-gray-600">
                      It involves analyzing market trends, identifying opportunities, and assessing risks to develop a well-structured approach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/get-started" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Us
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <tr>
                <td>
                 <img 
                src={Ourservices2}
                alt="Silicon Recruit team" 
                className="rounded-lg shadow-xl"
              />
                </td>
              </tr>
                
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent rounded-lg"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define how we work with our clients and candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service, from candidate screening to client communication.',
                icon: <Award className="h-8 w-8" />,
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical practices in all our business relationships.',
                icon: <CheckCircle className="h-8 w-8" />,
              },
              {
                title: 'Partnership',
                description: 'We build long-term relationships based on trust, understanding, and mutual success.',
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methodologies to stay ahead in a rapidly evolving job market.',
                icon: <Briefcase className="h-8 w-8" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts who lead our global recruiting operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alexandra Chen',
                position: 'Chief Executive Officer',
                bio: 'With over 20 years in the staffing industry, Alexandra leads Silicon Recruit with a focus on innovation and global expansion.',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Michael Rodriguez',
                position: 'Chief Operations Officer',
                bio: 'Michael oversees our global operations, ensuring efficiency and excellence in service delivery across all regions.',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Sarah Johnson',
                position: 'Chief Technology Officer',
                bio: 'Sarah leads our technology initiatives, developing innovative solutions to enhance our recruiting capabilities.',
                image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'David Patel',
                position: 'Global Head of Recruitment',
                bio: 'David brings 15 years of experience in talent acquisition to lead our worldwide recruiting strategies.',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'Emily Nguyen',
                position: 'Director of Client Services',
                bio: 'Emily ensures our clients receive exceptional service and customized staffing solutions.',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                name: 'James Wilson',
                position: 'Finance Director',
                bio: 'James oversees our financial operations, ensuring sustainable growth and fiscal responsibility.',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192B59]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p>{member.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how Silicon Recruit can help you find exceptional talent or your dream career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Hire Talent
              </a>
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Find Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;