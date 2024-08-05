import Home from './pages/Home';
import ListHouse from './components/ListHouse/ListHouse';
import PropertyDetails from './pages/PropertyDetails';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Service/Service';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
