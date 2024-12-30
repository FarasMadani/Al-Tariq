import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Quran from "./Components/Home/Components/Menu/Quran"
import Adhkar from "./Components/Home/Components/Menu/Adhkar"
import Books from './Components/Home/Components/Menu/Books'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Route for Home */}
                    <Route path="/quran" element={<Quran />}/>
                    <Route path='/adhkar' element={<Adhkar />}/>
                    <Route path='/books' element={<Books />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;