import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Bookmark, HelpCircle, Home, Info, Mail, MessageSquare, Users } from "lucide-react";
import { useState, useEffect } from "react";

const NavItems = [
  { 
    title: "Главная", 
    href: "/", 
    icon: <Home className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "О проекте", 
    href: "/about", 
    icon: <Info className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "Регламент общения", 
    href: "/regulations", 
    icon: <Bookmark className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "Каналы связи", 
    href: "/channels", 
    icon: <MessageSquare className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "Цифровой этикет", 
    href: "/etiquette", 
    icon: <Users className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "Вопросы и ответы", 
    href: "/faq", 
    icon: <HelpCircle className="h-4 w-4 mr-1" /> 
  },
  { 
    title: "Обратная связь", 
    href: "/feedback", 
    icon: <Mail className="h-4 w-4 mr-1" /> 
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-full">
            <Users className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-primary">Школа и родители</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {NavItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {/* Исправлено: используем NavigationMenuLink напрямую вместо Link обёрнутого вокруг NavigationMenuLink */}
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link to={item.href}>
                      <div className="flex items-center">
                        {item.icon}
                        {item.title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
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
            <nav className="flex flex-col space-y-3">
              {NavItems.map((item) => (
                <Link 
                  key={item.title}
                  to={item.href}
                  className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;