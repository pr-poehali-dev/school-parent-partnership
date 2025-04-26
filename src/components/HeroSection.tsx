import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-edu-light to-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Эффективная и уважительная онлайн-коммуникация: вместе для будущего детей
            </h1>
            
            <p className="text-lg text-gray-700">
              Добро пожаловать на платформу, созданную для улучшения цифрового взаимодействия между школой и родителями. 
              Мы стремимся помочь учителям и родителям выстроить продуктивную коммуникацию, которая способствует успеху учащихся.
            </p>
            
            <p className="text-lg text-gray-700">
              Наш портал предоставляет регламенты, рекомендации и инструменты для комфортного и эффективного общения в цифровой среде.
            </p>
            
            <div className="pt-4">
              <Link to="/regulations" className="btn-primary inline-flex items-center">
                Перейти к памятке
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Взаимодействие педагог-родитель-ребёнок" 
              className="rounded-xl shadow-lg object-cover w-full max-h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[240px] hidden md:block">
              <p className="text-sm font-medium text-primary">
                "Эффективное общение — ключ к успеху наших детей в образовании"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;