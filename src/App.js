import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import TableView from './components/TableView';
import Todos from './components/RandomData';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mapview" element={<MapView />} />
      <Route path="/tableview" element={<TableView />} />
  
    </Routes>
  </BrowserRouter>
  // <Dataset />
  )
}

export default App;
