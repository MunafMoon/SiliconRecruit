import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Silicon Recruit found us the perfect VP of Engineering in just three weeks. Their understanding of our company culture and technical needs was impressive.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "After struggling with other agencies, Silicon Recruit delivered candidates that perfectly matched our requirements. They saved us countless hours of screening.",
    author: "Michael Chen",
    position: "HR Director, FinTech Solutions",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "The team at Silicon Recruit truly understands the nuances of the healthcare industry. They found us specialized talent that other recruiters couldn't.",
    author: "Dr. Emily Rodriguez",
    position: "Medical Director, HealthFirst",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-blue-600 opacity-20">
        <Quote className="h-24 w-24" />
      </div>
      
      <div className="relative bg-white rounded-xl shadow-xl p-8 lg:p-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-blue-100">
              <img 
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-8">
            <p className="text-gray-600 text-lg italic mb-6 relative">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
              <p className="text-gray-500">{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 flex space-x-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full transition-colors duration-200 ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;