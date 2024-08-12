import { Welcome } from '../../pages/welcome'
import { ThemeProvider } from './ThemeProvider'

function App() {
  return (
    <>
      <ThemeProvider>
        <Welcome />
      </ThemeProvider>
    </>
  )
}

export default App
