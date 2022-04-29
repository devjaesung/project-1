import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Models from './Models';



function App() {
  return (
    <>
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path='/models' element={<Models />} />
    </Routes>
    </>
  );
}

export default App;
