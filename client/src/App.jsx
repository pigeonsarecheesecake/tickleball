import { useEffect, useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import tickleballLogo from '../public/tickleball.png'
import IndexPage from './pages/IndexPage'

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  )
}

export default App
