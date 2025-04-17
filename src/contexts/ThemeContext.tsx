import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Wczytanie motywu z localStorage przy starcie
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    }
  }, []);

  // Ustawianie atrybutu na <html> i zapis do localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // const [theme, setTheme] = useState<Theme>(() => {
  //   if (typeof window !== 'undefined') {
  //     const saved = localStorage.getItem('theme');
  //     if (saved === 'dark' || saved === 'light') {
  //       return saved;
  //     }
  //   }
  //   return 'light';
  // });

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   const html = document.documentElement;
  //   if (theme === 'dark') {
  //     html.classList.add('dark');
  //   } else {
  //     html.classList.remove('dark');
  //   }
  // }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
