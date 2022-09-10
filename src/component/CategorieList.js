import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";

const CategorieList = ({ name }) => {
  const [categorieList, setCategorieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://opentdb.com/api_category.php");
      const data = await request.json();
      setCategorieList(data.trivia_categories);
      setLoading(false);
    };
    fetchData();
  }, []);

  const select = (e) => {
    e.className = "list-group-item list-group-item-action active";
    navigate(`/difficulty/${name}/${e.id}`);
  };
  return (
    <div className="container p-4 w-50 mt-2">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-center mb-3">Select Category</h1>
          <div className="list-group mt-3">
            {categorieList.map((i, index) => (
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
        </>
      )}
    </div>
  );
};

export default CategorieList;
