import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./view/Main"
import "./App.css"

function App() {
    return (
        <Router>
            <Route exact path="/jumorap/" component={Main} />
        </Router>
    )
}

export default App;
