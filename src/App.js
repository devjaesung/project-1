import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import History from './History';



function App() {
  return (
    <>
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
    </>
  );
}

export default App;
