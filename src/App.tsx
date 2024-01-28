import { useState } from 'react'
import './App.css'
import { RouterContext } from "./contexts";
import { ROUTES } from "./Routes";
import { BaseLayout } from './ui/BaseLayout/BaseLayout';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [currentRoute, setCurrentRoute] = useState(ROUTES[0]?.id);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterContext.Provider value={{ currentRoute, setCurrentRoute }}>
        <BaseLayout />
      </RouterContext.Provider>
    </QueryClientProvider>
  )
}

export default App
