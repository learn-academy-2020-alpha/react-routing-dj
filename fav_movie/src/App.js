import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

import Home from "./components/Home1"
import BlueJasmine from "./components/BlueJasmine"
import CapeFear from "./components/CapeFear"
import Joker from "./components/Joker"
import PrideAndPrejudice from "./components/PrideAndPrejudice"
import Shrek2 from "./components/Shrek2"
import TheDarkKnight from "./components/TheDarkKnight"


const App = () => {
    return (
        <>
        <Router>
        {/* <Link to="/">Home</Link>
        <Route path="/" exact component = { Home } /> */}
                <h1>Here are Jonas' and Danny's favorite movies: </h1>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/bluejasmine"> Blue Jasmine </Link>
                    </li>
                </ul>

                <br/>
                <Switch>
                <Route path="/" exact component={ Home } />    
                <Route path="/bluejasmine/" component={ BlueJasmine } />
                </Switch>
        </Router>
        </>
    )
}
export default App

