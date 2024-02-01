import { useState } from 'react'
import './App.css'
import { RouterContext } from "./contexts";
import { ROUTES } from "./Routes";
import { BaseLayout } from './ui/BaseLayout/BaseLayout';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  const [currentRoute = '', setCurrentRoute] = useState(
    ROUTES.find(route => location.pathname.includes(route.path))?.id,
  );

  return (
    <RouterContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <QueryClientProvider client={queryClient}>
          <BaseLayout />
      </QueryClientProvider>
    </RouterContext.Provider>
  )
}

export default App
