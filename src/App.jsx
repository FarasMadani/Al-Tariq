import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
 // Ensure this path is correct
import Home from './Components/Home/Home';   // Ensure this path is correct

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Route for Home */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;