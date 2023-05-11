

import Fees from './pages/Fees'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Members from './pages/Members'

function App() {
  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="fees" element={<Fees />} />
      <Route path="members" element={<Members />} />
    </Routes>
    </>
  )
}

export default App
