import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const RequestPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contactMethod: '',
    vin: '',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Формируем красивое письмо
      const emailBody = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 28px; }
              .header .brand { color: #dc2626; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; }
              .field-label { font-weight: bold; color: #dc2626; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; }
              .field-value { color: #333; font-size: 16px; }
              .question-field { background: white; padding: 20px; border-radius: 8px; border: 2px solid #dc2626; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>FAV<span class="brand">MOTORS</span></h1>
                <p style="margin: 10px 0 0 0;">Новый запрос от клиента</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Имя клиента</div>
                  <div class="field-value">${formData.name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Способ связи</div>
                  <div class="field-value">${formData.contactMethod}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">VIN номер</div>
                  <div class="field-value">${formData.vin || 'Не указан'}</div>
                </div>
                
                <div class="question-field">
                  <div class="field-label" style="margin-bottom: 10px;">Вопрос / Запрос</div>
                  <div class="field-value" style="white-space: pre-wrap;">${formData.question}</div>
                </div>
                
                <div class="footer">
                  <p>Получено через форму запроса на сайте FAVMOTORS</p>
                  <p>${new Date().toLocaleString('pl-PL')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      // Отправка письма (здесь используется mailto, для реальной отправки нужен backend)
      const subject = encodeURIComponent(`Новый запрос от ${formData.name}`);
      const body = encodeURIComponent(
        `Имя: ${formData.name}\n\nСпособ связи: ${formData.contactMethod}\n\nVIN: ${formData.vin || 'Не указан'}\n\nВопрос:\n${formData.question}`
      );
      
      // Открываем почтовый клиент
      window.location.href = `mailto:admin@favmotors.com?subject=${subject}&body=${body}`;

      toast({
        title: 'Запрос отправлен!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });

      // Очищаем форму
      setFormData({
        name: '',
        contactMethod: '',
        vin: '',
        question: '',
      });
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить запрос. Попробуйте позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 gradient-metallic min-h-screen">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Назад на главную</span>
            </Link>

            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Выслать <span className="text-primary">запрос</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-12">
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
              </p>

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-elegant">
                <div className="space-y-6">
                  {/* Имя */}
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      className="mt-2"
                    />
                  </div>

                  {/* Способ связи */}
                  <div>
                    <Label htmlFor="contactMethod">Способ связи *</Label>
                    <Input
                      id="contactMethod"
                      type="text"
                      required
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      placeholder="Телефон, email, никнейм в Facebook или Instagram"
                      className="mt-2"
                    />
                    <p className="text-sm text-foreground/60 mt-1">
                      Укажите удобный для вас способ связи
                    </p>
                  </div>

                  {/* VIN */}
                  <div>
                    <Label htmlFor="vin">VIN номер</Label>
                    <Input
                      id="vin"
                      type="text"
                      value={formData.vin}
                      onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                      placeholder="Введите VIN автомобиля (если известен)"
                      className="mt-2"
                    />
                    <p className="text-sm text-foreground/60 mt-1">
                      VIN поможет нам точнее подобрать нужные запчасти
                    </p>
                  </div>

                  {/* Вопрос */}
                  <div>
                    <Label htmlFor="question">Ваш вопрос / запрос *</Label>
                    <Textarea
                      id="question"
                      required
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Здесь вы можете указать перечень интересующих вас запчастей, производителей, ценовую категорию или любые другие вопросы"
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-red text-white font-semibold py-6 text-lg shadow-glow hover:scale-105 transition-smooth"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default RequestPage;
