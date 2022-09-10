import React, { useState } from "react";
import { useNavigate } from "react-router";

const TypeList = ({ name, categorieID, difficultyID }) => {
  const typeList = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True / False" },
  ];
  const navigate = useNavigate();
  const select = (e) => {
    e.className = "list-group-item list-group-item-action active";
    navigate(`/questions/${name}/${categorieID}/${difficultyID}/${e.id}`);
  };
  return (
    <div className="container p-4 w-50 mt-2">
      <h1 className="text-center mb-3">Select Type</h1>
      <div className="list-group">
        {typeList.map((i, index) => (
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

export default TypeList;
