import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAuth } from "../features/auth/authSlice.js";

import Navigation from "../components/Navigation.jsx";
import Home from "../pages/Home.jsx";
import Feeds from "../pages/Feeds.jsx";
// import RegistrationForm from "../components/RegistrationForm.jsx";
// import LoginForm from "../components/LoginForm.jsx";

// import Account from "../pages/Account.jsx";
// import ArticleDetail from "../pages/ArticleDetail.jsx";

// import ProtectedRoute from "../components/ProtectedRoute.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <>
      <div className="background">
        <Navigation />
        <Routes>
          {/* VISITOR ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/feeds" element={<Feeds />} />
          {/* <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegistrationForm />} /> */}

          {/* USER PROTECTED ROUTES */}
          {/* <Route 
                path="/account" 
                element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
                } 
              />
              <Route 
                path="/article/:articleUrl"
                element={
                  <ProtectedRoute>
                    <ArticleDetail />
                  </ProtectedRoute>
                }
              /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
