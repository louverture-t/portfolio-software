import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/button';

// Theme toggle component with animated sun/moon icons
export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative h-10 w-10 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {/* Sun icon for light mode */}
      <Sun
        className={`absolute h-5 w-5 transition-all ${
          isDark
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      />

      {/* Moon icon for dark mode */}
      <Moon
        className={`absolute h-5 w-5 transition-all ${
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
    </Button>
  );
}
