import "./App.css";
import RecipesListPage from "./pages/RecipesListPage";
import RecipesDetailPage from "./pages/RecipesDetailPage";
import "swiper/css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Contact from "./contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RecipesListPage />} />
        <Route path="/home" element={<RecipesListPage />} />
        <Route path="/list" element={<RecipesListPage />} />
        <Route path="/detail/:id" element={<RecipesDetailPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
