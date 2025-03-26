import { Route, Routes } from "react-router";
import { UserContext } from "./contexts/UserContext";

import usePersistedState from "./hooks/usePersistedState";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import About from "./components/about/About";
import Catalog from "./components/catalog/Catalog";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import RecipeCreate from "./components/recipe-create/RecipeCreate";
import RecipeEdit from "./components/recipe-edit/RecipeEdit";
import Footer from "./components/footer/Footer";
import Logout from "./components/logout/Logout";
import "./App.css";

function App() {
  const [authData, setAuthData] = usePersistedState("auth", null);

  const userLoginHandler = (currentUserData) => {
    setAuthData(currentUserData);
  };

  const userLogoutHandler = () => {
    setAuthData(null);
  };

  return (
    <>
      <UserContext.Provider
        value={{ ...authData, userLoginHandler, userLogoutHandler }}
      >
        <Header />

        <div className="bg-white pt-16">
          <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-screen-xl bg-white p-5 sm:p-10 md:p-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/recipes" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/create" element={<RecipeCreate />} />
                <Route
                  path="/recipes/:recipeId/details"
                  element={<RecipeDetails />}
                />
                <Route
                  path="/recipes/:recipeId/edit"
                  element={<RecipeEdit />}
                />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
