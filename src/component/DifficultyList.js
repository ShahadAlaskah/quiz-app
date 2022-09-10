import React, { useState } from "react";
import { useNavigate } from "react-router";

const DifficultyList = ({ name, categorieID }) => {
  const difficultyList = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const navigate = useNavigate();
  const select = (e) => {
    e.className = "list-group-item list-group-item-action active";
    navigate(`/type/${name}/${categorieID}/${e.id}`);
  };
  return (
    <div className="container p-4 w-50 mt-2">
      <h1 className="text-center mb-3">Select Difficulty</h1>
      <div className="list-group">
        {difficultyList.map((i, index) => (
          <button
            key={index}
            id={i.id}
            onClick={(e) => select(e.target)}
            type="button"
            className="list-group-item list-group-item-action"
          >
            {i.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultyList;
