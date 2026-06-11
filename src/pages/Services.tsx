import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'permanent',
      title: 'Permanent staffing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'Learn More'
    },
    {
      id: 'temporary',
      title: 'Temporary staffing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'Learn More'
    },
    {
      id: 'rpo',
      title: 'RPO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'Learn More'
    }
  ];

  const clientLogos = [
    { name: 'Client 1', logo: 'LOGO' },
    { name: 'Client 2', logo: 'LOGO' },
    { name: 'Client 3', logo: 'LOGO' },
    { name: 'Client 4', logo: 'LOGO' }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-16 bg-[#192B59] text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#192B59] to-[#2563eb] opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <nav className="flex justify-center items-center space-x-2 text-blue-200">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <span className="text-white">Our Services</span>
            </nav>
          </div>
        </div>
        
        {/* Wave Shape */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
          </svg>
        </div> */}
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Our Services</span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What We Offer.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <a 
                  href={`#${service.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {service.link}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Professions and Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Professions Hiring */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Professions Hiring</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The current job market is dynamic, with numerous industries actively seeking new talent.
              </p>
              <button onClick={() => {window.location.href = "/";}} className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit">
                Professions
              </button>
              <div className="mt-8">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional woman"
                  className="w-full max-w-xs mx-auto lg:mx-0 rounded-lg"
                />
              </div>
            </div>

            {/* Industries Hiring */}
            <div className="bg-[#192B59] p-8 lg:p-12 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Industries Hiring</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                The current job market is dynamic, with numerous industries actively seeking new talent.
              </p>
              <button onClick={() => {window.location.href = "/";}} className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#192B59] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 w-fit">
                Industries
              </button>
              <div className="mt-8">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional man with laptop"
                  className="w-full max-w-xs mx-auto lg:mx-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      {/* <section className="py-16 bg-[#192B59]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-20 flex items-center justify-center">
                  <span className="text-white/60 font-bold text-lg tracking-wider">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for talent or seeking opportunities, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Hire Talent
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">
              Find Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;