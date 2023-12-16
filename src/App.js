import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Navbar from './navbars/navbar';

import Home from './pages/homes/home';
import About from './pages/abouts/about';
import Contact from './pages/contacts/contact';
import Write from './pages/writes/write';
import Logout from './pages/logouts/logout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write" element={<Write />} />
          <Route path="/logout" element={<Logout />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

