import DashBoard from 'pages/DashBoard'
import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Rota = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rota