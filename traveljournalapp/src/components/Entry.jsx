import React from 'react';
import Locationicon from '/src/assets/location.svg';

function Entry({ imagesrc, name, title, date, matter,map }) {
  return (
    <div className="flex items-center gap-5 mx-[10rem] mt-[0.8rem]">
      <img
        src={imagesrc}
        alt={title}
        className="h-[15rem] rounded-xl shadow-slate-300 shadow-2xl w-[200px]"
      />
      <div className="right">
        <div className="heading flex">
          <img src={Locationicon} alt="locationLogo" className="h-[1.5rem]" />
          <h4 className="font-bold">{name}</h4>
          <span className="ml-2">
            <a href={map} target="_blank" rel="noopener noreferrer" className="hover:underline">
              View on Google Maps
            </a>
          </span>
        </div>

        <h1 className="text-4xl mb-5 mt-[0.5px] font-extrabold">{title}</h1>
        <h3 className="font-bold">{date}</h3>
        <p>{matter}</p>
      </div>
      <hr />
    </div>
  );
}

export default Entry;
