import { useState } from "react";
import { Menu, X, Box, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Box className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Storyfreak</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('components')}
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="nav-components"
            >
              Components
            </button>
            <button 
              onClick={() => scrollToSection('documentation')}
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="nav-documentation"
            >
              Documentation
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className="text-muted-foreground hover:text-primary transition-colors duration-150"
              data-testid="nav-examples"
            >
              Examples
            </button>
            <ThemeToggle className="mr-2" />
            <button 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-150 flex items-center gap-2"
              data-testid="button-github"
            >
              <Github size={16} />
              View on GitHub
            </button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('components')}
                className="text-muted-foreground hover:text-primary transition-colors duration-150 text-left"
                data-testid="mobile-nav-components"
              >
                Components
              </button>
              <button 
                onClick={() => scrollToSection('documentation')}
                className="text-muted-foreground hover:text-primary transition-colors duration-150 text-left"
                data-testid="mobile-nav-documentation"
              >
                Documentation
              </button>
              <button 
                onClick={() => scrollToSection('examples')}
                className="text-muted-foreground hover:text-primary transition-colors duration-150 text-left"
                data-testid="mobile-nav-examples"
              >
                Examples
              </button>
              <button 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-150 flex items-center gap-2 w-fit"
                data-testid="mobile-button-github"
              >
                <Github size={16} />
                View on GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
