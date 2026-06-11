import React from 'react';
import { Bird } from 'lucide-react';
import Img from "../assets/images/logo3.png"

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* <Bird className="h-8 w-8 text-white" /> */}
      <img style={{ width: '16rem', height: '16rem' }}
        src={ Img }
        alt="Professional recruiters"
        className="h-16 w-16 text-254389"
      />
      {/* <span className="text-xs text-254389-300 mt-3 ml-1">
      <span className="ml-2 text-xl font-bold text-#254389">
        Silicon</span>
        RECRUIT
        </span> */}
    </div>
  );
};

export default Logo;