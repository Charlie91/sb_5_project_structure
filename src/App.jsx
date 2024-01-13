import { useState } from 'react'
import './App.css'
import { ReservationPage } from './pages/Reservation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href='#'>Главная</a>
        <a href='#'>Контакты</a>
      </header>
      <main>
        <ReservationPage />
      </main>
      <footer>2024 ©</footer>
    </>
  )
}

export default App
