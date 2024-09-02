import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import PropertiesPage from './pages/PropertiesPage'
import Footer from './components/footer/Footer'
import Contactus2 from './components/contactus2/Contactus2'
import PropertyDetails from './Pages/PropertyDetails'
import ScrollButton from './components/ScrollButton/ScrollButton'

function App() {
  return (
    <>
    <NavBar id="navbar"/>
    <Routes>
    <Route path="/Villa/" element={<Home/>} />
      <Route path="/Properties" element={<PropertiesPage/>} />
      <Route path="/ContactUs" element={<Contactus2/>} />
      <Route path="/BestDeal" element={<PropertyDetails/>} />
    </Routes>
    <ScrollButton/>
    <Footer/>
    </>
  )
}

export default App
