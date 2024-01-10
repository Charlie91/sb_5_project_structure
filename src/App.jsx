import { useState } from 'react'
import './App.css'
import { Reservation } from './pages/Reservation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href='#'>Главная</a>
        <a href='#'>Контакты</a>
      </header>
      <main>
        <Reservation />
      </main>
      <footer>2024 ©</footer>
    </>
  )
}

export default App
