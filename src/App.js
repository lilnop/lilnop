import React from 'react';
import './App.css';
import Header from "./website/Header";
import PortContainer from "./website/PortContainer";
import About from "./website/About";
import Footer from "./website/Footer";
import Skills from "./website/Skills";
import Modals from "./website/Modals";
import Contact from "./website/Contact";
import Goto from "./website/Goto";

function App() {
  return (
    <div className="wrapper container-fluid">
      <Header />
      <PortContainer />
      <Goto />
      <Skills />
      <About />      
      
      <Contact /> 
      <Footer />     
      <Modals />
    </div>
  );
}

export default App;
