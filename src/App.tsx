
import { ThemeProvider } from '@/context/ThemeContext';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Home />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
