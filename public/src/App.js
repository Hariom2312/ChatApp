import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/setAvatar" element={<SetAvatar />} />
        <Route exact path="/" element={<Chat />} />
        <Route path="*" element={<ErrorPage />}  />
      </Routes>
    </BrowserRouter>
  );
}
