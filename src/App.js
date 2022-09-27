import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dataset from './components/Dataset';
import TableView from './components/TableView';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dataset" element={<Dataset />} />
      <Route path="/tableview" element={<TableView />} />
  
    </Routes>
  </BrowserRouter>
  )
}

export default App;
