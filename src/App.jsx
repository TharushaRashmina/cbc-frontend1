import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 
import LoginPage from './pages/home/loginPage';
import FileUploadTest from './pages/home/test';
import AdminProductsPage from './pages/admin/adminProductPage';
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
      <Route path="/admin/*" element={<AdminProductsPage/>}/>
      <Route path="/testing" element={<FileUploadTest/>}/>
      
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
