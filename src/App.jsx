import './App.css'
import NavBar from './component/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/home'
import PropertiesPage from './pages/PropertiesPage'
import Footer from './component/footer/Footer'
import Contactus2 from './component/contactus2/Contactus2'
import PropertyDetails from './Pages/PropertyDetails'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/Villa/" element={<Home/>} />
      <Route path="/Properties" element={<PropertiesPage/>} />
      <Route path="/ContactUs" element={<Contactus2/>} />
      <Route path="/BestDeal" element={<PropertyDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
