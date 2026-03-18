import { createContext, useState, useContext,type ReactNode } from 'react';

// Define what the data inside the context looks like
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void; //sync
}

// 1. Create the Context with a default value of null
const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Create the Provider
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook with a built-in safety check
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};






