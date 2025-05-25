import React from 'react';
import { ArrowRight, Building, Users, MapPin, Search, Briefcase, Award, CheckCircle, ArrowUpRight, LucideArrowUpRightFromSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import JobSearchForm from '../components/JobSearchForm';
import LocationSelector from '../components/LocationSelector';
import TestimonialCarousel from '../components/TestimonialCarousel';
import StatCounter from '../components/StatCounter';
import HomeIcon from "../assets/images/Home.png"
import HomeStaff from "../assets/images/2.Staff.png"
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-20 bg-[#192B59] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Grow Your Work 
                <span className="block">With Expert.</span>
              </h1>
              <p className="mt-6 text-lg text-blue-100 max-w-lg">
                We believe in thinking ahead and creating solutions that
                meet today's challenges and pave the way for future success.
              </p>
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                >
                  Learn More
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={HomeIcon} 
                  alt="Professional recruiters" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              
              {/* <div className="absolute top-8 right-8 bg-white p-6 rounded-lg shadow-xl z-20 hidden lg:block">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[1, 2, 3].map((star) => (
                      <svg key={star} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Find Jobs In Global</h3>
              </div> */}
              
              <div className="absolute -bottom-10 -left-10 bg-blue-600 rounded-full h-24 w-24 flex flex-col items-center justify-center text-white p-5 shadow-xl z-20 hidden lg:flex">
                {/* <span className="text-2xl font-bold">150+</span> */}
                <span className="text-2xl font-bold"><LucideArrowUpRightFromSquare/></span>
                <span className="text-xs text-center">Vacancy Hiring</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Search Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 -mt-20 relative z-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Job</h2>
            <JobSearchForm />
          </div>
        </div>
      </section> */}
      
      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-start mb-4">
                <Building className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-800">About Us</h2>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Decades of Staffing
                <span className="block">Experience at Your Service</span>
              </h3>
              
              <p className="text-gray-600 mb-8">
                Specializing in permanent, temporary, and contract
                staffing with a focus on results.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Search className="h-6 w-6" />
                    </div>
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
                  to="/about" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Us
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src= {HomeStaff}
                  alt="Team meeting" 
                  className="rounded-lg shadow-xl"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Silicon Recruit</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We've built a reputation for excellence in the recruiting industry with our proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <StatCounter end={8500} suffix="+" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Placed Candidates</h3>
              <p className="text-gray-600 mt-2">Successfully placed in their dream jobs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Building className="h-8 w-8" />
              </div>
              <StatCounter end={950} suffix="+" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Client Companies</h3>
              <p className="text-gray-600 mt-2">Trusted partners across industries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <StatCounter end={150} suffix="+" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Active Vacancies</h3>
              <p className="text-gray-600 mt-2">Open positions across all sectors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <StatCounter end={20} suffix="+" />
              <h3 className="text-lg font-semibold text-gray-900 mt-2">Years Experience</h3>
              <p className="text-gray-600 mt-2">Decades of industry expertise</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive recruiting solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Permanent Staffing',
                description: 'Find the perfect long-term addition to your team with our thorough permanent placement services.',
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: 'Temporary Staffing',
                description: 'Flexible workforce solutions to help manage workload fluctuations and special projects.',
                icon: <Briefcase className="h-6 w-6" />,
              },
              {
                title: 'Contract Staffing',
                description: 'Specialized professionals available for project-based work with flexible contract terms.',
                icon: <Building className="h-6 w-6" />,
              },
              {
                title: 'Executive Search',
                description: 'Target and recruit top-tier leadership talent to drive your organization forward.',
                icon: <Award className="h-6 w-6" />,
              },
              {
                title: 'Recruitment Process Outsourcing',
                description: 'Streamline your entire hiring process with our comprehensive RPO solutions.',
                icon: <CheckCircle className="h-6 w-6" />,
              },
              {
                title: 'Global Talent Acquisition',
                description: 'Access international talent pools to find the perfect candidates across borders.',
                icon: <MapPin className="h-6 w-6" />,
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16 bg-[#192B59] text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Global Presence</h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Find opportunities with our worldwide network of recruitment professionals.
            </p>
          </div>
          
          <LocationSelector />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the companies and candidates who've experienced our exceptional service.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 lg:px-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-white">Ready to Find Your Next Great Hire?</h2>
                <p className="mt-4 text-lg text-blue-100">
                  Let our experts help you find the perfect candidates to drive your business forward.
                </p>
              </div>
              <div>
                <Link 
                  to="/get-started" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;