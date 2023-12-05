import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BreweryDetails from './components/BreweryDetails';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/brewery/:id" element={<BreweryDetails/>}/>
          <Route path="/brewery/:id/review" element={<ReviewForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
