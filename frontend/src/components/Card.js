import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({name, age, img, city, id}) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/alert/${id}`);
  };

  return (
    <div className="p-4 md:w-1/3">
        <div onClick={handleClick} className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
          <img className="cardimage pt-2 lg:h-48 md:h-48 w-auto object-cover object-center" src={img} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{city}</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">{name}</h1>
          </div>
        </div>
      </div>
  )
}

export default Card