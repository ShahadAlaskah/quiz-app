import React from "react";
import { useNavigate, useParams } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ScoreDetails from "../component/ScoreDetails";

const Score = () => {
  const { name, result } = useParams();

  return (
    <>
      <Navbar />
      <ScoreDetails name={name} result={result} />
     
    </>
  );
};

export default Score;
