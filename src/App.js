import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Difficulty from "./pages/Difficulty";
import Type from "./pages/Type";
import Questions from "./pages/Questions";
import Score from "./pages/Score";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="/difficulty/:name/:categorieID" element={<Difficulty />} />
        <Route
          path="/type/:name/:categorieID/:difficultyID"
          element={<Type />}
        />
        <Route
          path="/questions/:name/:categorieID/:difficultyID/:typeID"
          element={<Questions />}
        />
        <Route path="/score/:name/:result" element={<Score />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
