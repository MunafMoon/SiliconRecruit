import React from 'react';
import { Bird } from 'lucide-react';
import Img from "../assets/images/logo.jpg"

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* <Bird className="h-8 w-8 text-white" /> */}
      <img 
        src={ Img }
        alt="Professional recruiters"
        className="h-8 w-8 text-white"
      />
      <span className="text-xs text-blue-300 mt-3 ml-1">
      <span className="ml-2 text-xl font-bold text-white">
        Silicon</span>
        RECRUIT</span>
    </div>
  );
};

export default Logo;