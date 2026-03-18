import { useTheme } from '@/context/ThemeContext';
import { useUsers } from '@/context/UserContext';
import { SunMoon } from 'lucide-react';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { users} = useUsers();
  const currentUserName = users[0]?.name ?? 'Guest';
  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#1a1a1a', 
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <p className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Welcome</p>      
      <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Mode: {theme}</p>
      <button 
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-md ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'}`}
      >
       <SunMoon /> {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <button
         //onClick={() => handleLogin(users[0])}  ← add real logic later
          className={`
            px-5 py-2.5 rounded-lg font-medium transition-colors
            ${theme === 'light'
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-green-700 text-white hover:bg-green-600'}
          `}
        >
          Log in as <span className="font-semibold">{currentUserName}</span>
        </button>    
      </div>
  );
}