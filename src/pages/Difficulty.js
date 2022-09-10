import React from "react";
import { useParams } from "react-router";
import DifficultyList from "../component/DifficultyList";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Difficulty = () => {
  const { name, categorieID } = useParams();
  return (
    <>
      <Navbar />
      <DifficultyList name={name} categorieID={categorieID} />
      {/* <NextBack /> */}
    
    </>
  );
};

export default Difficulty;
