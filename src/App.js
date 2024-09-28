import "./App.css";
import BookStore from "./components/BookStore";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BookStore />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default App;
