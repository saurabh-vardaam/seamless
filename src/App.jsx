import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrimaryContainer from "./Components/PrimaryContainer";
import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/reports" element={<Reports />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
