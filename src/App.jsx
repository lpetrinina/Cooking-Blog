import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/Home";
import Login from "./components/login/Login";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
// import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <>
      <Header />

      <div className="bg-white pt-16">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl bg-white p-5 sm:p-10 md:p-16">
            {/* <Home /> */}
            {/* <Catalog /> */}
            {/* <RecipeDetails /> */}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
