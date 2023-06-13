import {  Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Contact from './Contact';

function App() {
  
  return (
     <div className="App">
        <Navbar/>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
