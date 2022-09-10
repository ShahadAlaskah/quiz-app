import React, { useEffect } from "react";
import { useParams } from "react-router";
import DisplayQuestion from "../component/DisplayQuestion";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Questions = () => {
  const { name, categorieID, difficultyID, typeID } = useParams();

  return (
    <>
      <Navbar />
      <DisplayQuestion
        name={name}
        categorieID={categorieID}
        difficultyID={difficultyID}
        typeID={typeID}
      />
  
    </>
  );
};

export default Questions;
