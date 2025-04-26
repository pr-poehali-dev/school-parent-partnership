import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Shield, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Что даёт наш проект</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#f8fafc] p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Упрощает взаимодействие</h3>
                  <p className="text-gray-600">Понятные правила и регламенты помогают наладить эффективную коммуникацию между школой и родителями.</p>
                </div>
              </div>
              
              <div className="bg-[#f8fafc] p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Устраняет перегрузку</h3>
                  <p className="text-gray-600">Чёткие инструкции по каналам связи помогают избежать информационного шума и избыточных сообщений.</p>
                </div>
              </div>
              
              <div className="bg-[#f8fafc] p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Повышает вовлечённость</h3>
                  <p className="text-gray-600">Помогает родителям быть в курсе учебного процесса и принимать активное участие в образовании детей.</p>
                </div>
              </div>
              
              <div className="bg-[#f8fafc] p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Улучшает сопровождение</h3>
                  <p className="text-gray-600">Структурированная коммуникация позволяет предоставлять более качественную поддержку учащимся.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Готовы начать эффективное цифровое взаимодействие?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Изучите наши материалы и рекомендации, чтобы сделать общение между школой и родителями максимально продуктивным.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="btn-primary">Узнать больше о проекте</Link>
              <Link to="/regulations" className="btn-secondary">Перейти к регламенту</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
