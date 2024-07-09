//destination

import React from "react";

function Tutors(props) {
  return (
    <div className="tutor-list grid grid-cols-4 gap-10 p-5">
      {props.tutorsList.map((item, index) => {
        return (
          <div className="kartu-tutor transition duration-300 ease-in-out transform hover:scale-110" key={index}>
            <img src={item.image} className="w-5/5 rounded-full" alt={item.name} />
            <p className="text-lg text-center text-blue-900">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tutors;