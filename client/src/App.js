import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage/AboutPage';
import BrowsePage from './components/BrowsePage/BrowsePage';
import FormPage from './components/FormPage/FormPage';
import LandingPage from './components/LandingPage/LandingPage';
// import MainBhadaas from './components/LandingPage/MainBhadaas';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/form' element={<FormPage />} />
      <Route path='/top' element={<BrowsePage content='top' />} />
      <Route path='/new' element={<BrowsePage content='new' />} />
      <Route path='/random' element={<BrowsePage content='random' />} />
      <Route path='/liked' element={<BrowsePage content='liked' />} />
      
      {/* <Route path="/bhadaas" element={<MainBhadaas />} /> */}
    </Routes>
  );
}

export default App;
