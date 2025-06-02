import React from "react";
import { experts } from "../../data/mockdata";
import Studies from "./Studies";
import Achievements from "./Achievements";
import ExpertCard from "./ExpertCard";

const ExpertsList = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {experts.map((expert) => (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10" key={expert.id}>
          <ExpertCard expert={expert} />
          {/* Studies and Certificates */}
          <Studies expert={expert}/>
          {/* Achievements */}
          <Achievements expert={expert}/>
        </div>
      ))}
    </div>
  );
};

export default ExpertsList;
