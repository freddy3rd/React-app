import { useState,useEffect } from 'react'

import './App.css'
import MainContent from './components/Main-content'
import { Route, Routes, useNavigate } from 'react-router'
import SuccessDisplay from './components/success-display'
import { AnimatePresence } from 'framer-motion'
function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("Manager@company.com")

  function useEmail(email){
    setEmail(email)     
  }


  return (
    <>
  <AnimatePresence>

     <Routes>
      <Route exact path='/' element={<MainContent value={useEmail}/>} />
      <Route path='/success' element={<SuccessDisplay val={useEmail}/>}/>
    </Routes>

  </AnimatePresence>
    </>
  )
}

export default App
