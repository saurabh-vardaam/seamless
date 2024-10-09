import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Organization from "./Pages/Organization";
import Financials from "./Pages/Financials";
import Chapters from "./Pages/Chapters";
import Committees from "./Pages/Committees";
import Education from "./Pages/Education";
import Reports from "./Pages/Reports";
import Settigns from "./Pages/Settigns";
import Documents from "./Pages/Documents";
import EventDetails from "./Pages/Events/Partials/EventDetails";
import MemberDetails from "./Pages/Membership/Partials/MemberDetails";
import Login from "./Pages/Login";
import Events from "./Pages/Events/Events";
import Membership from "./Pages/Membership/Membership";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/member-details" element={<MemberDetails />} />
        <Route path="/financials" element={<Dashboard />} />
        <Route path="/chapters" element={<Dashboard />} />
        <Route path="/committees" element={<Dashboard />} />
        <Route path="/education" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/document" element={<Dashboard />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
