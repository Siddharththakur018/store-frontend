import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './modules/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-page' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
