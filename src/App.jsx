import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <a className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-8 px-4 text-sm inline-flex items-center justify-center">Small</a>
    </div>
  )
}

export default App
