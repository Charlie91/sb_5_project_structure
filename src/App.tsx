import { useState } from 'react'
import './App.css'
import { RouterContext } from "./contexts";
import { ROUTES } from "./Routes";
import { BaseLayout } from './ui/BaseLayout/BaseLayout';

function App() {
  const [currentRoute, setCurrentRoute] = useState(ROUTES[0]?.id);

  return (
    <RouterContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <BaseLayout />
    </RouterContext.Provider>
  )
}

export default App
