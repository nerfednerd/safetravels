import Navbar from '../src/components/Navbar.jsx'
import Home from '../src/pages/Home.jsx'
import Footer from '../src/components/Footer.jsx';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PlanTrip from './pages/PlanTrip.jsx';
import Services from './pages/Services.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<About/>}></Route>
      <Route path='/contactus' element={<Contact/>}></Route>
      <Route path='/plannow' element={<PlanTrip/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
