import { LayoutGrid, Settings, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const DAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const DATES = Array.from({ length: 31 }, (_, i) => i + 1);

export default function MemoryScreen() {
  return (
    <div className="flex flex-col h-full text-white overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-start sticky top-0 bg-black z-10 border-b border-white/5">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">记忆</h1>
          <p className="text-sm text-gray-500">2026年3月28日</p>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Week Days */}
      <div className="px-6 grid grid-cols-7 gap-2 mb-4">
        {DAYS.map(day => (
          <div key={day} className="text-center text-xs text-gray-500 font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="px-6 grid grid-cols-7 gap-3">
        {DATES.map(date => {
          const hasPhoto = [13, 21].includes(date);
          const isToday = date === 28;
          
          return (
            <motion.button
              key={date}
              whileTap={{ scale: 0.95 }}
              className={`relative aspect-[3/4] rounded-2xl flex flex-col items-center justify-end pb-2 overflow-hidden border border-white/5 transition-all
                ${isToday ? 'bg-indigo-500/80 border-indigo-400' : 'bg-zinc-900/50 hover:bg-zinc-800'}
              `}
            >
              {hasPhoto && (
                <img 
                  src={`https://picsum.photos/seed/mem-${date}/100/150`} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  alt="memory"
                />
              )}
              {hasPhoto && date === 21 && (
                <div className="absolute top-1 right-1">
                  <Sparkles className="w-3 h-3 text-white drop-shadow-lg" />
                </div>
              )}
              {date === 22 && (
                 <div className="absolute top-0 left-0">
                    <Sparkles className="w-3 h-3 text-white/50" />
                 </div>
              )}
              <span className={`relative z-10 text-sm font-medium ${isToday ? 'text-white' : 'text-gray-400'}`}>
                {date}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Empty State / Footer */}
      <div className="flex flex-col items-center justify-center py-20 space-y-4 opacity-30">
        <div className="w-32 h-32 border-2 border-dashed border-white/20 rounded-[40px] flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white/20 rounded-2xl rotate-45" />
        </div>
        <p className="text-sm">什么都没找到...</p>
      </div>
    </div>
  );
}
