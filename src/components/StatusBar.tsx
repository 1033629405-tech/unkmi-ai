import { Wifi, Battery, Signal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-2 text-white/90 text-[11px] font-semibold bg-black sticky top-0 z-[100] border-b border-white/5">
      <div className="flex items-center space-x-1">
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3 h-3" />
        <div className="flex items-center space-x-1">
          <span>100%</span>
          <div className="w-5 h-2.5 border border-white/30 rounded-sm p-0.5 flex items-center">
            <div className="w-full h-full bg-white rounded-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
