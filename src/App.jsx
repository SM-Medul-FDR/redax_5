import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import M_comp_5 from './comps/M_comp_5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <M_comp_5/>
    </>
  )
}

export default App
