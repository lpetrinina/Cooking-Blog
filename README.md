# Cooking-Blog - Exam Project for React February 2025 Course in SoftUni

🔎 See live demo [here](https://cooking-blog-455509.web.app/)

Cooking Blog is a Single web application (SPA) that allows users to browse, post, and interact with various healthy dessert recipes. The app demonstrates dynamic functionalities, interaction with the server (REST service), and the integration of core React concepts and technologies.

## 📁 Project Structure

- `client/` - Frontend (React, Vite)
- `server/` - Backend ([SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server))

## Usage

The app includes both public and private sections, following the required specifications.

- 📌**Guest Users**

  - Every user can see all recipes, details for each of them, and information about the cooking blog. The user has access to login and sign up forms.

- 📌**Authenticated Users**

  - Each auth user has access all recipes with their details, can create recipes and edit them, like/dislike a specific recipe, or leave a comment about it. The user has a personal area, where they can see all the recipes they have added and all the recipes they have liked.

  ⚠️ Users don't have access to like/dislike and add comment functionalities for recipes they have created by themselves.

  - You can log in with one of these already registered users:

    - email: `peter@abv.bg` password: `123456`
    - email: `george@abv.bg` password: `123456`
    - email: `admin@abv.bg` password: `admin`

## Features and Functionality

The project includes both public and private sections, following the required specifications.

### 🔓 Public Part

The public section is accessible to all users and includes the following pages:

- ✅ Home - A page displaying a list of the last three recipes added.
- ✅ Recipes - A page displaying a list of all existing recipes.
- ✅ Details - A page with complete information about a specific recipe. The user can access this page by clicking on a recipe from the Home page or the Recipes page.
- ✅ About - A page provides information about the application, its purpose, and key features.
- ✅ Login - Allows users to authenticate using their credentials.
- ✅ Sign up - Enables new users to create an account.

### 🔒 Private Part

The private section is available to **registered users** and includes the following pages:

- ✅ Create - Allows users to add new recipes.
- ✅ Profile - A page showing two types of recipe collections - created and liked recipes.
- ✅ Details (with functionalities): A page where users can interact with a specific recipe
  - 📌 **NO recipe owners:** by liking/disliking or leaving a comment.
  - 📌 **Recipe owner:** by editing or deleting.

## Technologies and Concepts

### Core Technologies

- ⚛ **React** for building the user interface
- 🌐 **JavaScript** for dynamic interactions
- 🎨 **Tailwind CSS** and **external CSS** for styling
- 🔗 **REST API** for communication with the backend (SoftUni Practice Server)

### Core React Concepts

- **Routing**: React Router is used to create a smooth and dynamic application experience, through nested routes, parameterized routes, and the useNavigate hook.

- **Component State**: useState hook for managing state within components.

- **React Hooks**: Various custom hooks are used to manage components behavior and state.

- **Context API**: Used to share state across components without passing props.

- **React Router Guards**: Used to protect both public and private sections of the app (e.g., authentication checks).

### Core Features

- **CRUD Operations**:

  - For recipes collection - full support
  - For comment collection - only create and read
  - For like collection - only create, read and delete

- **Data Validation**: Used react-hook-form library for client-side validation to prevent data entry errors.

- **Error Handling**: Management of errors during communication with the server, displaying error/success messages for failed/successful requests.

- **Stay Logged In**: Users remain logged in after a page reload via use PersistedState custom hook which set user data in local storage.

## Folder Structure

- The application follows a well-defined folder structure, which ensures maintainability and scalability of the project.

## Bonuses

- **Deploying the application in the cloud**: The application is deployed on Firebase and Google Cloud Run.
