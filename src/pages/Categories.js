import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CategorieList from "../component/CategorieList";
import { useParams } from "react-router";

const Categories = () => {
  const { name } = useParams();

  return (
    <>
      <Navbar />
      <CategorieList name={name} />
      
    </>
  );
};

export default Categories;
