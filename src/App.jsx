import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import ProjectsGrid from "./components/ProjectsGrid";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <header>
          <Header />
          <WelcomeSection />
        </header>
        <div className="container">
          <ProjectsGrid />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
