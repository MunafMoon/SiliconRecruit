import React, { useState } from 'react';
import { Check, Users, Building, Briefcase } from 'lucide-react';

const GetStarted: React.FC = () => {
  const [accountType, setAccountType] = useState<'employer' | 'candidate'>('employer');
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };
  
  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Get Started with Silicon Recruit</h1>
            <p className="text-lg text-gray-600">
              Complete the steps below to set up your account and start your journey with us.
            </p>
          </div>
          
          {/* Account Type Selection */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">I am a...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAccountType('employer')}
                className={`flex items-center p-4 border-2 rounded-lg ${
                  accountType === 'employer'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                } transition-colors duration-200`}
              >
                <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
                  accountType === 'employer' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  <Building className="h-6 w-6" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-medium text-gray-900">Employer</h3>
                  <p className="text-sm text-gray-500">I want to hire talent for my business</p>
                </div>
                {accountType === 'employer' && (
                  <div className="ml-auto">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setAccountType('candidate')}
                className={`flex items-center p-4 border-2 rounded-lg ${
                  accountType === 'candidate'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-200'
                } transition-colors duration-200`}
              >
                <div className={`flex items-center justify-center h-12 w-12 rounded-full ${
                  accountType === 'candidate' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-medium text-gray-900">Job Seeker</h3>
                  <p className="text-sm text-gray-500">I want to find a new job opportunity</p>
                </div>
                {accountType === 'candidate' && (
                  <div className="ml-auto">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                )}
              </button>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div 
                    key={step} 
                    className="flex items-center"
                  >
                    <span 
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
                        step < currentStep
                          ? 'bg-blue-600 text-white'
                          : step === currentStep
                            ? 'bg-white border-2 border-blue-600 text-blue-600'
                            : 'bg-white border-2 border-gray-300 text-gray-500'
                      }`}
                    >
                      {step < currentStep ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span>{step}</span>
                      )}
                    </span>
                    <span 
                      className={`ml-2 text-sm font-medium ${
                        step <= currentStep ? 'text-blue-600' : 'text-gray-500'
                      }`}
                    >
                      {step === 1 ? 'Account Details' : step === 2 ? 'Profile Information' : 'Preferences'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form Steps */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {currentStep === 1 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Details</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters with numbers and special characters.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the 
                      <a href="/terms" className="text-blue-600 hover:text-blue-500 ml-1">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                {accountType === 'employer' ? (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry
                      </label>
                      <select
                        id="industry"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select an industry</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1001+">1001+ employees</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Job Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <select
                        id="experience"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                        Top Skills (comma separated)
                      </label>
                      <input
                        type="text"
                        id="skills"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Project Management, JavaScript, Marketing"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        Highest Education Level
                      </label>
                      <select
                        id="education"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select education level</option>
                        <option value="high-school">High School</option>
                        <option value="associate">Associate Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="City, Country"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV
                      </label>
                      <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path 
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
                {accountType === 'employer' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hiring Needs
                      </label>
                      <div className="space-y-2">
                        {['Permanent Staff', 'Temporary Staff', 'Contract Workers', 'Executive Search'].map((need) => (
                          <div key={need} className="flex items-center">
                            <input
                              id={need.toLowerCase().replace(/\s+/g, '-')}
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={need.toLowerCase().replace(/\s+/g, '-')} className="ml-2 block text-sm text-gray-700">
                              {need}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hiring Timeline
                      </label>
                      <div className="space-y-2">
                        {['Immediate (0-2 weeks)', 'Soon (2-4 weeks)', 'Planning Ahead (1-3 months)', 'Ongoing Needs'].map((timeline) => (
                          <div key={timeline} className="flex items-center">
                            <input
                              id={timeline.toLowerCase().replace(/[\s()+-]+/g, '-')}
                              type="radio"
                              name="timeline"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label htmlFor={timeline.toLowerCase().replace(/[\s()+-]+/g, '-')} className="ml-2 block text-sm text-gray-700">
                              {timeline}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="positions" className="block text-sm font-medium text-gray-700 mb-1">
                        Key Positions to Fill
                      </label>
                      <textarea
                        id="positions"
                        rows={3}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="List the key positions you're looking to fill"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Communication Preferences
                      </label>
                      <div className="space-y-2">
                        {['Email', 'Phone', 'Video Call', 'In-Person Meeting'].map((method) => (
                          <div key={method} className="flex items-center">
                            <input
                              id={method.toLowerCase().replace(/\s+/g, '-')}
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={method.toLowerCase().replace(/\s+/g, '-')} className="ml-2 block text-sm text-gray-700">
                              {method}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Types
                      </label>
                      <div className="space-y-2">
                        {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Remote'].map((type) => (
                          <div key={type} className="flex items-center">
                            <input
                              id={type.toLowerCase().replace(/\s+/g, '-')}
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={type.toLowerCase().replace(/\s+/g, '-')} className="ml-2 block text-sm text-gray-700">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Salary Range
                      </label>
                      <select
                        id="salary"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select salary range</option>
                        <option value="0-50k">$0 - $50,000</option>
                        <option value="50k-75k">$50,000 - $75,000</option>
                        <option value="75k-100k">$75,000 - $100,000</option>
                        <option value="100k-150k">$100,000 - $150,000</option>
                        <option value="150k+">$150,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                        Availability
                      </label>
                      <select
                        id="availability"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month notice</option>
                        <option value="passive">Passive (not actively looking)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Alerts
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="job-alerts"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="job-alerts" className="ml-2 block text-sm text-gray-700">
                            Send me email alerts for matching job opportunities
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="relocation" className="block text-sm font-medium text-gray-700 mb-1">
                        Relocation Preference
                      </label>
                      <select
                        id="relocation"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select preference</option>
                        <option value="yes">Open to relocation</option>
                        <option value="no">Not open to relocation</option>
                        <option value="specific">Open to specific locations only</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Form Navigation */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${
                  currentStep === 1
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Previous
              </button>
              
              <button
                type="button"
                onClick={currentStep === 3 ? () => {} : handleNextStep}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentStep === 3 ? 'Complete Setup' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;