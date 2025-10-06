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
                <p style="margin: 10px 0 0 0;">Nowe zapytanie od klienta</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Imię klienta</div>
                  <div class="field-value">${formData.name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Sposób kontaktu</div>
                  <div class="field-value">${formData.contactMethod}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Numer VIN</div>
                  <div class="field-value">${formData.vin || 'Nie podano'}</div>
                </div>
                
                <div class="question-field">
                  <div class="field-label" style="margin-bottom: 10px;">Pytanie / Zapytanie</div>
                  <div class="field-value" style="white-space: pre-wrap;">${formData.question}</div>
                </div>
                
                <div class="footer">
                  <p>Otrzymano przez formularz zapytań na stronie FAVMOTORS</p>
                  <p>${new Date().toLocaleString('pl-PL')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

      // Отправка письма через mailto
      const subject = encodeURIComponent(`Nowe zapytanie od ${formData.name}`);
      const body = encodeURIComponent(
        `Imię: ${formData.name}\n\nSposób kontaktu: ${formData.contactMethod}\n\nVIN: ${formData.vin || 'Nie podano'}\n\nPytanie:\n${formData.question}`
      );
      
      // Открываем почтовый клиент
      window.location.href = `mailto:admin@favmotors.com?subject=${subject}&body=${body}`;

      toast({
        title: 'Zapytanie wysłane!',
        description: 'Skontaktujemy się z Tobą w najbliższym czasie.',
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
        title: 'Błąd',
        description: 'Nie udało się wysłać zapytania. Spróbuj ponownie później.',
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
              <span>Powrót do strony głównej</span>
            </Link>

            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Wyślij <span className="text-primary">zapytanie</span>
              </h1>
              <p className="text-xl text-foreground/80 mb-12">
                Wypełnij formularz poniżej, a skontaktujemy się z Tobą w najbliższym czasie.
              </p>

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-elegant">
                <div className="space-y-6">
                  {/* Имя */}
                  <div>
                    <Label htmlFor="name">Imię *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Wprowadź swoje imię"
                      className="mt-2"
                    />
                  </div>

                  {/* Способ связи */}
                  <div>
                    <Label htmlFor="contactMethod">Sposób kontaktu *</Label>
                    <Input
                      id="contactMethod"
                      type="text"
                      required
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      placeholder="Telefon, email, nick na Facebooku lub Instagramie"
                      className="mt-2"
                    />
                    <p className="text-sm text-foreground/60 mt-1">
                      Podaj wygodny dla siebie sposób kontaktu
                    </p>
                  </div>

                  {/* VIN */}
                  <div>
                    <Label htmlFor="vin">Numer VIN</Label>
                    <Input
                      id="vin"
                      type="text"
                      value={formData.vin}
                      onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                      placeholder="Wprowadź numer VIN pojazdu (jeśli znany)"
                      className="mt-2"
                    />
                    <p className="text-sm text-foreground/60 mt-1">
                      VIN pomoże nam dokładniej dobrać potrzebne części
                    </p>
                  </div>

                  {/* Вопрос */}
                  <div>
                    <Label htmlFor="question">Twoje pytanie / zapytanie *</Label>
                    <Textarea
                      id="question"
                      required
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Tutaj możesz podać listę interesujących Cię części, producentów, kategorię cenową lub inne pytania"
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-red text-white font-semibold py-6 text-lg shadow-glow hover:scale-105 transition-smooth"
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
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
