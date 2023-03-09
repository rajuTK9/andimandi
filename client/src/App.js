import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;
