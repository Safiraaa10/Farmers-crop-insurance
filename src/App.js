
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/" element={<Login />}/>
    <Route path="/About" element={<About />}/>
    {/* <Route path="/ContactUs" element={<ContactUs />}/> */}
   
    
     </Routes>
  </BrowserRouter>
  
  );
}

export default App;
