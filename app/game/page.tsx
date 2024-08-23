'use client'
 
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { compareArtists, getInitialArtists, getRandomArtist, resetSeenArtists } from '@/app/actions/compareArtists';
import { Artist } from '@/lib/types';
import ArtistCard from '../components/ArtistCard';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Game: React.FC = () => {
    const [currentArtist, setCurrentArtist] = useState<Artist | null>(null);
    const [nextArtist, setNextArtist] = useState<Artist | null>(null);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchArtists = async () => {
            const [first, second] = await getInitialArtists();
            setCurrentArtist(first);
            setNextArtist(second);
        };
        fetchArtists();
    }, []);

    const handleGuess = async (guess: 'more' | 'fewer') => {
        if (!currentArtist || !nextArtist) return;

        const result = await compareArtists(currentArtist.id, nextArtist.id);

        if (guess === result) {
            setScore(prevScore => prevScore + 1);
            setCurrentArtist(nextArtist);
            const newNextArtist = await getRandomArtist();
            setNextArtist(newNextArtist);
        } else {
            setIsGameOver(true);
        }
    };

    const resetGame = async () => {
        setScore(0);
        setIsGameOver(false);
        await resetSeenArtists();
        const [first, second] = await getInitialArtists();
        setCurrentArtist(first);
        setNextArtist(second);
    };

    if (!currentArtist || !nextArtist) return <div>Loading...</div>;

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 overflow-hidden">
            {/* <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Higher or Lower</h1> */}
            <div className="w-full max-w-6xl flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {!isGameOver ? (
                        <motion.div
                            key="game"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col md:flex-row justify-between items-center h-full"
                        >
                            {/* Left side */}
                            <motion.div
                                key={currentArtist.id}
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '-100%', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                                className="w-full md:w-5/12 mb-4 md:mb-0"
                            >
                                <ArtistCard artist={currentArtist} />
                                <div className=" pt-2 sm:pt-8 text-center text-white">
                                    <p className="text-lg sm:text-2xl font-bold">{currentArtist.name} has</p>
                                    <p className="text-2xl sm:text-4xl font-bold">{currentArtist.monthlyListeners.toLocaleString()}</p>
                                    <p className="text-sm sm:text-lg">average monthly listeners</p>
                                </div>
                            </motion.div>

                            {/* Middle divider */}
                            <div className="hidden md:block w-px bg-white h-full mx-4"></div>
                            <div className="md:hidden w-full h-px bg-white my-2"></div>

                            {/* Right side */}
                            <motion.div
                                key={nextArtist.id}
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                                className="w-full md:w-5/12 mt-4 md:mt-0"
                            >
                                <ArtistCard artist={nextArtist} />
                                <div className="mt-2 text-center text-white">
                                    <p className="text-lg sm:text-2xl font-bold">{nextArtist.name} has</p>
                                    <div className="flex justify-center space-x-4 mt-2">
                                        <button
                                            onClick={() => handleGuess('more')}
                                            className="flex items-center justify-center p-2 sm:p-4 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                                        >
                                            <ArrowUp size={20} />
                                            <span className="ml-1 text-sm sm:text-base">More</span>
                                        </button>
                                        <button
                                            onClick={() => handleGuess('fewer')}
                                            className="flex items-center justify-center p-2 sm:p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                                        >
                                            <ArrowDown size={20} />
                                            <span className="ml-1 text-sm sm:text-base">Fewer</span>
                                        </button>
                                    </div>
                                    <p className="text-sm sm:text-xl pt-2">monthly listeners than {currentArtist.name}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="gameover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
                            <p className="text-xl text-white mb-8">Your score: {score}</p>
                            <div className="flex justify-center space-x-4">
                            <button
                                onClick={resetGame}
                                className="bg-white text-purple-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                            >
                                Play Again
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="bg-white text-purple-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                            >
                                Exit
                            </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-4 text-xl sm:text-2xl font-bold text-white">Score: {score}</div>
        </div>
    );
};

export default Game;