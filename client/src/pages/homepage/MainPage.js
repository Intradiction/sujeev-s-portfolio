import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./MainPage.css";
import MainSection from "../../sections/main/MainSection";
import AboutSection from "../../sections/about/AboutSection";
import ProjectSection from "../../sections/projects/ProjectSection";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainSection />
        <AboutSection />
        <ProjectSection />
      </div>
    );
  }
}
