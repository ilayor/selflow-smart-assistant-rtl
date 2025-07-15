
import React from "react";
import { PhoneCall, Code2, CheckCircle2, UploadCloud } from "lucide-react";

const timelineSteps = [
  {
    title: "שיחת אפיון",
    icon: <PhoneCall className="w-8 h-8 text-white" />,
    description: (
      <>
        בשלב הראשון נערוך <span className="font-bold text-[#25D366]">שיחת אפיון מעמיקה</span> (טלפון או זום), 
        בה נבין את האתגרים והיעדים שלך, ננתח את תהליכי העבודה בעסק, 
        נמפה שלבים חוזרים ומוקדים לשיפור, ונבנה יחד <span className="font-bold text-[#25D366]">תרשים אוטומציה</span> מותאם אישית 
        שיביא לתוצאה אפקטיבית וקלילה.
      </>
    ),
    color: "bg-[#25D366]",
  },
  {
    title: "פיתוח",
    icon: <Code2 className="w-8 h-8 text-white" />,
    description: (
      <>
        על סמך תהליך האפיון ניגש <span className="font-bold text-[#25D366]">לפיתוח האוטומציה בפועל</span>: 
        כתיבת סקריפטים, בניית אינטגרציות בין מערכות (CRM, WhatsApp, Google וכו'), 
        הקמת תשתית נתונים, הפעלת טריגרים חכמים, והגדרת כלים מותאמים לעסק שלך – 
        הכל בשקיפות מלאה ותיעוד מלא.
      </>
    ),
    color: "bg-[#A8E6CF]",
  },
  {
    title: "בדיקות ודיוקים",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    description: (
      <>
        לאחר הפיתוח נבצע <span className="font-bold text-[#25D366]">בדיקות קפדניות</span> לכל שלב באוטומציה, 
        נבצע הדמיות (Sandbox) עם דאטה אמיתי, נתקן באגים, 
        נוודא שכל התהליכים עובדים "מהרגע הראשון", ונשדרג לפי פידבק – 
        עד שכל רכיב יושב בול לפי צרכי העסק והמשתמשים.
      </>
    ),
    color: "bg-[#25D366]",
  },
  {
    title: "הטמעה",
    icon: <UploadCloud className="w-8 h-8 text-white" />,
    description: (
      <>
        בשלב האחרון נבצע <span className="font-bold text-[#25D366]">הטמעה והדרכה</span>: 
        נכין מסמכי עבודה ברורים, נדריך אותך ואת הצוות על המערכת, 
        נטמיע Dashboard ניהול פשוט וברור, ניתן תמיכה ראשונית – 
        ונוודא שהמערכת עובדת חלק ונותנת לך שקט ונחת.
      </>
    ),
    color: "bg-[#A8E6CF]",
  },
];

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          איך נראה תהליך העבודה המשותף?
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* קו ציר זמן אנכי */}
          <div className="absolute right-6 md:right-12 top-0 bottom-0 w-1 bg-[#25D366]/30 z-0 rounded-full" />

          <div className="flex flex-col gap-16">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-row-reverse items-start">
                {/* אייקון עגול */}
                <div className={`flex-shrink-0 ${step.color} p-4 rounded-full shadow-lg mr-4 md:mr-8`}>
                  {step.icon}
                </div>
                {/* תוכן */}
                <div className="bg-[#F6F6F6] p-6 rounded-xl shadow w-full">
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-[#25D366]">{step.title}</h4>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
