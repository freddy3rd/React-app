import { useState } from 'react'

import './App.css'
import MainContent from './components/Main-content'
import { Route, Routes } from 'react-router'
import SuccessDisplay from './components/success-display'
import { AnimatePresence } from 'framer-motion'
function App() {

  return (
    <>
  <AnimatePresence>

     <Routes>
      <Route path='/' element={<MainContent/>}>
        <Route path='/home' element={<MainContent/>}></Route>
        <Route path='/success-display' element={<SuccessDisplay/>}></Route>
      </Route>
    </Routes>

  </AnimatePresence>
    </>
  )
}

export default App
