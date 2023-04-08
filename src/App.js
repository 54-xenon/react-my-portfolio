import './App.css';
import Header from './Header';
import Blogpage from './compornents/Blogpage';
import Homepage from './compornents/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/blog' element={<Blogpage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
