import { ChevronLeft, Edit2, ChevronRight, Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

const SETTINGS_GROUPS = [
  {
    title: '设备设置',
    version: '版本 1.44.59',
    items: [
      { label: '设备指示灯' },
      { label: '个性化' },
      { label: '系统' },
      { label: '认证' },
      { label: '最后位置' },
    ]
  },
  {
    title: '应用设置',
    version: '版本 1.3.2-235',
    items: [
      { label: '外观' },
      { label: '语言' },
      { label: '权限' },
      { label: '应用版本' },
      { label: '清理缓存', value: '16.27 GB' },
    ]
  },
  {
    title: '数据与隐私',
    items: [
      { label: '数据控制' },
      { label: '服务条款' },
      { label: '隐私政策' },
    ]
  },
  {
    title: '',
    items: [
      { label: '反馈问题' },
    ]
  }
];

export default function ProfileScreen() {
  return (
    <div className="flex flex-col h-full text-white overflow-y-auto pb-32 bg-black">
      {/* Header */}
      <div className="px-6 py-4 flex justify-between items-center sticky top-0 bg-black z-10 border-b border-white/5">
        <button className="p-2 bg-white/5 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">个人中心</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Profile Card */}
      <div className="px-6">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative rounded-[40px] overflow-hidden p-8 space-y-8"
          style={{
            background: 'linear-gradient(135deg, #333 0%, #111 100%)'
          }}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
              <span className="text-sm font-bold">unkmi</span>
              <span className="text-[10px] bg-indigo-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold shadow-[0_0_10px_rgba(99,102,241,0.5)]">Prime</span>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Edit2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="space-y-1 relative z-10">
            <h2 className="text-3xl font-bold">XIE Jessie</h2>
            <p className="text-sm text-gray-500">1033629405@qq.com</p>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
                <span>Storage</span>
                <span>16% Used</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[16%]" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">164.3 GB / 1.0 TB</p>
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold border border-white/10">J</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Settings List */}
      <div className="px-6 py-8 space-y-8">
        {SETTINGS_GROUPS.map((group, gIndex) => (
          <div key={gIndex} className="space-y-4">
            {group.title && (
              <div className="flex items-center space-x-2">
                <h3 className="text-xs text-gray-500 font-medium uppercase tracking-widest">{group.title}</h3>
                {group.version && (
                  <>
                    <span className="text-[10px] text-gray-700">•</span>
                    <span className="text-[10px] text-gray-700 uppercase tracking-widest">{group.version}</span>
                  </>
                )}
              </div>
            )}
            
            <div className="bg-zinc-900/50 rounded-[32px] overflow-hidden border border-white/5">
              {group.items.map((item, i) => (
                <button 
                  key={item.label}
                  className={`w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors ${i !== group.items.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="text-base font-medium text-gray-300">{item.label}</span>
                  <div className="flex items-center space-x-2">
                    {item.value && <span className="text-sm text-gray-600">{item.value}</span>}
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
