import './App.css';
import Categories from './pages/categories';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
