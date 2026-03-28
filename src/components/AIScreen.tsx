import { Sparkles, MessageCircle, Video, PieChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function AIScreen() {
  return (
    <div className="flex flex-col h-full text-white overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-center sticky top-0 bg-black z-10 border-b border-white/5">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="text-2xl font-bold tracking-tight">AI 生成</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* unkmi Pie Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-zinc-900/50 rounded-[40px] p-8 border border-white/5 space-y-6"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">unkmi Pie</h3>
              <p className="text-sm text-gray-500">基于你的生活数据生成的性格饼图</p>
            </div>
            <PieChart className="w-6 h-6 text-indigo-400" />
          </div>
          
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-indigo-500/10 blur-[60px] rounded-full" />
            <div className="w-48 h-48 rounded-full border-[12px] border-indigo-500/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[12px] border-indigo-500 border-t-transparent border-r-transparent rotate-45" />
              <div className="text-center">
                <span className="text-4xl font-bold">72%</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Focus</p>
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
            查看完整报告
          </button>
        </motion.div>

        {/* Chat Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[40px] p-8 space-y-4 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-32 h-32" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">对话回忆</h3>
              <p className="text-sm text-white/60">像老朋友一样，聊聊那些被遗忘的瞬间</p>
            </div>
            <button className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-sm font-medium transition-colors">
              开始对话
            </button>
          </div>
        </motion.div>

        {/* Vlog Agent Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 rounded-[40px] p-8 border border-white/5 space-y-6 relative overflow-hidden"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Vlog Agent</h3>
              <p className="text-sm text-gray-500">AI 自动剪辑你的生活碎片</p>
            </div>
            <Video className="w-6 h-6 text-orange-400" />
          </div>

          <div className="aspect-video rounded-3xl bg-black/40 flex items-center justify-center border border-white/5 group cursor-pointer overflow-hidden">
            <img 
              src="https://picsum.photos/seed/vlog-preview/600/400" 
              alt="vlog preview" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar" />
                </div>
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[8px]">
                +12
              </div>
            </div>
            <span>已有 1.2k 人生成</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
