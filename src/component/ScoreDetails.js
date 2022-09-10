import React from "react";
import { useNavigate } from "react-router";

const ScoreDetails = ({ name, result }) => {
  const navigate = useNavigate();
  return (
    <div className="container p-4 w-50 mt-5">
      <div className="card w-100 p-5">
        <div className="card-body mt-3">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted mt-3">
            You scored {result} out of 10
          </h6>
          <div className=" mt-4 ">
            <button
              onClick={(e) => navigate("/")}
              type="button"
              className="btn btn-outline-dark w-100 my-2"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDetails;
