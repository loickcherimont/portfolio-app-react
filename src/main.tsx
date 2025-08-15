import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Error from './components/Error.tsx'
import ProjectComponent from './components/ProjectComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/*' element={<Error />} />
        <Route path='/project/:id' element={<ProjectComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  ,
)
