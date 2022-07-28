import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import Home from './Home';



function App() {
  return (
    <div>
<BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Courses" element={<Courses />}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;
