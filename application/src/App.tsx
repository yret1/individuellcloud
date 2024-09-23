import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Tag from "./components/Tag";
import Addbutton from "./components/AddButton";
import AddPost from "./Pages/AddPost";
import "./index.css";
import Searchbutton from "./components/searchButton";
import FindPosts from "./Pages/FindPosts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Tag />
        <Addbutton />
        <Searchbutton />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newPost" element={<AddPost />} />
          <Route path="/searchPosts" element={<FindPosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
