//ulasan

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Partners(props) {
  return (
    <div className="partner-list flex overflow-x-scroll gap-2 p-2 box-border">
      {props.partnersList.map((item, index) => (
        <div
          className="kartu-partner flex-shrink-0 w-[calc(100%/3-20px)] m-2 text-left box-border"
          key={index}
        >
          <div className="card-content bg-white p-5 rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faUser} className="text-xl text-gray-500 mr-2" />
              <p className="text-base leading-6 m-0">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Partners;