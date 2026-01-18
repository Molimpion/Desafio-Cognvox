import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import LoginPage from "./pages/Login";
import ActorPage from "./pages/Actors";
import ActorFormPage from "./pages/ActorForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/atores" element={<ActorPage />} />
          <Route path="/ator/novo" element={<ActorFormPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
