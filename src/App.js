import logo from './logo.svg';
import './App.css';
import Addrecipie from './components/Addrecipie';
import Searchrecipie from './components/Searchrecipie';
import Navbar from './components/Navbar';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div>
 <BrowserRouter>
     <Routes>
     <Route path='/add' element={<Addrecipie/>}/>
     <Route path='/search' element={<Searchrecipie/>}/>
     <Route path='/view' element={<Viewall/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}
export default App;
