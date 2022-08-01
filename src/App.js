import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import AddKnowledge from "./containers/AddKnowledge/AddKnowledge";
import Application from "./containers/Application/Application";
import Search from "./containers/Search/Search";
import HowTo from "./containers/HowTo/HowTo";
import Other from "./containers/Other/Other";
import UpdateKnowledge from "./containers/UpdateKnowledge/UpdateKnowledge";

function App() {
  useEffect(() => {
    document.title = "KMManagement";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/knowledge" element={<HowTo />} />
            <Route exact path="/application" element={<Application />} />
            <Route exact path="/addknowledge" element={<AddKnowledge />} />
            <Route exact path="/updateknowledge/:id" element={<UpdateKnowledge />} />
            <Route exact path="/search" element={<Search />} />
            {/* <Route exact path="/howto" element={<HowTo />} /> */}
            <Route exact path="/other" element={<Other />} />
            {/* <Route
              exact
              path="/knowledge/addknowledge"
              element={<AddKnowledge />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
