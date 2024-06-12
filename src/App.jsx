import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApplicationViews } from './views/ApplicationViews.jsx'

export const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<> TO DO </>}/>
      <Route path="/register" element={<> TO DO </>}/>
  
      <Route 
        path="*" 
        element={
            <ApplicationViews />
        } 
      />
    </Routes>
    )
  }
