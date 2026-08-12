import Login from './pages/Login'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Forget from './pages/Forget'
import Register from './pages/Register'
import Home from './pages/Home'
import Faqs from './pages/Faqs'
import Price from './pages/Price'
import Sound from './pages/Sound'
import Help from './pages/Help'
import Submitrequest from './pages/Submitrequest'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/price' element={<Price />} />
          <Route path='/sound' element={<Sound />} />
          <Route path='/help' element={<Help />} />
          <Route path='/Submit' element={<Submitrequest />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
