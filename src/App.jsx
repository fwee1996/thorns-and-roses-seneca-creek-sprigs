import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NurseryList } from './components/nurseries/NurseryList';
import { AddNursery } from './components/nurseries/AddNursery';
import { EditNursery } from './components/nurseries/EditNursery';
import { NurseryDetails } from './components/nurseries/NurseryDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Thorns and Roses</h1>
     <p>For all of your flower needs</p>
     <Router>
     <Routes>
        <Route path="/nurseries" element={<NurseryList />} />
        <Route path="/nurseries/addNursery" element={<AddNursery />} />
        <Route path="/nurseries/editNursery/:id" element={<EditNursery />} />
        <Route path="/nurseries/nurseryDetails/:id" element={<NurseryDetails />} />
        </Routes>
        </Router>
    </>
  )
}

export default App
