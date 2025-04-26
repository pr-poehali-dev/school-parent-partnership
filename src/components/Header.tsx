import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const NavItems = [
  { 
    title: "Главная", 
    href: "/" 
  },
  { 
    title: "О проекте", 
    href: "/about"
  },
  { 
    title: "Регламент общения", 
    href: "/regulations"
  },
  { 
    title: "Каналы связи", 
    href: "/channels"
  },
  { 
    title: "Цифровой этикет", 
    href: "/etiquette" 
  },
  { 
    title: "Вопросы и ответы", 
    href: "/faq"
  },
  { 
    title: "Обратная связь", 
    href: "/feedback"
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200 border-b",
      isScrolled ? "bg-white shadow-sm py-2" : "bg-[#f8fafc] py-4"
    )}>
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-primary font-bold text-lg md:text-xl mb-2 md:mb-0">
          Школа и родители: цифровое партнёрство
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-1">
            {NavItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-primary text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 absolute right-4 top-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container py-4">
            <nav className="flex flex-col space-y-1">
              {NavItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link 
                    key={item.title}
                    to={item.href}
                    className={cn(
                      "py-2 px-4 rounded-md",
                      isActive 
                        ? "bg-primary text-white" 
                        : "hover:bg-gray-100"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
