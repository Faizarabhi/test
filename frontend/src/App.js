
import Home from './pages/Home';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
