
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Project';
import Contact from './Pages/Contact';
import Technologies from './Pages/Technologies';
import Shared from './Pages/Shared';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Shared/>}  >
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="project" element={<Projects/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="technology" element={<Technologies/>} />
    <Route path="*" element={<div>Error 404</div>} />
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
