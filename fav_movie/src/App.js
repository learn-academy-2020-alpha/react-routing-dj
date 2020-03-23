import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import Home from "./components/Home1"


const App = () => {
    return (
      {/* 3. The set of links and paths are all wrapped in the "BrowserRouter as Router" component */}
        <Router>
            <div>
                <h1>Here is App.js Handling Our Routing</h1>
                {/* 4. Using a semantic tag to denote the navigation links */}
                <nav>
                    <ul>
                    <li>
                        {/* 5. Creating the anchor tags using the Link component from React Router */}
                        <Link to="/">Home</Link>
                    </li>
                    </ul>
                </nav>

                {/* 6. Calling the components we imported from "pages" to render in response to the Link */}
                <Route path="/" exact component={ Home } />
            </div>
        </Router>
    )
}
export default App

export default App;
