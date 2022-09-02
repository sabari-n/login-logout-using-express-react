import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "./Register";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
          path="/"
          element={
            <PrivateRoute>
              Hi
            </PrivateRoute>
          }
        />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
