import React from "react";
import { useParams } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TypeList from "../component/TypeList";

const Type = () => {
  const { name, categorieID, difficultyID } = useParams();
  return (
    <>
      <Navbar />
      <TypeList
        name={name}
        categorieID={categorieID}
        difficultyID={difficultyID}
      />
      {/* <NextBack /> */}
    </>
  );
};

export default Type;
