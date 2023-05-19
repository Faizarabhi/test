
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
