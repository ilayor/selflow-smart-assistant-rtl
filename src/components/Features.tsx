
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] bg-[#FDE4EE] flex flex-col justify-center py-16 px-4" dir="rtl">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <p className="text-2xl md:text-3xl font-medium mb-5 leading-relaxed text-gray-800">
          אם היו אומרים לך שיש מי <span className="font-bold text-[#B3125D]">שינהל עבורך תהליכים עסקיים</span>  
          בלי שתשכח אף שלב, <span className="font-bold text-[#B3125D]">מישהו נוסף שיחמם לך לידים ויגדיל לך הכנסה</span>,
          <span className="font-bold text-[#B3125D]"> עובד נוסף שיעשה במקומך פעולות חוזרות</span> ויחסוך לך שעות במשרד
          או שבכלל תרצה עובד שיעשה לך סדר בעסק
          <br /><br />
          וכל זה בעלויות של <span className="font-bold text-[#B3125D]">פחות מעובד אחד</span>
        </p>
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          בטח היית חושב שמנסים למכור לך חלום
        </p>
        <p className="text-xl md:text-2xl text-gray-800 mb-6">
          אבל בעידן של היום? <span className="font-bold text-[#B3125D]">החלום הזה יכול להפוך למציאות שלך</span>
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          ותוך פחות מחודש, העסק שלך יכול להיות <span className="font-bold">כמה צעדים קרוב יותר למקום שראוי לו.</span>
        </p>
        <p className="text-xl font-bold text-[#B3125D] mb-8">
          איך אתה שואל? את זה תשאיר לנו 😉
        </p>
      </div>
    </section>
  );
};

export default Features;
