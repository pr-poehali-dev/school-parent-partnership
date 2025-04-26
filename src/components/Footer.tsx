import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg">Школа и родители</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Проект, направленный на создание эффективной модели цифровой
              коммуникации между школой и родителями.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@school-parents.ru" className="hover:text-white/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {["Главная", "О проекте", "Регламент общения", "Каналы связи"].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                    className="hover:text-white/80 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <p className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+7 (123) 456-7890</span>
              </p>
              <p className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@school-parents.ru" className="hover:underline">
                  info@school-parents.ru
                </a>
              </p>
              <Link to="/feedback" className="inline-block mt-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md transition-colors">
                Обратная связь
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Школа и родители: цифровое партнёрство. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;