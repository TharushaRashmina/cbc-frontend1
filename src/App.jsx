import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import LoginPage from './pages/home/LoginPage';
//import AdminProductsPage from './pages/admin/AdminProductsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <BrowserRouter>
      <Toaster position="top-right"/>
      <Routes path="/*">
      <Route path="/login" element={<LoginPage/>}/>
      {/*<Route path="/admin/*" element={<AdminProductsPage/>}/>*/}
      
      
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
