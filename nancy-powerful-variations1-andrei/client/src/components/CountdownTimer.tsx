import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  // Default to 15 minutes from now if no date provided
  const [endTime] = useState(() => {
    if (targetDate) return targetDate;
    const date = new Date();
    date.setMinutes(date.getMinutes() + 15);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +endTime - +new Date();
    
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("flex gap-4 justify-center", className)}>
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <div className="text-4xl font-black self-start mt-2">:</div>
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <div className="text-4xl font-black self-start mt-2">:</div>
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-black text-[#FAFF00] text-4xl md:text-5xl font-black p-4 min-w-[80px] md:min-w-[100px] text-center border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-xs font-bold mt-2 uppercase tracking-widest">{label}</div>
  </div>
);
