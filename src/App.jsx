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
import Settings from './pages/Settings'
import Billing from './pages/Billing'
import Plan from './pages/Plan'
import Noification from './pages/Noification'
import LandingPage from './pages/LandingPage'
import Instrument from './pages/Instrument'
import Cinematics from './pages/Cinematics'
import Genres from './pages/Genres'
import Label from './pages/Label'
import Present from './pages/Present'
import Midi from './pages/Midi'
import Subscrbe from './pages/Subscrbe'
import Charts from './pages/Charts'
import TopLabel from './pages/TopLabel'
import Sound2 from './pages/Sound-2'
import Subsound from './pages/Subsound'
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
          <Route path='/settings' element={<Settings />} />
          <Route path='/billings' element={<Billing />} />
          <Route path='/plans' element={< Plan />} />
          <Route path='/notifications' element={< Noification />} />
          <Route path='/landingPage' element={< LandingPage />} />
          <Route path='/instrument' element={< Instrument />} />
          <Route path='/cinematics' element={< Cinematics />} />
          <Route path='/genres' element={< Genres />} />
          <Route path='/label' element={< Label />} />
          <Route path='/present' element={< Present />} />
          <Route path='/Midi' element={< Midi />} />
          <Route path='/subscribe' element={< Subscrbe />} />
          <Route path='/Charts' element={< Charts />} />
          <Route path='/top labels' element={< TopLabel />} />
          <Route path='/Sound2' element={< Sound2 />} />
          <Route path='/subsound' element={< Subsound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
