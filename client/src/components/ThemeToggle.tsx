import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        "h-9 w-9",
        className
      )}
      data-testid="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun 
        className={cn(
          "h-[1.2rem] w-[1.2rem] transition-all duration-200",
          theme === 'dark' ? "rotate-90 scale-0" : "rotate-0 scale-100"
        )}
      />
      <Moon 
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] transition-all duration-200",
          theme === 'dark' ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )}
      />
    </button>
  );
};

export default ThemeToggle;