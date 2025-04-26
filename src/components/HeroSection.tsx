import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
            </h1>
            
            <p className="text-gray-700">
              Наш проект создан для улучшения цифрового взаимодействия между школой
              и родителями, обеспечивая комфортное и продуктивное общение всех
              участников образовательного процесса.
            </p>
            
            <p className="text-gray-700">
              Здесь вы найдете регламенты и рекомендации, которые помогут сделать
              онлайн-коммуникацию более эффективной и уважительной.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Link to="/regulations" className="btn-primary text-center">
                Перейти к памятке
              </Link>
              
              <Link to="/channels" className="btn-secondary text-center">
                Инструкции по входу в электронный дневник
              </Link>
              
              <Link to="/feedback" className="btn-secondary text-center">
                Задать вопрос педагогу
              </Link>
              
              <Link to="/feedback" className="btn-secondary text-center">
                Оценить взаимодействие
              </Link>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <img 
              src="https://cdn.poehali.dev/files/f95acc50-501a-45b8-b27b-9226e7f2bda1.png" 
              alt="Взаимодействие педагог-родитель-ребёнок" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
