import QuickNavCard from "./QuickNavCard";
import { Book, MessageCircle, BarChart3, HelpCircle } from "lucide-react";

const QuickNavSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Быстрая навигация</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickNavCard
            title="Памятка по общению"
            description="Правила и рекомендации для эффективного онлайн-взаимодействия"
            icon={Book}
            href="/regulations"
          />
          
          <QuickNavCard
            title="Электронный дневник"
            description="Инструкции по входу и использованию электронного дневника"
            icon={BarChart3}
            href="/channels"
          />
          
          <QuickNavCard
            title="Задать вопрос"
            description="Форма для обращения к педагогам по учебным вопросам"
            icon={MessageCircle}
            href="/feedback"
          />
          
          <QuickNavCard
            title="Оценить взаимодействие"
            description="Поделитесь своим мнением о качестве коммуникации"
            icon={HelpCircle}
            href="/feedback"
          />
        </div>
      </div>
    </section>
  );
};

export default QuickNavSection;