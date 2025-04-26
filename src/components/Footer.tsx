import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Школа и родители</h3>
            <p className="text-gray-600 mb-4">
              Проект направлен на улучшение коммуникации между участниками образовательного процесса.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Главная</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">О проекте</Link></li>
              <li><Link to="/regulations" className="text-gray-600 hover:text-primary">Регламент общения</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">Вопросы и ответы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <p className="text-gray-600 mb-2">Email: support@school-parents.ru</p>
            <p className="text-gray-600 mb-4">Телефон: +7 (XXX) XXX-XX-XX</p>
            <Link to="/feedback" className="text-primary hover:underline">
              Форма обратной связи
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Школа и родители: цифровое партнёрство. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
