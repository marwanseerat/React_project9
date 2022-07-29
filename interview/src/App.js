import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Courses from './component/Courses/Courses'
import Home from './component/Home/Home';
import Post from './Post';



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
        <Route path="/post" element={<Post />}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;
