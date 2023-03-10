import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import BrowsePage from './components/BrowsePage/BrowsePage';
import FormPage from './components/FormPage/FormPage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/browse' element={<BrowsePage />} />
    </Routes>
  );
}

export default App;
