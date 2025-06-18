import React from 'react';
import { Users, Briefcase, Building, Award, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'permanent',
      title: 'Permanent Staffing',
      description: 'Find the perfect long-term addition to your team with our thorough permanent placement services.',
      icon: <Users className="h-8 w-8" />,
      benefits: [
        'Comprehensive candidate screening and evaluation',
        'Cultural fit assessment',
        'Skill verification and reference checks',
        'Market insights and salary benchmarking',
        'Onboarding support and follow-up'
      ]
    },
    {
      id: 'temporary',
      title: 'Temporary Staffing',
      description: 'Flexible workforce solutions to help manage workload fluctuations and special projects.',
      icon: <Briefcase className="h-8 w-8" />,
      benefits: [
        'Rapid deployment of pre-vetted professionals',
        'Flexibility to scale your workforce as needed',
        'Reduced administrative burden with our payroll services',
        'Trial-to-hire options',
        'Industry specialists ready to start immediately'
      ]
    },
    {
      id: 'contract',
      title: 'Contract Staffing',
      description: 'Specialized professionals available for project-based work with flexible contract terms.',
      icon: <Building className="h-8 w-8" />,
      benefits: [
        'Project-specific expertise',
        'Customizable contract durations',
        'No long-term commitments',
        'Comprehensive compliance management',
        'Access to niche skill sets'
      ]
    },
    {
      id: 'executive',
      title: 'Executive Search',
      description: 'Target and recruit top-tier leadership talent to drive your organization forward.',
      icon: <Award className="h-8 w-8" />,
      benefits: [
        'Discreet approach to passive candidates',
        'In-depth leadership assessment',
        'Industry-specific expertise',
        'Comprehensive market mapping',
        'Long-term placement guarantee'
      ]
    },
    {
      id: 'rpo',
      title: 'Recruitment Process Outsourcing',
      description: 'Streamline your entire hiring process with our comprehensive RPO solutions.',
      icon: <CheckCircle className="h-8 w-8" />,
      benefits: [
        'End-to-end recruitment management',
        'Scalable solutions for any hiring volume',
        'Reduced time-to-hire and cost-per-hire',
        'Advanced analytics and reporting',
        'Employer branding enhancement'
      ]
    },
    {
      id: 'global',
      title: 'Global Talent Acquisition',
      description: 'Access international talent pools to find the perfect candidates across borders.',
      icon: <MapPin className="h-8 w-8" />,
      benefits: [
        'International hiring expertise',
        'Cross-border compliance management',
        'Cultural adaptation support',
        'Global payroll solutions',
        'Visa and relocation assistance'
      ]
    }
  ];

  return (
    <div className="pt-20" style={{fontFamily: 'Montserrat'}}>
      {/* Header Section */}
      <section className="py-16 bg-[#192B59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200">
              Comprehensive recruiting solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tailored Staffing Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of recruiting services to meet your specific talent needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="text-lg font-medium text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Learn more about {service.title}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Recruitment Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional talent consistently.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: 'Understand',
                  description: 'We begin by deeply understanding your business, culture, and specific requirements.',
                  icon: <CheckCircle className="h-6 w-6" />,
                },
                {
                  title: 'Source',
                  description: 'Our recruiters leverage extensive networks and advanced tools to identify ideal candidates.',
                  icon: <Search className="h-6 w-6" />,
                },
                {
                  title: 'Evaluate',
                  description: 'Rigorous screening ensures candidates have the skills, experience, and cultural fit you need.',
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: 'Present',
                  description: 'We present a curated shortlist of qualified candidates with detailed assessments.',
                  icon: <Briefcase className="h-6 w-6" />,
                },
                {
                  title: 'Secure',
                  description: 'We manage negotiations and ensure a smooth hiring process for all parties.',
                  icon: <Award className="h-6 w-6" />,
                },
                {
                  title: 'Support',
                  description: 'Our relationship continues with follow-up and support throughout the onboarding process.',
                  icon: <Building className="h-6 w-6" />,
                },
              ].map((step, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:mr-16' : 'lg:mr-auto lg:ml-16'} lg:w-5/12`}>
                  <div className="hidden lg:block absolute top-6 w-8 h-8 rounded-full bg-blue-500 shadow-lg z-10 text-white flex items-center justify-center font-bold" style={{ [index % 2 === 0 ? 'left' : 'right']: '-52px' }}>
                    {index + 1}
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md relative z-0">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 lg:px-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-white">Ready to Transform Your Hiring Process?</h2>
                <p className="mt-4 text-lg text-blue-100">
                  Contact us today to discuss your specific staffing needs and discover how Silicon Recruit can help you find exceptional talent.
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

export default Services;