import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "./Register";
import { Home } from "./Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={
            <PrivateRoute>
             <Home/>
            </PrivateRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
