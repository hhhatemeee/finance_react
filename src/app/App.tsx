import { AppRoute } from './providers/RouterProvider'
import { ThemeProvider } from './providers/ThemeProvider'
import './styles/style.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoute />
      </ThemeProvider>
    </>
  )
}

export default App
