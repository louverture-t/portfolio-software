import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Custom hook to access theme context
export function useTheme() {
  const context = useContext(ThemeContext);

  // Error handling: Ensure hook is used within ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
