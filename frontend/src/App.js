import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, {  useEffect } from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import History from "./components/History";
import Feedback from "./components/Feedback";

import "react-toastify/dist/ReactToastify.css";

import { keepTheme } from './themes';

function App() {
  useEffect(() => {
    keepTheme();
})
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/feedback" component={Feedback}></Route>
            <Route path="/history" component={History}/>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
