import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setcolour] = useState('olive')

  return (
    <div
      className="w-screen h-screen duration-500"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => setcolour('red')}
          >
            RED
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => setcolour('green')}
          >
            GREEN
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
            style={{ backgroundColor: '#4f46e5' }}
            onClick={() => setcolour('#4f46e5')}
          >
            INDIGO
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
            style={{ backgroundColor: '#14b8a6' }}
            onClick={() => setcolour('#14b8a6')}
          >
            TEAL
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-white"
            style={{ backgroundColor: '#fbbf24' }}
            onClick={() => setcolour('#fbbf24')}
          >
            AMBER
          </button>
        </div>
      </div>
    </div>
  )
}

export default App