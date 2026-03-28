import { useState } from 'react';
import { Settings, Share2, Heart, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['全部', '喜欢', '漫画', 'Vlog', '当下呈现', '其他'];
const TAGS = [
  { label: '专注', color: 'text-blue-400', icon: '💙' },
  { label: '运动', color: 'text-green-400', icon: '💚' },
  { label: '用餐', color: 'text-orange-400', icon: '🧡' },
  { label: '通勤', color: 'text-gray-400', icon: '🖤' },
  { label: '社交', color: 'text-yellow-400', icon: '💛' },
  { label: '放松', color: 'text-purple-400', icon: '💜' },
  { label: '休息', color: 'text-pink-400', icon: '💗' },
  { label: '其他', color: 'text-gray-400', icon: '🤍' },
];

export default function InspirationScreen() {
  const [activeCategory, setActiveCategory] = useState('喜欢');

  return (
    <div className="flex flex-col h-full text-white overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-center sticky top-0 bg-black z-10 border-b border-white/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-2xl font-bold tracking-tight">unkmi</span>
        </div>
        <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Categories */}
      <div className="px-6 flex space-x-8 overflow-x-auto no-scrollbar py-5 border-b border-white/5">
        {CATEGORIES.map((cat, i) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className={`relative whitespace-nowrap text-[15px] font-semibold transition-all duration-300 pb-1 ${cat === activeCategory ? 'text-white scale-105' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {cat}
            {cat === activeCategory && (
              <motion.div 
                layoutId="activeCategory"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Feed */}
      <div className="p-6 space-y-8">
        {/* Pixel Memory Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-4"
        >
          <div className="relative aspect-square rounded-[40px] overflow-hidden bg-zinc-900 border border-white/5">
            <img 
              src="https://picsum.photos/seed/pixel-desk/800/800" 
              alt="pixel memory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">屏幕光与河畔的风</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              保温杯带着长日的温度，咖啡与椰香在金属内壁留下不显眼的印记。AirPods Pro 里轮流播放中文与韩文...
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-blue-400">像素记忆</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-600">2026年2月17日</span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-pink-500">
                <Heart className="w-5 h-5 fill-current" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Weekly Colors Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="relative aspect-square rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-indigo-400 to-orange-300 animate-gradient-slow" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center space-x-2 opacity-80">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                <span className="text-sm font-bold">unkmi</span>
                <span className="text-sm opacity-50">| 本周生活色彩</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">紫橙间的悠闲周</h2>
            <div className="grid grid-cols-4 gap-y-3">
              {TAGS.map(tag => (
                <div key={tag.label} className="flex items-center space-x-1.5">
                  <span>{tag.icon}</span>
                  <span className="text-xs text-gray-400">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
