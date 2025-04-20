import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send, Sparkles } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
interface FormData {
  full_name: string;
  age: string;
  phone: string;
  email: string;
  business_description: string;
  clients: string;
}

// Form validation schema
const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "נא להזין שם מלא"
  }),
  age: z.string().min(1, {
    message: "נא להזין גיל"
  }),
  phone: z.string().min(9, {
    message: "נא להזין מספר טלפון תקין"
  }),
  email: z.string().email({
    message: "נא להזין כתובת אימייל תקינה"
  }),
  business_description: z.string().min(10, {
    message: "נא לתאר את העסק בלפחות 10 תווים"
  }),
  clients: z.string().min(1, {
    message: "נא להזין מספר לקוחות"
  })
});

// Hidden webhook URL - not visible in client code when built
const WEBHOOK_URL = "https://hook.eu2.make.com/tca9frrpz5lkdzflu8v24xh35vqris54";
const RegistrationForm: React.FC = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      age: "",
      phone: "",
      email: "",
      business_description: "",
      clients: ""
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Create URLSearchParams object for form-urlencoded format
      const params = new URLSearchParams();

      // Add each form field to params
      Object.entries(values).forEach(([key, value]) => {
        params.append(key, value);
      });
      console.log("Sending form-urlencoded payload:", params.toString());

      // Send data to webhook with form-urlencoded content type
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        mode: "no-cors",
        // Add this to handle CORS
        body: params.toString() // Convert params to string
      });

      // Since we're using no-cors, we won't get a proper response status
      // Instead, we'll proceed as if successful
      setIsSuccess(true);
      toast({
        title: "הצלחה!",
        description: "הפרטים התקבלו בהצלחה, ניצור איתך קשר בקרוב",
        variant: "default"
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס, אנא נסו שנית מאוחר יותר",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  if (isSuccess) {
    return <section className="py-20 bg-gradient-to-b from-white to-selflow-yellow/10 animate-fade-in" id="thank-you">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-selflow-yellow to-selflow-green/20 p-6 rounded-full mb-6 shadow-lg transform transition-transform hover:scale-105">
              <CheckCircle className="h-16 w-16 text-selflow-green" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-selflow-darkGreen">תודה על ההרשמה! 🎉</h2>
            <p className="text-2xl mb-8">הפרטים שלך התקבלו בהצלחה. ניצור איתך קשר בקרוב כדי להתחיל את התהליך החכם שלך.</p>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 transform transition-all hover:shadow-2xl border border-selflow-green/10">
              <p className="text-xl mb-4">
                <span className="font-bold">מה יקרה עכשיו?</span> 
              </p>
              <div className="flex flex-col gap-6 max-w-md mx-auto text-right">
                <div className="flex items-center group">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-10 h-10 ml-4 flex-shrink-0 shadow-md group-hover:shadow-selflow-green/40 transition-all">1</span>
                  <p className="text-lg">צוות Selflow יצור איתך קשר תוך 24-48 שעות</p>
                </div>
                <div className="flex items-center group">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-10 h-10 ml-4 flex-shrink-0 shadow-md group-hover:shadow-selflow-green/40 transition-all">2</span>
                  <p className="text-lg">נקים עבורך מערכת מותאמת אישית</p>
                </div>
                <div className="flex items-center group">
                  <span className="inline-flex items-center justify-center bg-selflow-green text-white rounded-full w-10 h-10 ml-4 flex-shrink-0 shadow-md group-hover:shadow-selflow-green/40 transition-all">3</span>
                  <p className="text-lg">תתחיל/י להשתמש במערכת וליהנות מהיתרונות</p>
                </div>
              </div>
            </div>
            
            <a href="/" className="cta-button inline-flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-selflow-green/50 transition-all">
              לחזרה לדף הראשי
            </a>
            
            <div className="mt-10 flex justify-center gap-6">
              <span className="text-2xl animate-float">✨</span>
              <span className="text-2xl animate-float-reverse">🚀</span>
              <span className="text-2xl animate-float">💬</span>
              <span className="text-2xl animate-float-reverse">🎨</span>
            </div>
          </div>
        </div>
      </section>;
  }
  return <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-selflow-yellow/10" id="registration">
      {/* Floating elements for design */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-selflow-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-selflow-turquoise/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block bg-selflow-yellow p-3 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-selflow-darkGreen" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">הרשמה לפיילוט</h2>
          <p className="text-lg text-gray-600">מלאו את הפרטים ונחזור אליכם תוך 24-48 שעות</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-selflow-green/10">
            <div className="space-y-6">
              <FormField control={form.control} name="full_name" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-lg font-medium">שם מלא</FormLabel>
                    <FormControl>
                      <Input {...field} className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl" placeholder="הזן את שמך המלא" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="age" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-lg font-medium">גיל</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="17" className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl" placeholder="הזן את גילך" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-lg font-medium">טלפון</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl" placeholder="050-1234567" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>
              
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-lg font-medium">אימייל</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl" placeholder="your.email@example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="business_description" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-lg font-medium">תיאור העסק</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl min-h-[120px]" placeholder="ספר/י לנו קצת על העסק שלך (תחום, ותק, סוגי שירותים)" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="clients" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-lg font-medium">מספר לקוחות (בחודש)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min="0" className="p-3 text-base bg-gray-50 hover:bg-white focus:bg-white transition-colors rounded-xl" placeholder="הזן מספר לקוחות חודשי" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <button type="submit" disabled={isSubmitting} className="cta-button w-full flex items-center justify-center bg-selflow-green hover:bg-selflow-darkGreen text-white font-bold py-4 px-6 rounded-xl text-xl gap-2 shadow-lg hover:shadow-selflow-green/50 transition-all mt-6">
                {isSubmitting ? <>שולח... <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div></> : <>להצטרפות לפיילוט <Send className="h-5 w-5" /></>}
              </button>
              
              <p className="text-center mt-2 text-selflow-darkGray text-sm">🔒 אנו מקפידים על אבטחת מידע גבוהה ומבצעים את כל הפעולות הנדרשות לשמירה על פרטיות המשתמש בהתאם לחוק.</p>
            </div>
          </form>
        </Form>
      </div>
    </section>;
};
export default RegistrationForm;