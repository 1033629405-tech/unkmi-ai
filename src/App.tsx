import { useState } from 'react';
import { 
  LayoutGrid, 
  Cloud, 
  Smartphone, 
  Sparkles 
} from 'lucide-react';
import { Screen } from './types';
import InspirationScreen from './components/InspirationScreen';
import MemoryScreen from './components/MemoryScreen';
import DeviceScreen from './components/DeviceScreen';
import AIScreen from './components/AIScreen';
import ProfileScreen from './components/ProfileScreen';
import StatusBar from './components/StatusBar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('device');
  const [showProfile, setShowProfile] = useState(false);

  const renderScreen = () => {
    if (showProfile) return <ProfileScreen />;
    
    switch (currentScreen) {
      case 'inspiration': return <InspirationScreen />;
      case 'memory': return <MemoryScreen />;
      case 'device': return <DeviceScreen />;
      case 'ai': return <AIScreen />;
      default: return <DeviceScreen />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black font-sans select-none overflow-hidden">
      {/* Main Content Area */}
      <main className="h-full w-full max-w-md mx-auto relative bg-black shadow-2xl flex flex-col">
        <StatusBar />
        <div className="flex-1 overflow-hidden relative">
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
          <div className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex items-center justify-between shadow-2xl">
            <button 
              onClick={() => { setCurrentScreen('inspiration'); setShowProfile(false); }}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-all ${currentScreen === 'inspiration' ? 'text-white' : 'text-gray-500'}`}
            >
              <LayoutGrid className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">灵感</span>
            </button>
            
            <button 
              onClick={() => { setCurrentScreen('memory'); setShowProfile(false); }}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-all ${currentScreen === 'memory' ? 'text-white' : 'text-gray-500'}`}
            >
              <Cloud className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">记忆</span>
            </button>
            
            <button 
              onClick={() => { setCurrentScreen('device'); setShowProfile(false); }}
              className={`relative flex flex-col items-center justify-center flex-1 py-2 transition-all ${currentScreen === 'device' ? 'text-white' : 'text-gray-500'}`}
            >
              {currentScreen === 'device' && (
                <div className="absolute inset-0 bg-white/10 rounded-full scale-110" />
              )}
              <Smartphone className="w-5 h-5 mb-1 relative z-10" />
              <span className="text-[10px] font-medium relative z-10">设备</span>
            </button>
            
            <button 
              onClick={() => { setCurrentScreen('ai'); setShowProfile(false); }}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-all ${currentScreen === 'ai' ? 'text-white' : 'text-gray-500'}`}
            >
              <Sparkles className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">unkmi AI</span>
            </button>
          </div>
        </nav>

        {/* Floating Profile Trigger (Optional, for demo purposes) */}
        {!showProfile && (
           <button 
            onClick={() => setShowProfile(true)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white z-50"
           >
             J
           </button>
        )}
        {showProfile && (
           <button 
            onClick={() => setShowProfile(false)}
            className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white z-50"
           >
             <Smartphone className="w-5 h-5" />
           </button>
        )}
      </main>

      {/* Background decoration for desktop view */}
      <div className="hidden lg:block fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)]" />
    </div>
  );
}
