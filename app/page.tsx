'use client'
 
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Youtube, Twitch, Instagram, LucideIcon } from 'lucide-react';

interface GameType {
  name: string;
  icon: LucideIcon;
  enabled: boolean;
}

const GameTypes: GameType[] = [
  { name: 'Spotify Top Monthly', icon: Music, enabled: true },
  { name: 'YouTube Top Artists', icon: Youtube, enabled: false },
  { name: 'Twitch Streamers', icon: Twitch, enabled: false },
  { name: 'Instagram Followers', icon: Instagram, enabled: false },
];

const GameSelectionMenu: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  
  const router = useRouter()

  const handleGameSelect = (game: GameType) => {
    setSelectedGame(game);
    console.log(game.name)
    if (game.name === 'Spotify Top Monthly') {
      router.push('/game')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 text-center">Higher or Lower</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        {GameTypes.map((game) => (
          <motion.button
            key={game.name}
            onClick={() => handleGameSelect(game)}
            className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg shadow-lg transition-colors ${
              game.enabled
                ? 'bg-white hover:bg-gray-100'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!game.enabled}
          >
            <game.icon size={32} className={`sm:w-12 sm:h-12 ${game.enabled ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`mt-2 font-semibold text-sm sm:text-base ${game.enabled ? 'text-gray-800' : 'text-gray-500'}`}>
              {game.name}
            </span>
            {!game.enabled && (
              <span className="text-xs text-gray-500 mt-1">Coming Soon</span>
            )}
          </motion.button>
        ))}
      </div>
      {selectedGame && !selectedGame.enabled && (
        <p className="mt-4 text-white text-center">This game mode is not yet available.</p>
      )}
    </div>
  );
};

export default GameSelectionMenu;