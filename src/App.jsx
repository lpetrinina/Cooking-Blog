import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/about/About";

import Header from "./components/header/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import SignUp from "./components/sign-up/SignUp";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <div className="bg-white pt-16">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl bg-white p-5 sm:p-10 md:p-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />

              {/* <RecipeDetails /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
