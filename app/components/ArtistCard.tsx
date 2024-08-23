import { getCountryFlagEmoji } from "@/lib/countryEmojis";
import { Artist } from "@/lib/types";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag"

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => (
    <div className="flex flex-col items-center p-1 bg-transparent rounded-lg">
        {/* <h2 className="text-lg sm:text-xl text-white font-bold truncate w-full text-center">
            {artist.name}
        </h2> */}
        {/* <div className="relative w-96 h-96 sm:w-32 sm:h-32 mb-2"> */}
        <Image
            src={artist.imageUrl}
            alt={artist.name}
            width={300}
            height={300}
            // layout="fill" 
            // sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
            className="rounded-md relative w-44 h-44 sm:w-80 sm:h-80 md:w-64 md:h-64 mb-2"
        />
        {/* </div> */}

        <div className="flex text-white items-center text-sm sm:text-base">
            <ReactCountryFlag
                countryCode={artist.country}
                svg
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                    marginLeft: '0.5em'
                }}
                title={artist.country}
            />
        </div>
    </div>
);

export default ArtistCard;