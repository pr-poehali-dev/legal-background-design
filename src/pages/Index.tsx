import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: 'Briefcase',
      title: 'Корпоративное право',
      description: 'Сопровождение сделок M&A, корпоративное управление, реструктуризация бизнеса'
    },
    {
      icon: 'Scale',
      title: 'Арбитражные споры',
      description: 'Представительство в судах всех инстанций, защита интересов в сложных делах'
    },
    {
      icon: 'FileText',
      title: 'Договорное право',
      description: 'Разработка и экспертиза договоров, сопровождение сложных сделок'
    },
    {
      icon: 'Building',
      title: 'Недвижимость',
      description: 'Комплексное сопровождение сделок с коммерческой недвижимостью'
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Защита интересов работодателей, кадровый аудит, трудовые споры'
    },
    {
      icon: 'ShieldCheck',
      title: 'Налоговое право',
      description: 'Налоговое планирование, споры с налоговыми органами, структурирование'
    }
  ];

  const team = [
    {
      name: 'Александр Волков',
      position: 'Управляющий партнер',
      experience: '20+ лет практики',
      image: 'https://cdn.poehali.dev/projects/1c02141e-aa38-4301-97a3-4f1885e674e9/files/cfcae6e6-ae76-44bb-b340-22763b5f8a05.jpg'
    },
    {
      name: 'Елена Соколова',
      position: 'Партнер, арбитраж',
      experience: '15+ лет практики',
      image: 'https://cdn.poehali.dev/projects/1c02141e-aa38-4301-97a3-4f1885e674e9/files/e6001671-5900-428c-a8a8-86e919622fee.jpg'
    },
    {
      name: 'Дмитрий Орлов',
      position: 'Партнер, корпоративное право',
      experience: '18+ лет практики',
      image: 'https://cdn.poehali.dev/projects/1c02141e-aa38-4301-97a3-4f1885e674e9/files/56ba75a9-ecc3-4558-af34-a3c77da7dc51.jpg'
    }
  ];

  const practices = [
    { area: 'Банкротство', cases: '120+ дел' },
    { area: 'Интеллектуальная собственность', cases: '85+ дел' },
    { area: 'Антимонопольное право', cases: '60+ дел' },
    { area: 'Международные сделки', cases: '95+ дел' }
  ];

  const faqs = [
    {
      question: 'Как происходит первая консультация?',
      answer: 'Первая консультация проходит в нашем офисе или онлайн. Мы анализируем вашу ситуацию, определяем правовую позицию и предлагаем стратегию решения задачи. Консультация длится 1-1.5 часа.'
    },
    {
      question: 'Какова стоимость услуг?',
      answer: 'Стоимость формируется индивидуально в зависимости от сложности задачи, объема работы и срочности. Мы предлагаем почасовую оплату или фиксированную стоимость проекта. Точную оценку даем после первичной консультации.'
    },
    {
      question: 'Сколько времени занимает решение спора?',
      answer: 'Сроки зависят от специфики дела и судебной инстанции. Арбитражные дела первой инстанции рассматриваются в среднем 3-6 месяцев. Мы информируем клиентов о реалистичных сроках на этапе консультации.'
    },
    {
      question: 'Работаете ли вы с регионами?',
      answer: 'Да, мы работаем с клиентами по всей России. Консультации проводим онлайн, представительство в региональных судах осуществляем через наших партнеров или выезжаем лично в зависимости от масштаба дела.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-charcoal to-navy">
      <nav className="fixed top-0 w-full bg-navy/95 backdrop-blur-sm border-b border-gold/20 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold text-gold">Pravus Legal</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-off-white hover:text-gold transition-colors">Главная</a>
            <a href="#services" className="text-off-white hover:text-gold transition-colors">Услуги</a>
            <a href="#team" className="text-off-white hover:text-gold transition-colors">Команда</a>
            <a href="#practice" className="text-off-white hover:text-gold transition-colors">Практика</a>
            <a href="#faq" className="text-off-white hover:text-gold transition-colors">FAQ</a>
            <a href="#contacts" className="text-off-white hover:text-gold transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
            Консультация
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-display font-bold text-off-white mb-6">
              Премиальные <span className="text-gold">юридические</span> решения
            </h2>
            <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Защита корпоративных интересов на высшем уровне. 20 лет экспертизы в сложных делах.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 px-8">
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Наши кейсы
              </Button>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-4xl font-display font-bold text-gold mb-2">500+</div>
              <div className="text-off-white/70">Выигранных дел</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-display font-bold text-gold mb-2">20</div>
              <div className="text-off-white/70">Лет на рынке</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-display font-bold text-gold mb-2">95%</div>
              <div className="text-off-white/70">Успешных дел</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-off-white/5">
        <div className="container mx-auto">
          <h2 className="text-5xl font-display font-bold text-center text-gold mb-4">Наши услуги</h2>
          <p className="text-center text-off-white/70 mb-12 max-w-2xl mx-auto">
            Комплексное юридическое сопровождение бизнеса с фокусом на результат
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-navy/50 border-gold/20 hover:border-gold/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-gold" size={24} />
                  </div>
                  <CardTitle className="text-off-white font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-off-white/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-display font-bold text-center text-gold mb-4">Наша команда</h2>
          <p className="text-center text-off-white/70 mb-12 max-w-2xl mx-auto">
            Опытные юристы с безупречной репутацией
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="bg-navy/50 border-gold/20 text-center overflow-hidden hover:border-gold/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-off-white font-display">{member.name}</CardTitle>
                  <CardDescription className="text-gold">{member.position}</CardDescription>
                  <p className="text-off-white/60 text-sm mt-2">{member.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 px-6 bg-off-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-display font-bold text-center text-gold mb-4">Практика</h2>
          <p className="text-center text-off-white/70 mb-12">
            Специализированные направления нашей работы
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <div 
                key={index}
                className="bg-navy/50 border border-gold/20 p-6 rounded-lg hover:border-gold/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-display font-semibold text-off-white mb-2">{practice.area}</h3>
                <p className="text-gold">{practice.cases}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-display font-bold text-center text-gold mb-4">Вопросы и ответы</h2>
          <p className="text-center text-off-white/70 mb-12">
            Ответы на частые вопросы наших клиентов
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-navy/50 border border-gold/20 rounded-lg px-6 data-[state=open]:border-gold/50"
              >
                <AccordionTrigger className="text-off-white font-display hover:text-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-off-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-off-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-display font-bold text-center text-gold mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-off-white/70 mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение часа
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-off-white font-display font-semibold mb-1">Адрес офиса</h3>
                  <p className="text-off-white/70">Москва, Кутузовский проспект, д. 12</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-off-white font-display font-semibold mb-1">Телефон</h3>
                  <p className="text-off-white/70">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-off-white font-display font-semibold mb-1">Email</h3>
                  <p className="text-off-white/70">info@pravuslegal.ru</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-navy/50 border-gold/20 text-off-white placeholder:text-off-white/40"
              />
              <Input 
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-navy/50 border-gold/20 text-off-white placeholder:text-off-white/40"
              />
              <Input 
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-navy/50 border-gold/20 text-off-white placeholder:text-off-white/40"
              />
              <Textarea 
                placeholder="Сообщение"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-navy/50 border-gold/20 text-off-white placeholder:text-off-white/40 min-h-32"
              />
              <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gold/20">
        <div className="container mx-auto text-center text-off-white/60">
          <p>© 2024 Pravus Legal. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;