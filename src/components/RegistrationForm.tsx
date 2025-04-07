
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  age: string;
  phone: string;
  email: string;
  businessDescription: string;
}

const RegistrationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    businessDescription: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.fullName || !formData.age || !formData.phone || !formData.email || !formData.businessDescription) {
      toast({
        title: "שגיאה",
        description: "יש למלא את כל השדות",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "הצלחה!",
        description: "הפרטים התקבלו בהצלחה, ניצור איתך קשר בקרוב",
        variant: "default",
      });
      // Reset form after successful submission
      setFormData({
        fullName: '',
        age: '',
        phone: '',
        email: '',
        businessDescription: '',
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {!isSuccess ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">הרשמה לפיילוט</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-lg font-medium mb-2">שם מלא *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
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
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="businessDescription" className="block text-lg font-medium mb-2">תיאור העסק *</label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  rows={4}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button w-full bg-selflow-turquoise hover:bg-selflow-green text-white font-bold py-4 px-6 rounded-lg text-lg"
              >
                {isSubmitting ? 'שולח...' : 'להצטרפות לפיילוט'}
              </button>
            </form>
          </>
        ) : (
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-selflow-darkGreen">תודה!</h2>
            <p className="text-2xl mb-4">הפרטים התקבלו, ניצור קשר בקרוב 🎉</p>
            <p className="text-xl">אנו מודים לך על ההתעניינות ב-Selflow ונשמח ללוות אותך בפיילוט.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;
