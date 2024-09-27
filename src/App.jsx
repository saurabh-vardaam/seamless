import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Organization from "./Pages/Organization";
import Membership from "./Pages/Membership";
import Financials from "./Pages/Financials";
import Chapters from "./Pages/Chapters";
import Committees from "./Pages/Committees";
import Education from "./Pages/Education";
import Events from "./Pages/Events";
import Reports from "./Pages/Reports";
import Settigns from "./Pages/Settigns";
import Documents from "./Pages/Documents";
import EventDetails from "./Pages/EventDetails";
import MemberDetails from "./Pages/MemberDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/organization" element={<Organization />} />
        <Route path= "/membership" element={<Membership />} />
        <Route path="/member-details" element={<MemberDetails />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/education" element={<Education />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/document" element={<Documents />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settigns" element={<Settigns />} />
      </Routes>
    </Router>
  );
}

export default App;
