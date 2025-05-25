import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    id: 'us',
    name: 'United States',
    description: 'Our largest market with offices in New York, San Francisco, and Chicago.',
    image: 'https://images.pexels.com/photos/1682794/pexels-photo-1682794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'canada',
    name: 'Canada',
    description: 'Serving the Canadian market with offices in Toronto and Vancouver.',
    image: 'https://images.pexels.com/photos/2479154/pexels-photo-2479154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    description: 'Covering the UK market from our London headquarters.',
    image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    description: 'Supporting the Middle East from our Dubai regional office.',
    image: 'https://images.pexels.com/photos/1683508/pexels-photo-1683508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const LocationSelector: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
      <div className="lg:col-span-1">
        <div className="bg-blue-700/50 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
          <div className="space-y-4">
            {locations.map((location) => (
              <button
                key={location.id}
                className={`flex items-center w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                  activeLocation.id === location.id 
                    ? 'bg-white text-blue-600' 
                    : 'hover:bg-blue-800/50 text-white'
                }`}
                onClick={() => setActiveLocation(location)}
              >
                <MapPin className={`h-5 w-5 mr-2 ${
                  activeLocation.id === location.id ? 'text-blue-600' : 'text-blue-300'
                }`} />
                <span>{location.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="relative rounded-xl overflow-hidden h-80 group">
          <img 
            src={activeLocation.image} 
            alt={activeLocation.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{activeLocation.name}</h3>
            <p className="text-blue-100">{activeLocation.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;