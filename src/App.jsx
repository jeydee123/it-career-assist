\import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import WelcomePage from "./components/pages/WelcomePage"
import QuestionPage from "./components/pages/QuestionPage"
import SoftwareDevPage from "./components/pages/SoftwareDevPage"
import NetworkingPage from "./components/pages/NetworkingPage"
import CyberSecurityPage from "./components/pages/CyberSecurityPage"
import CloudComputePage from "./components/pages/CloudComputePage"
import BeginnersGuidePage from "./components/pages/BeginnersGuidePage"
import React, { useLayoutEffect } from 'react'
import { AppContextProvider } from './context/Context'

function App() {
  useLayoutEffect(() => {
    //setting the background of the entire site to black
    document.body.style.backgroundColor = "black"
});
  return (
    // wrapping the context API around all the roots as a parent of all the other routes, so that all other routes can access the user's "name"
    <AppContextProvider>
    <div>
      <Router>
          <Routes>
            {/* listing all the routes within the site, which will be later navigated to */}
            <Route path="/" element = {<WelcomePage />} />
            <Route path="/questions" element= {<QuestionPage />} />
            <Route path="/cyberSecurity" element= {<CyberSecurityPage />} />
            <Route path="/networking" element= {<NetworkingPage />} />
            <Route path="/softwareDevelopment" element={<SoftwareDevPage />} />
            <Route path="/cloudComputing" element={<CloudComputePage />} />
            <Route path="/beginnerGuide" element={<BeginnersGuidePage />} />
            
          </Routes>
      </Router>
    </div>
    </AppContextProvider>
  );
  
}

export default App;
