import "./App.css";
import RecipesListPage from "./pages/RecipesListPage";
import RecipesDetailPage from "./pages/RecipesDetailPage";
import "swiper/css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RecipesListPage />} />
        <Route path="/list" element={<RecipesListPage />} />
        <Route path="/detail/:id" element={<RecipesDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
