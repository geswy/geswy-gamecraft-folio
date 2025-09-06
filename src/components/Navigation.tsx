import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Newspaper, Radio, Calendar, Menu, X, Gamepad2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import geswykLogo from '@/assets/geswy-logo.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'News', icon: Newspaper, href: '/news' },
    { name: 'Streams', icon: Radio, href: '/streams' },
    { name: 'Events', icon: Calendar, href: '/events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={geswykLogo} 
              alt="Geswy" 
              className="h-10 w-10 rounded-lg group-hover:shadow-glow transition-all duration-300"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GESWY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`relative group transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-glow' 
                        : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Right side - Gaming badge */}
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="outline" className="border-primary/50 text-primary animate-glow">
              <Gamepad2 className="h-3 w-3 mr-1" />
              Gaming Portfolio
            </Badge>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg animate-fade-in">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border/50">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  <Gamepad2 className="h-3 w-3 mr-1" />
                  Gaming Portfolio
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;