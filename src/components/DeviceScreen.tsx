import { 
  Camera, 
  Video, 
  Mic, 
  Clock, 
  Settings, 
  Wifi, 
  Battery, 
  ChevronRight,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DeviceScreen() {
  return (
    <div className="flex flex-col h-full text-white overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-start sticky top-0 bg-black z-10 border-b border-white/5">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">unkmi L1 (80361)</h1>
          <div className="flex items-center space-x-4 text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="text-green-400">100%</span>
              <Battery className="w-4 h-4 text-green-400 rotate-90" />
            </div>
            <div className="flex items-center space-x-1">
              <span>my7_5G</span>
              <Wifi className="w-4 h-4" />
            </div>
          </div>
        </div>
        <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 space-y-6">

      {/* Status Message */}
      <div className="bg-white/5 border border-white/10 rounded-full px-4 py-3 flex items-center space-x-3">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-sm text-gray-300">正在把记录的瞬间写成你的故事，请耐心等待...</p>
      </div>

      {/* Device Visual */}
      <div className="relative flex justify-center py-8">
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-64 h-64 bg-zinc-900 rounded-[60px] shadow-2xl flex items-center justify-center border border-white/5"
          style={{
            boxShadow: 'inset 0 0 40px rgba(255,255,255,0.05), 0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          {/* Device Details */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-cyan-400 rounded-sm rotate-45 flex items-center justify-center">
               <div className="w-1 h-3 bg-white/80 rounded-full -rotate-45" />
            </div>
          </div>
          {/* Charging cable visual */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-cyan-400/30" />
        </motion.div>
      </div>

      {/* Quick Controls */}
      <div className="grid grid-cols-4 gap-3 bg-white/5 p-2 rounded-[32px] border border-white/10">
        <button className="flex flex-col items-center justify-center p-4 rounded-[24px] hover:bg-white/10 transition-colors">
          <Camera className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center justify-center p-4 rounded-[24px] hover:bg-white/10 transition-colors">
          <Video className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center justify-center p-4 rounded-[24px] hover:bg-white/10 transition-colors">
          <Mic className="w-6 h-6" />
        </button>
        <button className="flex flex-col items-center justify-center p-4 rounded-[24px] bg-white/20 shadow-lg">
          <div className="relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-zinc-900 rounded-full flex items-center justify-center">
              <Clock className="w-2 h-2 text-white" />
            </div>
            <div className="w-6 h-6 border-2 border-white rounded-md" />
          </div>
        </button>
      </div>

      {/* Firmware Update */}
      <div className="bg-zinc-900/80 border border-white/5 rounded-[32px] p-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
            <div className="w-6 h-6 bg-gray-500 rounded-md opacity-50" />
          </div>
          <div>
            <h3 className="font-medium">固件更新</h3>
            <p className="text-xs text-gray-500">版本 1.45.63</p>
          </div>
        </div>
        <button className="px-6 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
          安装
        </button>
      </div>

      {/* Storage Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900/80 border border-white/5 rounded-[32px] p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">设备媒体</h3>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[20%]" />
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">5.3 GB / 25.2 GB</p>
          </div>
          <div className="flex -space-x-2 overflow-hidden">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-12 h-12 rounded-xl border-2 border-zinc-900 overflow-hidden">
                <img src={`https://picsum.photos/seed/unkmi-${i}/100/100`} alt="preview" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/80 border border-white/5 rounded-[32px] p-5 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <h3 className="text-sm font-medium">unkmi+</h3>
              <span className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded-full uppercase">Prime</span>
            </div>
            <div className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-[10px] text-gray-500">?</div>
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[16%]" />
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">164.3 GB / 1.0 TB</p>
          </div>
          <div className="flex justify-center pt-2">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-dashed border-white/20">
              <Download className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
