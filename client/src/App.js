import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { AddTask } from './Components/AddTask';
import { ViewTask } from './Components/ViewTask';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <nav>
       <span>
        <Link to='/home'>Home </Link>
        </span>
        <Link to='/about'> About</Link>
        <Link to='/addtask'> AddTask</Link>
        <Link to='/viewtask'> ViewTask</Link>

      
     </nav>
     <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/addtask' element={<AddTask />} />
      <Route path='/viewtask' element={<ViewTask />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
