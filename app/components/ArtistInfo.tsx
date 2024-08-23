import React from 'react';
import { Artist } from "@/lib/types";

const ArtistInfo: React.FC<{ artist: Artist }> = ({ artist }) => (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-bold mb-2">{artist.name}</h2>
        <p className="text-lg text-black">Average Monthly Listeners: {artist.monthlyListeners}</p>
    </div>
);

export default ArtistInfo;
