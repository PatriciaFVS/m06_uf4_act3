import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tasca.css';
import LlistatTasques from './llistattasques';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LlistatTasques />
    </div>
  )
}

export default App
