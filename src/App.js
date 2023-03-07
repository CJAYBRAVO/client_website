import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Hero from './components/Hero'
import Shortquotes from './components/Shortquotes'
import Billing from './components/Billing'
import Voicing from './components/Voicing'
import Reviews from './components/Reviews'
import Service from './components/Service'
import Footer from './components/Footer'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Faq from './Pages/Faq'
import Whyus from './Pages/Whyus'
import Ouratm from './Pages/Ouratm'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/faq' element={<Faq />}></Route>
        <Route exact path='/whyus' element={<Whyus />}></Route>
        <Route exact path='/ouratm' element={<Ouratm />}></Route>
      </Routes>
     <Footer />
     <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </BrowserRouter>
     
    </div>
  )
}

export default App