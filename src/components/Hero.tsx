
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ROTATING_TEXTS = [
  "אוטומציות",
  "AI",
  "בינה מלאכותית",
  "CRM",
  "צ'אט בוט",
  "הכלי החדש שיצא",
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // מחליף כתובית כל 2 שניות
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#B3125D] to-[#5D2A82] px-6 md:px-24 py-12 md:py-0"
      dir="rtl"
    >
      {/* טקסט ימני */}
      <div className="w-full md:w-1/2 flex flex-col items-end justify-center z-10 text-right">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
          תגיד, שמעת על...
        </h2>
        <div className="h-16 flex flex-col justify-start items-end relative mb-2 md:mb-4">
          <span className="text-[#FFF200] text-3xl md:text-4xl font-black transition-all duration-700 min-h-[44px]">
            {ROTATING_TEXTS[current]}
          </span>
        </div>
        <p className="text-xl md:text-2xl font-bold text-white mb-2 mt-2">
          נמאס לך להרגיש מאחור?
        </p>
        <p className="text-xl md:text-2xl font-bold text-white mb-6">
          הגיע הזמן לעשות סדר.
        </p>
        {/* כפתור בולט */}
        <a
          href="#contact"
          className={cn(
            "bg-white text-[#B3125D] font-extrabold px-8 py-4 rounded-full shadow hover:bg-[#FFF200] hover:text-[#5D2A82] transition-all duration-200 text-lg"
          )}
        >
          שיחת ייעוץ ללא עלות
        </a>
      </div>
      {/* תמונה שמאלית */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 z-10">
        <img
          src="/c803c1e0-53f4-44ba-ac7e-bd7602fa1ef1.png"
          alt="תמונה עסקית"
          width={440}
          height={560}
          className="rounded-2xl object-cover shadow-xl border-4 border-white/30"
        />
      </div>
      {/* אפקט רקע דקורטיבי */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
