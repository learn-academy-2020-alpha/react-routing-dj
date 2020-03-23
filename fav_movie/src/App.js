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
import NotFound from "./components/NotFound"


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
                    <li>
                    <Link to="/capefear"> Cape Fear </Link>
                    </li>
                    <li>
                    <Link to="/joker"> Joker </Link>
                    </li>
                    <li>
                    <Link to="/prideAndprejudice"> Pride and Prejudice </Link>
                    </li>
                    <li>
                    <Link to="/shrek2"> Shrek 2 </Link>
                    </li>
                    <li>
                    <Link to="/thedarkknight"> The Dark Knight </Link>
                    </li>

                </ul>

                <br/>
                <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/bluejasmine/" component={ BlueJasmine } />
                <Route path="/capefear/" component={ CapeFear } />
                <Route path="/joker/" component={ Joker } />
                <Route path="/prideandprejudice/" component={ PrideAndPrejudice } />
                <Route path="/shrek2/" component={ Shrek2 } />
                <Route path="/thedarkknight/" component={ TheDarkKnight } />
                <Route component = {NotFound} />
                </Switch>
        </Router>
        </>
    )
}
export default App
