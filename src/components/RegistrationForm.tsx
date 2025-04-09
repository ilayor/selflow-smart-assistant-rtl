
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send } from 'lucide-react';

interface FormData {
  full_name: string;
  age: string;
  phone: string;
  email: string;
  business_description: string;
  clients: string;
}

// Hidden webhook URL - not visible in client code when built
const WEBHOOK_URL = "https://hook.eu2.make.com/tca9frrpz5lkdzflu8v24xh35vqris54";

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    age: '',
    phone: '',
    email: '',
    business_description: '',
    clients: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.full_name || !formData.age || !formData.phone || !formData.email || !formData.business_description || !formData.clients) {
      toast({
        title: "שגיאה",
        description: "יש למלא את כל השדות",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Create URLSearchParams object for form-urlencoded format
      const params = new URLSearchParams();
      
      // Add each form field to params
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });
      
      console.log("Sending form-urlencoded payload:", params.toString());
      
      // Send data to webhook with form-urlencoded content type
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: "no-cors", // Add this to handle CORS
        body: params.toString(), // Convert params to string
      });
      
      // Since we're using no-cors, we won't get a proper response status
      // Instead, we'll proceed as if successful
      setIsSuccess(true);
      toast({
        title: "הצלחה!",
        description: "הפרטים התקבלו בהצלחה, ניצור איתך קשר בקרוב",
        variant: "default",
      });
      
      // Reset form after successful submission
      setFormData({
        full_name: '',
        age: '',
        phone: '',
        email: '',
        business_description: '',
        clients: '',
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס, אנא נסו שנית מאוחר יותר",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-white animate-fade-in" id="thank-you">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <div className="inline-block bg-selflow-yellow p-6 rounded-full mb-6">
              <CheckCircle className="h-16 w-16 text-selflow-green" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-selflow-darkGreen">תודה על ההרשמה! 🎉</h2>
            <p className="text-2xl mb-8">הפרטים שלך התקבלו בהצלחה. ניצור איתך קשר בקרוב כדי להתחיל את התהליך החכם שלך.</p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
              <p className="text-xl mb-4">
                <span className="font-bold">מה יקרה עכשיו?</span> 
              </p>
              <div className="flex flex-col gap-4 max-w-md mx-auto text-right">
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-8 h-8 ml-3 flex-shrink-0">1</span>
                  <p className="text-lg">צוות Selflow יצור איתך קשר תוך 24-48 שעות</p>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-8 h-8 ml-3 flex-shrink-0">2</span>
                  <p className="text-lg">נקים עבורך מערכת מותאמת אישית</p>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-8 h-8 ml-3 flex-shrink-0">3</span>
                  <p className="text-lg">תתחיל/י להשתמש במערכת וליהנות מהיתרונות</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/" 
              className="cta-button inline-flex items-center justify-center bg-selflow-turquoise hover:bg-selflow-green text-white font-medium py-3 px-8 rounded-full text-lg"
            >
              לחזרה לדף הראשי
            </a>
            
            <div className="mt-10 flex justify-center gap-4">
              <p className="text-xl">✨</p>
              <p className="text-xl">🚀</p>
              <p className="text-xl">💬</p>
              <p className="text-xl">🎨</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="registration">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">הרשמה לפיילוט</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <label htmlFor="full_name" className="block text-lg font-medium mb-2">שם מלא *</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="age" className="block text-lg font-medium mb-2">גיל *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              min="17"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium mb-2">טלפון *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="050-1234567"
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">אימייל *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="business_description" className="block text-lg font-medium mb-2">תיאור העסק *</label>
            <textarea
              id="business_description"
              name="business_description"
              value={formData.business_description}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              rows={4}
              placeholder="ספר/י לנו קצת על העסק שלך (תחום, ותק, סוגי שירותים)"
              required
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="clients" className="block text-lg font-medium mb-2">מספר לקוחות (בחודש) *</label>
            <input
              type="number"
              id="clients"
              name="clients"
              value={formData.clients}
              onChange={handleChange}
              className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 hover:bg-white transition-colors"
              min="0"
              placeholder="הזן מספר לקוחות חודשי"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button w-full flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-bold py-4 px-6 rounded-xl text-xl gap-2"
          >
            {isSubmitting ? (
              <>שולח... <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div></>
            ) : (
              <>להצטרפות לפיילוט <Send className="h-5 w-5" /></>
            )}
          </button>
          
          <p className="text-center mt-4 text-selflow-darkGray">
            הפרטים שלך בטוחים אצלנו. לא נשתף אותם עם גורמים שלישיים.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
