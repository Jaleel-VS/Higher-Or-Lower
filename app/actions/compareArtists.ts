'use server'

import { Artist } from "@/lib/types"


let seenArtists: string[] = [];

export async function getSeenArtists() {
    return seenArtists;
}

export async function resetSeenArtists() {
    seenArtists = [];
}

export async function getRandomArtist() {
    const availableArtists = artistData.filter(a => !seenArtists.includes(a.id));
    
    if (availableArtists.length === 0) {
        // If all artists have been seen, reset the seenArtists list
        seenArtists = [];
        return artistData[Math.floor(Math.random() * artistData.length)];
    }
    
    const randomArtist = availableArtists[Math.floor(Math.random() * availableArtists.length)];
    seenArtists.push(randomArtist.id);
    return randomArtist;
}

export async function getInitialArtists() {
    const firstArtist = await getRandomArtist();
    const secondArtist = await getRandomArtist();
    return [firstArtist, secondArtist];
}

export async function getArtistById(id: string) {
    return artistData.find(a => a.id === id);
}

export async function compareArtists(artist1Id: string, artist2Id: string) {
    const artist1 = artistData.find(a => a.id === artist1Id);
    const artist2 = artistData.find(a => a.id === artist2Id);
    
    if (!artist1 || !artist2) {
        throw new Error('Artist not found');
    }
    
    if (artist1.monthlyListeners > artist2.monthlyListeners) {
        return 'fewer';
    } else if (artist1.monthlyListeners < artist2.monthlyListeners) {
        return 'more';
    } else {
        return 'equal';
    }
}

const artistData: Artist[] = [
    {
        id: "7n2wHs1TKAczGzO7Dd2rGr",
        name: "Shawn Mendes",
        monthlyListeners: 46547161.0,
        followers: 43090509,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d56712ef06c48938329731e1",
        country: "CA"
    },
    {
        id: "50co4Is1HCEo8bhOyUWKpn",
        name: "Young Thug",
        monthlyListeners: 28779794.0,
        followers: 10266249,
        imageUrl: "https://i.scdn.co/image/ab67616100005174547d2b41c9f2c97318aad0ed",
        country: "US"
    },
    {
        id: "5WUlDfRSoLAfcVSX1WnrxN",
        name: "Sia",
        monthlyListeners: 55501378.0,
        followers: 28427496,
        imageUrl: "https://i.scdn.co/image/ab676161000051747c997fe6951bc0926f09ba38",
        country: "AU"
    },
    {
        id: "6l3HvQ5sa6mXTsMTB19rO5",
        name: "J. Cole",
        monthlyListeners: 38237910.0,
        followers: 24227939,
        imageUrl: "https://i.scdn.co/image/ab676161000051744b053c29fd4b317ff825f0dc",
        country: "US"
    },
    {
        id: "790FomKkXshlbRYZFtlgla",
        name: "KAROL G",
        monthlyListeners: 62163500.0,
        followers: 49334976,
        imageUrl: "https://i.scdn.co/image/ab676161000051744b0754aefc9db490e02205ec",
        country: "CO"
    },
    {
        id: "7CajNmpbOovFoOoasH2HaY",
        name: "Calvin Harris",
        monthlyListeners: 73392242.0,
        followers: 22772832,
        imageUrl: "https://i.scdn.co/image/ab67616100005174014a3c1730d960c66396ed63",
        country: "GB"
    },
    {
        id: "4O15NlyKLIASxsJ0PrXPfz",
        name: "Lil Uzi Vert",
        monthlyListeners: 30965842.0,
        followers: 17551362,
        imageUrl: "https://i.scdn.co/image/ab676161000051741234d2f516796badbdf16a89",
        country: "US"
    },
    {
        id: "1r4hJ1h58CWwUQe3MxPuau",
        name: "Maluma",
        monthlyListeners: 45127529.0,
        followers: 34257610,
        imageUrl: "https://i.scdn.co/image/ab67616100005174912d3ab996f98aa30d3a05d0",
        country: "CO"
    },
    {
        id: "1mcTU81TzQhprhouKaTkpq",
        name: "Rauw Alejandro",
        monthlyListeners: 51684710.0,
        followers: 22860417,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a0881fe672e4e39f9ec0a9e0",
        country: "PR"
    },
    {
        id: "6vWDO969PvNqNYHIOW5v0m",
        name: "Beyoncé",
        monthlyListeners: 57655949.0,
        followers: 38281054,
        imageUrl: "https://i.scdn.co/image/ab67616100005174247f44069c0bd1781df2f785",
        country: "US"
    },
    {
        id: "04gDigrS5kc9YWfZHwBETP",
        name: "Maroon 5",
        monthlyListeners: 63025888.0,
        followers: 42305459,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f8349dfb619a7f842242de77",
        country: "US"
    },
    {
        id: "5f7VJjfbwm532GiveGC0ZK",
        name: "Lil Baby",
        monthlyListeners: 36626327.0,
        followers: 18276918,
        imageUrl: "https://i.scdn.co/image/ab676161000051746cad3eff5adc29e20f189a6c",
        country: "US"
    },
    {
        id: "00FQb4jTyendYWaN8pK0wa",
        name: "Lana Del Rey",
        monthlyListeners: 62997902.0,
        followers: 38542587,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b99cacf8acd5378206767261",
        country: "US"
    },
    {
        id: "2R21vXR83lH98kGeO99Y66",
        name: "Anuel AA",
        monthlyListeners: 33416800.0,
        followers: 37146599,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a23ceb177745632b517cb7b2",
        country: "PR"
    },
    {
        id: "1Cs0zKBU1kc0i8ypK3B9ai",
        name: "David Guetta",
        monthlyListeners: 79853607.0,
        followers: 25990610,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f",
        country: "FR"
    },
    {
        id: "55Aa2cqylxrFIXC767Z865",
        name: "Lil Wayne",
        monthlyListeners: 36093319.0,
        followers: 15010190,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c1c08e541eae3cc82c6988c4",
        country: "US"
    },
    {
        id: "3jK9MiCrA42lLAdMGUZpwa",
        name: "Anderson .Paak",
        monthlyListeners: 22049980.0,
        followers: 2558516,
        imageUrl: "https://i.scdn.co/image/ab6761610000517496287bd47570ff13f0c01496",
        country: "US"
    },
    {
        id: "16oZKvXb6WkQlVAjwo2Wbg",
        name: "The Lumineers",
        monthlyListeners: 28622498.0,
        followers: 5459015,
        imageUrl: "https://i.scdn.co/image/ab67616100005174cd78dff00211f22f2c10ffdb",
        country: "US"
    },
    {
        id: "3EiLUeyEcA6fbRPSHkG5kb",
        name: "De La Ghetto",
        monthlyListeners: 19193475.0,
        followers: 7291619,
        imageUrl: "https://i.scdn.co/image/ab6761610000517424ae492480897f902533797d",
        country: "PR"
    },
    {
        id: "36QJpDe2go2KgaRleHCDTp",
        name: "Led Zeppelin",
        monthlyListeners: 17876556.0,
        followers: 14544629,
        imageUrl: "https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8",
        country: "GB"
    },
    {
        id: "487N2T9nIPEHrlTZLL3SQs",
        name: "Zé Neto & Cristiano",
        monthlyListeners: 13206552.0,
        followers: 19776566,
        imageUrl: "https://i.scdn.co/image/ab6761610000517454183b36ec2933957d8d5c86",
        country: "BR"
    },
    {
        id: "58lV9VcRSjABbAbfWS6skp",
        name: "Bon Jovi",
        monthlyListeners: 29822478.0,
        followers: 13664958,
        imageUrl: "https://i.scdn.co/image/ab6761610000517452aade0d2ea19706074da4b9",
        country: "US"
    },
    {
        id: "1DxLCyH42yaHKGK3cl5bvG",
        name: "Maria Becerra",
        monthlyListeners: 25414508.0,
        followers: 6807740,
        imageUrl: "https://i.scdn.co/image/ab6761610000517458528032a8987fc539175f99",
        country: "AR"
    },
    {
        id: "4Ga1P7PMIsmqEZqhYZQgDo",
        name: "Lil Tecca",
        monthlyListeners: 19376134.0,
        followers: 7661936,
        imageUrl: "https://i.scdn.co/image/ab67616100005174eeba43c460454fcababda14f",
        country: "US"
    },
    {
        id: "3vQ0GE3mI0dAaxIMYe5g7z",
        name: "Paulo Londra",
        monthlyListeners: 13631038.0,
        followers: 23394654,
        imageUrl: "https://i.scdn.co/image/ab6761610000517430f2a21119532004bccbe570",
        country: "AR"
    },
    {
        id: "7rkW85dBwwrJtlHRDkJDAC",
        name: "NAV",
        monthlyListeners: 12178201.0,
        followers: 3486027,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f276b6e4b25bb6fb7b942ab2",
        country: "CA"
    },
    {
        id: "0cGUm45nv7Z6M6qdXYQGTX",
        name: "Kehlani",
        monthlyListeners: 16133534.0,
        followers: 7838169,
        imageUrl: "https://i.scdn.co/image/ab676161000051748e0e82502fa81c8a650ed67b",
        country: "US"
    },
    {
        id: "0KPX4Ucy9dk82uj4GpKesn",
        name: "Dalex",
        monthlyListeners: 14368589.0,
        followers: 4916832,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ff284180f08000247df12e2c",
        country: "PR"
    },
    {
        id: "25uiPmTg16RbhZWAqwLBy5",
        name: "Charli xcx",
        monthlyListeners: 43620838.0,
        followers: 3832748,
        imageUrl: "https://i.scdn.co/image/ab67616100005174936885667ef44c306483c838",
        country: "GB"
    },
    {
        id: "0GM7qgcRCORpGnfcN2tCiB",
        name: "Tainy",
        monthlyListeners: 22376564.0,
        followers: 2242487,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b50d43598b9074f0d6146127",
        country: "PR"
    },
    {
        id: "05fG473iIaoy82BF1aGhL8",
        name: "Slipknot",
        monthlyListeners: 13781871.0,
        followers: 11566681,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d0cdb283a7384a0edb665182",
        country: "US"
    },
    {
        id: "3aQeKQSyrW4qWr35idm0cy",
        name: "T-Pain",
        monthlyListeners: 16432736.0,
        followers: 4964559,
        imageUrl: "https://i.scdn.co/image/ab6761610000517410b37a100a8628efe540d1ef",
        country: "US"
    },
    {
        id: "74XFHRwlV6OrjEM0A2NCMF",
        name: "Paramore",
        monthlyListeners: 21417600.0,
        followers: 8696369,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b10c34546a4ca2d7faeb8865",
        country: "US"
    },
    {
        id: "0A0FS04o6zMoto8OKPsDwY",
        name: "YG",
        monthlyListeners: 10252084.0,
        followers: 3326984,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c28a1368220e0da021f8433c",
        country: "US"
    },
    {
        id: "0NGAZxHanS9e0iNHpR8f2W",
        name: "Alok",
        monthlyListeners: 30493201.0,
        followers: 11290487,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f7d1bdca65e1cefd4e60c379",
        country: "BR"
    },
    {
        id: "0ZED1XzwlLHW4ZaG4lOT6m",
        name: "Julia Michaels",
        monthlyListeners: 17392558.0,
        followers: 5055302,
        imageUrl: "https://i.scdn.co/image/ab676161000051742c17882893491af059fb867e",
        country: "US"
    },
    {
        id: "37230BxxYs9ksS7OkZw3IU",
        name: "Chencho Corleone",
        monthlyListeners: 29918485.0,
        followers: 1048750,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a06db05ad057ef6e2c65e148",
        country: "PR"
    },
    {
        id: "6wWVKhxIU2cEi0K81v7HvP",
        name: "Rammstein",
        monthlyListeners: 12404400.0,
        followers: 10113436,
        imageUrl: "https://i.scdn.co/image/ab6761610000517432845b1556f9dbdfe8ee6575",
        country: "DE"
    },
    {
        id: "74KM79TiuVKeVCqs8QtB0B",
        name: "Sabrina Carpenter",
        monthlyListeners: 76059664.0,
        followers: 11240399,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e053b8338322b9c8609ee7ae",
        country: "US"
    },
    {
        id: "0C0XlULifJtAgn6ZNCW2eu",
        name: "The Killers",
        monthlyListeners: 28068686.0,
        followers: 7405810,
        imageUrl: "https://i.scdn.co/image/ab67616100005174207b21f3ed0ee96adce3166a",
        country: "US"
    },
    {
        id: "7EQ0qTo7fWT7DPxmxtSYEc",
        name: "Bastille",
        monthlyListeners: 22947318.0,
        followers: 5550561,
        imageUrl: "https://i.scdn.co/image/ab67616100005174309dcd7ca7e0a05c419ea52a",
        country: "GB"
    },
    {
        id: "2HPaUgqeutzr3jx5a9WyDV",
        name: "PARTYNEXTDOOR",
        monthlyListeners: 16920099.0,
        followers: 6927942,
        imageUrl: "https://i.scdn.co/image/ab67616100005174957320981e31e862bc2fb844",
        country: "CA"
    },
    {
        id: "5me0Irg2ANcsgc93uaYrpb",
        name: "The Notorious B.I.G.",
        monthlyListeners: 21024720.0,
        followers: 10549326,
        imageUrl: "https://i.scdn.co/image/1b4858fbd24046a81cace5ee18d19c868262b91f",
        country: "US"
    },
    {
        id: "3mIj9lX2MWuHmhNCA7LSCW",
        name: "The 1975",
        monthlyListeners: 13553638.0,
        followers: 7302570,
        imageUrl: "https://i.scdn.co/image/ab6761610000517489348336354096fd4e36ca73",
        country: "GB"
    },
    {
        id: "6tbjWDEIzxoDsBA1FuhfPW",
        name: "Madonna",
        monthlyListeners: 40922323.0,
        followers: 8012537,
        imageUrl: "https://i.scdn.co/image/ab676161000051744b36d28b55620959821f4a5b",
        country: "US"
    },
    {
        id: "3IYUhFvPQItj6xySrBmZkd",
        name: "Creedence Clearwater Revival",
        monthlyListeners: 38584706.0,
        followers: 6830149,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d2e2b04b7ba5d60b72f54506",
        country: "US"
    },
    {
        id: "12vb80Km0Ew53ABfJOepVz",
        name: "Ñengo Flow",
        monthlyListeners: 16106039.0,
        followers: 6352917,
        imageUrl: "https://i.scdn.co/image/ab67616100005174da3f48cf2309aacaab0edce2",
        country: "PR"
    },
    {
        id: "2dIgFjalVxs4ThymZ67YCE",
        name: "Stray Kids",
        monthlyListeners: 11806933.0,
        followers: 16444239,
        imageUrl: "https://i.scdn.co/image/ab6761610000517475237a1ba0379041476012b3",
        country: "KR"
    },
    {
        id: "1Mxqyy3pSjf8kZZL4QVxS0",
        name: "Frank Sinatra",
        monthlyListeners: 16732974.0,
        followers: 7338153,
        imageUrl: "https://i.scdn.co/image/fc4e0f474fb4c4cb83617aa884dc9fd9822d4411",
        country: "US"
    },
    {
        id: "5ZS223C6JyBfXasXxrRqOk",
        name: "Jhené Aiko",
        monthlyListeners: 12889082.0,
        followers: 8096195,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bc7ca5ae34cffbb572660ee3",
        country: "US"
    },
    {
        id: "3KV3p5EY4AvKxOlhGHORLg",
        name: "Jeremih",
        monthlyListeners: 14572381.0,
        followers: 6643062,
        imageUrl: "https://i.scdn.co/image/ab676161000051748ddeab89a67542470e2631c8",
        country: "US"
    },
    {
        id: "4V8Sr092TqfHkfAA5fXXqG",
        name: "Luis Fonsi",
        monthlyListeners: 21466074.0,
        followers: 10545883,
        imageUrl: "https://i.scdn.co/image/ab676161000051742620d7e19f51d9c4b7e853ce",
        country: "PR"
    },
    {
        id: "1HBjj22wzbscIZ9sEb5dyf",
        name: "Jonas Blue",
        monthlyListeners: 17550096.0,
        followers: 3762246,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c2ef6ee256ee38ee35f42df7",
        country: "GB"
    },
    {
        id: "0oSGxfWSnnOXhD2fKuz2Gy",
        name: "David Bowie",
        monthlyListeners: 17043730.0,
        followers: 10648290,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b78f77c5583ae99472dd4a49",
        country: "GB"
    },
    {
        id: "51Blml2LZPmy7TTiAg47vQ",
        name: "U2",
        monthlyListeners: 20755378.0,
        followers: 12417379,
        imageUrl: "https://i.scdn.co/image/ab6761610000517476e8d4043d65d5b90dd620c6",
        country: "IE"
    },
    {
        id: "3tlXnStJ1fFhdScmQeLpuG",
        name: "Brent Faiyaz",
        monthlyListeners: 22426793.0,
        followers: 6305990,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e187dca750abfd3688836309",
        country: "US"
    },
    {
        id: "4zCH9qm4R2DADamUHMCa6O",
        name: "Anirudh Ravichander",
        monthlyListeners: 21747607.0,
        followers: 31321682,
        imageUrl: "https://i.scdn.co/image/ab676161000051740f0be2054fe9594026a6b843",
        country: "IN"
    },
    {
        id: "3WGpXCj9YhhfX11TToZcXP",
        name: "Troye Sivan",
        monthlyListeners: 22711454.0,
        followers: 8234304,
        imageUrl: "https://i.scdn.co/image/ab6761610000517426e8cb3ff6fc7744b312811b",
        country: "AU"
    },
    {
        id: "163tK9Wjr9P9DmM0AVK7lm",
        name: "Lorde",
        monthlyListeners: 21069730.0,
        followers: 10026089,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c4902f080d3620b3e6da80c3",
        country: "NZ"
    },
    {
        id: "6Te49r3A6f5BiIgBRxH7FH",
        name: "Ninho",
        monthlyListeners: 6571511.0,
        followers: 10058039,
        imageUrl: "https://i.scdn.co/image/ab67616100005174791b1ecfe6f3101115430fb5",
        country: "FR"
    },
    {
        id: "1l7ZsJRRS8wlW3WfJfPfNS",
        name: "Christina Aguilera",
        monthlyListeners: 26879690.0,
        followers: 8406820,
        imageUrl: "https://i.scdn.co/image/ab67616100005174371cba21c6962a457c550b81",
        country: "US"
    },
    {
        id: "6FBDaR13swtiWwGhX1WQsP",
        name: "blink-182",
        monthlyListeners: 20564721.0,
        followers: 8406295,
        imageUrl: "https://i.scdn.co/image/ab676161000051745da36f8b98dd965336a1507a",
        country: "US"
    },
    {
        id: "6LqNN22kT3074XbTVUrhzX",
        name: "Kesha",
        monthlyListeners: 35432254.0,
        followers: 8084076,
        imageUrl: "https://i.scdn.co/image/ab676161000051742ac07249400857d8b16dc17a",
        country: "US"
    },
    {
        id: "7jy3rLJdDQY21OgRLCZ9sD",
        name: "Foo Fighters",
        monthlyListeners: 20283775.0,
        followers: 11921133,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15",
        country: "US"
    },
    {
        id: "5XJDexmWFLWOkjOEjOVX3e",
        name: "Eladio Carrion",
        monthlyListeners: 16488881.0,
        followers: 7413760,
        imageUrl: "https://i.scdn.co/image/ab6761610000517466465185373d360ded208ecb",
        country: "PR"
    },
    {
        id: "20wkVLutqVOYrc0kxFs7rA",
        name: "Daniel Caesar",
        monthlyListeners: 28292713.0,
        followers: 6362850,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e5bc630548fb3517cf90edb8",
        country: "CA"
    },
    {
        id: "43ZHCT0cAZBISjO8DG9PnE",
        name: "Elvis Presley",
        monthlyListeners: 24646087.0,
        followers: 9746488,
        imageUrl: "https://i.scdn.co/image/ab676161000051749a93e273380982dff84c0d7c",
        country: "US"
    },
    {
        id: "45dkTj5sMRSjrmBSBeiHym",
        name: "Tate McRae",
        monthlyListeners: 40558235.0,
        followers: 5723433,
        imageUrl: "https://i.scdn.co/image/ab67616100005174846308bf9bf7d3183958b3a6",
        country: "CA"
    },
    {
        id: "0Q8NcsJwoCbZOHHW63su5S",
        name: "Mora",
        monthlyListeners: 19211644.0,
        followers: 5662220,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c8f6d4d6eb8e7dd5206bd5f4",
        country: "PR"
    },
    {
        id: "1z7b1Pr1rSlvWRzsW3HOrS",
        name: "Russ",
        monthlyListeners: 14169491.0,
        followers: 5189507,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ff58853777d52a0bbb1a78da",
        country: "US"
    },
    {
        id: "5eAWCfyUhZtHHtBdNk56l1",
        name: "System Of A Down",
        monthlyListeners: 23353404.0,
        followers: 11100681,
        imageUrl: "https://i.scdn.co/image/ab6761610000517460063d3451ade8f9fab397c2",
        country: "US"
    },
    {
        id: "2wUjUUtkb5lvLKcGKsKqsR",
        name: "Alessia Cara",
        monthlyListeners: 15034442.0,
        followers: 11809600,
        imageUrl: "https://i.scdn.co/image/ab676161000051746cde43f126518af0ef8eddc2",
        country: "CA"
    },
    {
        id: "3b8QkneNDz4JHKKKlLgYZg",
        name: "Florida Georgia Line",
        monthlyListeners: 10598786.0,
        followers: 5439320,
        imageUrl: "https://i.scdn.co/image/ab67616100005174aa2d9bd207a62adc3edf6631",
        country: "US"
    },
    {
        id: "0LcJLqbBmaGUft1e9Mm8HV",
        name: "ABBA",
        monthlyListeners: 33755200.0,
        followers: 12674737,
        imageUrl: "https://i.scdn.co/image/ab67616100005174124eba6bf3476404531bd7b2",
        country: "SE"
    },
    {
        id: "6MDME20pz9RveH9rEXvrOM",
        name: "Clean Bandit",
        monthlyListeners: 26133623.0,
        followers: 5509965,
        imageUrl: "https://i.scdn.co/image/ab6761610000517470d80b8ab8e193aef64223ec",
        country: "GB"
    },
    {
        id: "1TtXnWcUs0FCkaZDPGYHdf",
        name: "Darell",
        monthlyListeners: 14401225.0,
        followers: 4484053,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bcc279fb81c47b912cc7dd28",
        country: "PR"
    },
    {
        id: "52iwsT98xCoGgiGntTiR7K",
        name: "Quevedo",
        monthlyListeners: 27328281.0,
        followers: 4948095,
        imageUrl: "https://i.scdn.co/image/ab676161000051746bb5ca52323ab20a1bd5db9c",
        country: "ES"
    },
    {
        id: "7n2Ycct7Beij7Dj7meI4X0",
        name: "TWICE",
        monthlyListeners: 8734087.0,
        followers: 20597275,
        imageUrl: "https://i.scdn.co/image/ab676161000051740c6952f39ba680489149a54c",
        country: "KR"
    },
    {
        id: "3DiDSECUqqY1AuBP8qtaIa",
        name: "Alicia Keys",
        monthlyListeners: 32675866.0,
        followers: 11990092,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ebfd16a3bca87c31c1e20576",
        country: "US"
    },
    {
        id: "2IMZYfNi21MGqxopj9fWx8",
        name: "Rels B",
        monthlyListeners: 22628067.0,
        followers: 7703817,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d1e399fd6729a5751e1f4331",
        country: "ES"
    },
    {
        id: "5INjqkS1o8h1imAzPqGZBb",
        name: "Tame Impala",
        monthlyListeners: 26727633.0,
        followers: 8040785,
        imageUrl: "https://i.scdn.co/image/ab6761610000517490357ef28b3a012a1d1b2fa2",
        country: "AU"
    },
    {
        id: "20sxb77xiYeusSH8cVdatc",
        name: "Meek Mill",
        monthlyListeners: 12314634.0,
        followers: 7924441,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c14756c27212bdea80f6cfac",
        country: "US"
    },
    {
        id: "2feDdbD5araYcm6JhFHHw7",
        name: "Labrinth",
        monthlyListeners: 24385057.0,
        followers: 3291903,
        imageUrl: "https://i.scdn.co/image/ab676161000051747885d725841e0338092f5f6f",
        country: "GB"
    },
    {
        id: "63yrD80RY3RNEM2YDpUpO8",
        name: "Melanie Martinez",
        monthlyListeners: 14608491.0,
        followers: 21081929,
        imageUrl: "https://i.scdn.co/image/ab6761610000517477ecd63aaebe2225b07c89f0",
        country: "US"
    },
    {
        id: "7MiDcPa6UiV3In7lIM71IN",
        name: "Gusttavo Lima",
        monthlyListeners: 13144306.0,
        followers: 21430078,
        imageUrl: "https://i.scdn.co/image/ab676161000051740938ff15a7660823a551b048",
        country: "BR"
    },
    {
        id: "1bfl0AU8SqmLkElptOprhC",
        name: "Julión Álvarez y su Norteño Banda",
        monthlyListeners: 15426654.0,
        followers: 5941088,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d67a054187edc32f174c450c",
        country: "FR"
    },
    {
        id: "1sBkRIssrMs1AbVkOJbc7a",
        name: "Rick Ross",
        monthlyListeners: 12411597.0,
        followers: 7307907,
        imageUrl: "https://i.scdn.co/image/ab676161000051748196a8109c28a8b8aca28fae",
        country: "US"
    },
    {
        id: "4Z8W4fKeB5YxbusRsdQVPb",
        name: "Radiohead",
        monthlyListeners: 28263733.0,
        followers: 10327714,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a03696716c9ee605006047fd",
        country: "GB"
    },
    {
        id: "0vR2qb8m9WHeZ5ByCbimq2",
        name: "Reik",
        monthlyListeners: 20576117.0,
        followers: 8904395,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f87c48cbd2ebcb0a66ce8ae1",
        country: "MX"
    },
    {
        id: "0eHQ9o50hj6ZDNBt6Ys1sD",
        name: "Yandel",
        monthlyListeners: 20837284.0,
        followers: 7843556,
        imageUrl: "https://i.scdn.co/image/ab67616100005174743290c5438763d36861766b",
        country: "PR"
    },
    {
        id: "6JL8zeS1NmiOftqZTRgdTz",
        name: "Meghan Trainor",
        monthlyListeners: 27254340.0,
        followers: 15313334,
        imageUrl: "https://i.scdn.co/image/ab67616100005174365984489dac7a79eac204e3",
        country: "US"
    },
    {
        id: "5he5w2lnU9x7JFhnwcekXX",
        name: "Skrillex",
        monthlyListeners: 19518422.0,
        followers: 7611658,
        imageUrl: "https://i.scdn.co/image/ab6761610000517461f92702ca14484aa263a931",
        country: "US"
    },
    {
        id: "2C6i0I5RiGzDKN9IAF8reh",
        name: "Banda MS de Sergio Lizárraga",
        monthlyListeners: 17960472.0,
        followers: 17508805,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f21390bf6f7fe0c469913a85",
        country: "MX"
    },
    {
        id: "7qG3b048QCHVRO5Pv1T5lw",
        name: "Enrique Iglesias",
        monthlyListeners: 27191805.0,
        followers: 11038219,
        imageUrl: "https://i.scdn.co/image/ab6761610000517495bd4e059ac547c2c6eb1da7",
        country: "ES"
    },
    {
        id: "360IAlyVv4PCEVjgyMZrxK",
        name: "Miguel",
        monthlyListeners: 29884508.0,
        followers: 5176041,
        imageUrl: "https://i.scdn.co/image/ab676161000051744669166b571594eade778990",
        country: "US"
    },
    {
        id: "4iHNK0tOyZPYnBU7nGAgpQ",
        name: "Mariah Carey",
        monthlyListeners: 25096653.0,
        followers: 10258894,
        imageUrl: "https://i.scdn.co/image/ab6761610000517421b66418f7f3b86967f85bce",
        country: "US"
    },
    {
        id: "1GxkXlMwML1oSg5eLPiAz3",
        name: "Michael Bublé",
        monthlyListeners: 14442229.0,
        followers: 6356782,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ecf79fd5be85dabb0f489107",
        country: "CA"
    },
    {
        id: "22bE4uQ6baNwSHPVcDxLCe",
        name: "The Rolling Stones",
        monthlyListeners: 28470186.0,
        followers: 14297463,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e4cea917b68726aadb4854b8",
        country: "GB"
    },
    {
        id: "3e7awlrlDSwF3iM0WBjGMp",
        name: "Little Mix",
        monthlyListeners: 14924652.0,
        followers: 12006261,
        imageUrl: "https://i.scdn.co/image/ab6761610000517408cd53940cbf5813ee5fe565",
        country: "GB"
    },
    {
        id: "0QHgL1lAIqAw0HtD7YldmP",
        name: "DJ Khaled",
        monthlyListeners: 20484352.0,
        followers: 11624747,
        imageUrl: "https://i.scdn.co/image/ab67616100005174084f36c2ae2da4a02494e1e5",
        country: "US"
    },
    {
        id: "66ihevNkSYNzRAl44dx6jJ",
        name: "Carin Leon",
        monthlyListeners: 30910259.0,
        followers: 12479376,
        imageUrl: "https://i.scdn.co/image/ab67616100005174374620b17c4a16d8c99f2369",
        country: "MX"
    },
    {
        id: "4npEfmQ6YuiwW1GpUmaq3F",
        name: "Ava Max",
        monthlyListeners: 32164265.0,
        followers: 7037387,
        imageUrl: "https://i.scdn.co/image/ab6761610000517456d2d8d16ddedbf61b1c74f0",
        country: "US"
    },
    {
        id: "181bsRPaVXVlUKXrxwZfHK",
        name: "Megan Thee Stallion",
        monthlyListeners: 34020966.0,
        followers: 9592297,
        imageUrl: "https://i.scdn.co/image/ab676161000051743bd9fe71c49b7940786b852f",
        country: "US"
    },
    {
        id: "5y2Xq6xcjJb2jVM54GHK3t",
        name: "John Legend",
        monthlyListeners: 22209082.0,
        followers: 6898335,
        imageUrl: "https://i.scdn.co/image/ab6761610000517401784e44ffd1a339350f4417",
        country: "US"
    },
    {
        id: "3AA28KZvwAUcZuOKwyblJQ",
        name: "Gorillaz",
        monthlyListeners: 25766010.0,
        followers: 11993843,
        imageUrl: "https://i.scdn.co/image/ab676161000051742c61d9506d5af5fb502b343f",
        country: "GB"
    },
    {
        id: "3qm84nBOXUEQ2vnTfUTTFC",
        name: "Guns N' Roses",
        monthlyListeners: 31609314.0,
        followers: 31455322,
        imageUrl: "https://i.scdn.co/image/ab6761610000517450defaf9fc059a1efc541f4c",
        country: "US"
    },
    {
        id: "0k17h0D3J5VfsdmQ1iZtE9",
        name: "Pink Floyd",
        monthlyListeners: 18679673.0,
        followers: 20693049,
        imageUrl: "https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa",
        country: "GB"
    },
    {
        id: "6DPYiyq5kWVQS4RGwxzPC7",
        name: "Dr. Dre",
        monthlyListeners: 24000236.0,
        followers: 12176198,
        imageUrl: "https://i.scdn.co/image/83d2489cade1dadcdc533ddbcd74993d0ca6d4cb",
        country: "US"
    },
    {
        id: "1ZwdS5xdxEREPySFridCfh",
        name: "2Pac",
        monthlyListeners: 22644178.0,
        followers: 18585095,
        imageUrl: "https://i.scdn.co/image/ab676161000051747f5cc432c9c109248ebec1ac",
        country: "US"
    },
    {
        id: "6vXTefBL93Dj5IqAWq6OTv",
        name: "French Montana",
        monthlyListeners: 24996744.0,
        followers: 5492143,
        imageUrl: "https://i.scdn.co/image/ab676161000051747b75b0e84293bf1ccf24a39c",
        country: "US"
    },
    {
        id: "21451j1KhjAiaYKflxBjr1",
        name: "Zion & Lennox",
        monthlyListeners: 18067214.0,
        followers: 7664981,
        imageUrl: "https://i.scdn.co/image/ab67616100005174fa844599a8631cca451a93e5",
        country: "US"
    },
    {
        id: "4Gso3d4CscCijv0lmajZWs",
        name: "Don Toliver",
        monthlyListeners: 30532128.0,
        followers: 4760080,
        imageUrl: "https://i.scdn.co/image/ab6761610000517462d52993e245cb161f89b01c",
        country: "US"
    },
    {
        id: "1anyVhU62p31KFi8MEzkbf",
        name: "Chance the Rapper",
        monthlyListeners: 9455671.0,
        followers: 6014999,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a6ab3c4df02cec59758ae3fa",
        country: "US"
    },
    {
        id: "5JZ7CnR6gTvEMKX4g70Amv",
        name: "Lauv",
        monthlyListeners: 16902562.0,
        followers: 6267203,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b173d69f77530d77a991984f",
        country: "US"
    },
    {
        id: "2EMAnMvWE2eb56ToJVfCWs",
        name: "Bryson Tiller",
        monthlyListeners: 23571330.0,
        followers: 8798429,
        imageUrl: "https://i.scdn.co/image/ab67616100005174078fdd734b7f0aa782328428",
        country: "US"
    },
    {
        id: "73sIBHcqh3Z3NyqHKZ7FOL",
        name: "Childish Gambino",
        monthlyListeners: 28835593.0,
        followers: 13194292,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c3dc5429b676b16d451e5f77",
        country: "US"
    },
    {
        id: "0XwVARXT135rw8lyw1EeWP",
        name: "Christian Nodal",
        monthlyListeners: 23275758.0,
        followers: 14813257,
        imageUrl: "https://i.scdn.co/image/ab67616100005174df95a45b94548f0fe5477704",
        country: "MX"
    },
    {
        id: "21E3waRsmPlU7jZsS13rcj",
        name: "Ne-Yo",
        monthlyListeners: 38489723.0,
        followers: 9026501,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ca118e3822061f7b7f6bc537",
        country: "US"
    },
    {
        id: "1Xylc3o4UrD53lo9CvFvVg",
        name: "Zara Larsson",
        monthlyListeners: 25523529.0,
        followers: 10520133,
        imageUrl: "https://i.scdn.co/image/ab676161000051747619ca2683b434e139040f70",
        country: "SE"
    },
    {
        id: "1elUiq4X7pxej6FRlrEzjM",
        name: "Jorge & Mateus",
        monthlyListeners: 12457861.0,
        followers: 19720040,
        imageUrl: "https://i.scdn.co/image/ab676161000051749440f52cfdae9bd6dda77846",
        country: "BR"
    },
    {
        id: "2qxJFvFYMEDqd7ui6kSAcq",
        name: "Zedd",
        monthlyListeners: 15755456.0,
        followers: 5943409,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f801e3d9ecb568a1c3c62393",
        country: "DE"
    },
    {
        id: "6jGMq4yGs7aQzuGsMgVgZR",
        name: "Lil Tjay",
        monthlyListeners: 13657967.0,
        followers: 8814218,
        imageUrl: "https://i.scdn.co/image/ab6761610000517461a229ac35bdd68d42bffe32",
        country: "US"
    },
    {
        id: "5ZsFI1h6hIdQRw2ti0hz81",
        name: "ZAYN",
        monthlyListeners: 25131118.0,
        followers: 23157334,
        imageUrl: "https://i.scdn.co/image/ab676161000051747a1fba1bb3618ef71355f82a",
        country: "GB"
    },
    {
        id: "5C4PDR4LnhZTbVnKWXuDKD",
        name: "Morat",
        monthlyListeners: 14877354.0,
        followers: 11661707,
        imageUrl: "https://i.scdn.co/image/ab6761610000517408c3b70e494bd0ea0ef56fb7",
        country: "CO"
    },
    {
        id: "2LIk90788K0zvyj2JJVwkJ",
        name: "Jack Harlow",
        monthlyListeners: 29681293.0,
        followers: 3899850,
        imageUrl: "https://i.scdn.co/image/ab676161000051742aab40ce03f3fa86163f78bb",
        country: "US"
    },
    {
        id: "40ZNYROS4zLfyyBSs2PGe2",
        name: "Zach Bryan",
        monthlyListeners: 33349827.0,
        followers: 4814567,
        imageUrl: "https://i.scdn.co/image/ab676161000051744fd54df35bfcfa0fc9fc2da7",
        country: "US"
    },
    {
        id: "0ys2OFYzWYB5hRDLCsBqxt",
        name: "Fuerza Regida",
        monthlyListeners: 28982316.0,
        followers: 10737471,
        imageUrl: "https://i.scdn.co/image/ab676161000051747e2545f678354fc859de15f1",
        country: "MX"
    },
    {
        id: "3t5xRXzsuZmMDkQzgOX35S",
        name: "Robin Schulz",
        monthlyListeners: 27435020.0,
        followers: 3109651,
        imageUrl: "https://i.scdn.co/image/ab6761610000517482c0d0d4ef6742997f03d678",
        country: "DE"
    },
    {
        id: "28gNT5KBp7IjEOQoevXf9N",
        name: "Camilo",
        monthlyListeners: 22578045.0,
        followers: 19133641,
        imageUrl: "https://i.scdn.co/image/ab676161000051744d8a681290f905bc52a05c5c",
        country: "ES"
    },
    {
        id: "3JhNCzhSMTxs9WLGJJxWOY",
        name: "Macklemore",
        monthlyListeners: 32259004.0,
        followers: 2364119,
        imageUrl: "https://i.scdn.co/image/ab67616100005174488b3b242f97163a7f8e17b9",
        country: "US"
    },
    {
        id: "6icQOAFXDZKsumw3YXyusw",
        name: "Lil Yachty",
        monthlyListeners: 18350577.0,
        followers: 10120097,
        imageUrl: "https://i.scdn.co/image/ab6761610000517486c7c38d4c8c461dba55035c",
        country: "US"
    },
    {
        id: "5Rl15oVamLq7FbSb0NNBNy",
        name: "5 Seconds of Summer",
        monthlyListeners: 18923647.0,
        followers: 10023215,
        imageUrl: "https://i.scdn.co/image/ab676161000051745048d9616b459ef90f04b6d8",
        country: "AU"
    },
    {
        id: "1zNqDE7qDGCsyzJwohVaoX",
        name: "Anne-Marie",
        monthlyListeners: 34434895.0,
        followers: 12037981,
        imageUrl: "https://i.scdn.co/image/ab67616100005174679c995b0d4a641ba32aa5f0",
        country: "GB"
    },
    {
        id: "7ltDVBr6mKbRvohxheJ9h1",
        name: "ROSALÍA",
        monthlyListeners: 30076719.0,
        followers: 8257815,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d7bb678bef6d2f26110cae49",
        country: "ES"
    },
    {
        id: "2QsynagSdAqZj3U9HgDzjD",
        name: "Bob Marley & The Wailers",
        monthlyListeners: 27529871.0,
        followers: 12533389,
        imageUrl: "https://i.scdn.co/image/b5aae2067db80f694a980e596e7f49618c1206c9",
        country: "JM"
    },
    {
        id: "08GQAI4eElDnROBrJRGE0X",
        name: "Fleetwood Mac",
        monthlyListeners: 35756917.0,
        followers: 11879113,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c8752dd511cda8c31e9daee8",
        country: "GB"
    },
    {
        id: "2cFrymmkijnjDg9SS92EPM",
        name: "blackbear",
        monthlyListeners: 15182343.0,
        followers: 4971933,
        imageUrl: "https://i.scdn.co/image/ab676161000051744f7d049994ac00ed885bfbf2",
        country: "US"
    },
    {
        id: "4obzFoKoKRHIphyHzJ35G3",
        name: "Becky G",
        monthlyListeners: 30242077.0,
        followers: 14921941,
        imageUrl: "https://i.scdn.co/image/ab67616100005174fd04d1d094cd3dc59d00dffc",
        country: "US"
    },
    {
        id: "6TIYQ3jFPwQSRmorSezPxX",
        name: "mgk",
        monthlyListeners: 16617303.0,
        followers: 5336920,
        imageUrl: "https://i.scdn.co/image/ab676161000051746659c0c409fee150c1f7c879",
        country: "US"
    },
    {
        id: "1yxSLGMDHlW21z4YXirZDS",
        name: "Black Eyed Peas",
        monthlyListeners: 42962631.0,
        followers: 8319508,
        imageUrl: "https://i.scdn.co/image/ab676161000051743dcf18f1c35134cc7e2cb6d3",
        country: "US"
    },
    {
        id: "0jnsk9HBra6NMjO2oANoPY",
        name: "Flo Rida",
        monthlyListeners: 33112214.0,
        followers: 8603518,
        imageUrl: "https://i.scdn.co/image/ab67616100005174655ca8f3196953554b479452",
        country: "US"
    },
    {
        id: "7oPftvlwr6VrsViSDV7fJY",
        name: "Green Day",
        monthlyListeners: 33901182.0,
        followers: 15254918,
        imageUrl: "https://i.scdn.co/image/ab676161000051746ff0cd5ef2ecf733804984bb",
        country: "US"
    },
    {
        id: "3MZsBdqDrRTJihTHQrO6Dq",
        name: "Joji",
        monthlyListeners: 18869952.0,
        followers: 9702410,
        imageUrl: "https://i.scdn.co/image/ab676161000051744111c95b5f430c3265c7304b",
        country: "US"
    },
    {
        id: "1pQWsZQehhS4wavwh7Fnxd",
        name: "Lenny Tavárez",
        monthlyListeners: 18470178.0,
        followers: 2895386,
        imageUrl: "https://i.scdn.co/image/ab6761610000517417d173a70c7bf62e74ad98d3",
        country: "PR"
    },
    {
        id: "0hEurMDQu99nJRq8pTxO14",
        name: "John Mayer",
        monthlyListeners: 17137585.0,
        followers: 6018686,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e926dd683e1700a6d65bd835",
        country: "US"
    },
    {
        id: "4GNC7GD6oZMSxPGyXy4MNB",
        name: "Lewis Capaldi",
        monthlyListeners: 32757701.0,
        followers: 12714079,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ea7538654040e553a7b0fc28",
        country: "GB"
    },
    {
        id: "1U1el3k54VvEUzo3ybLPlM",
        name: "Kali Uchis",
        monthlyListeners: 31172971.0,
        followers: 7723710,
        imageUrl: "https://i.scdn.co/image/ab6761610000517451dfdac248da65a860963b68",
        country: "US"
    },
    {
        id: "3z7uejI6VjINKO4LQXxMuz",
        name: "Anitta",
        monthlyListeners: 30371869,
        followers: 95,
        imageUrl: "https://i.scdn.co/image/ab6761610000517403479cd9d2eec574230368d4",
        country: "BR"
    },
    {
        id: "2tIP7SsRs7vjIcLrU85W8J",
        name: "The Kid LAROI",
        monthlyListeners: 45166006.0,
        followers: 5546907,
        imageUrl: "https://i.scdn.co/image/ab67616100005174393666951ab8b14e9c4ed386",
        country: "AU"
    },
    {
        id: "2FXC3k01G6Gw61bmprjgqS",
        name: "Hozier",
        monthlyListeners: 54191469.0,
        followers: 7653022,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ad85a585103dfc2f3439119a",
        country: "IE"
    },
    {
        id: "3p7PcrEHaaKLJnPUGOtRlT",
        name: "Henrique & Juliano",
        monthlyListeners: 14736669.0,
        followers: 22788650,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b713c619cc12ca1866136419",
        country: "BR"
    },
    {
        id: "738wLrAtLtCtFOLvQBXOXp",
        name: "Major Lazer",
        monthlyListeners: 31159774.0,
        followers: 6177950,
        imageUrl: "https://i.scdn.co/image/ab67616100005174133f44ab343b35c715a4ac97",
        country: "JM"
    },
    {
        id: "26dSoYclwsYLMAKD3tpOr4",
        name: "Britney Spears",
        monthlyListeners: 39885116.0,
        followers: 15058197,
        imageUrl: "https://i.scdn.co/image/ab676161000051743a49b0a3954e460a8a76ed90",
        country: "US"
    },
    {
        id: "6fOMl44jA4Sp5b9PpYCkzz",
        name: "NF",
        monthlyListeners: 13940672.0,
        followers: 10140572,
        imageUrl: "https://i.scdn.co/image/ab676161000051741cf142a710a2f3d9b7a62da1",
        country: "US"
    },
    {
        id: "0z4gvV4rjIZ9wHck67ucSV",
        name: "Akon",
        monthlyListeners: 29482320.0,
        followers: 4805468,
        imageUrl: "https://i.scdn.co/image/ab6761610000517414020d1e8b482b6e1c5e720d",
        country: "SN"
    },
    {
        id: "60d24wfXkVzDSfLS6hyCjZ",
        name: "Martin Garrix",
        monthlyListeners: 22215024.0,
        followers: 15061662,
        imageUrl: "https://i.scdn.co/image/ab6761610000517445c3688488f871aace7a4a57",
        country: "NL"
    },
    {
        id: "6olE6TJLqED3rqDCT0FyPh",
        name: "Nirvana",
        monthlyListeners: 32027895.0,
        followers: 20012476,
        imageUrl: "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
        country: "US"
    },
    {
        id: "1bAftSH8umNcGZ0uyV7LMg",
        name: "Duki",
        monthlyListeners: 18390327.0,
        followers: 11001814,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b970a6d0f33428393c578f1a",
        country: "AR"
    },
    {
        id: "0fA0VVWsXO9YnASrzqfmYu",
        name: "Kid Cudi",
        monthlyListeners: 23040266.0,
        followers: 7164236,
        imageUrl: "https://i.scdn.co/image/ab67616100005174876faa285687786c3d314ae0",
        country: "US"
    },
    {
        id: "4UXqAaa6dQYAk18Lv7PEgX",
        name: "Fall Out Boy",
        monthlyListeners: 23990156.0,
        followers: 10795059,
        imageUrl: "https://i.scdn.co/image/ab67616100005174362011ebe6064c38e97e9aac",
        country: "US"
    },
    {
        id: "2RdwBSPQiwcmiDo9kixcl8",
        name: "Pharrell Williams",
        monthlyListeners: 35381615.0,
        followers: 4705675,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f0789cd783c20985ec3deb4e",
        country: "US"
    },
    {
        id: "33ScadVnbm2X8kkUqOkC6Z",
        name: "Don Omar",
        monthlyListeners: 37915883.0,
        followers: 12190550,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e1a911f620f24ffa1c736346",
        country: "PR"
    },
    {
        id: "7jVv8c5Fj3E9VhNjxT4snq",
        name: "Lil Nas X",
        monthlyListeners: 23875242.0,
        followers: 12408295,
        imageUrl: "https://i.scdn.co/image/ab676161000051740eefd7d68573ea8f0f4db84a",
        country: "US"
    },
    {
        id: "757aE44tKEUQEqRuT6GnEB",
        name: "Roddy Ricch",
        monthlyListeners: 19781988.0,
        followers: 10777754,
        imageUrl: "https://i.scdn.co/image/ab676161000051749c30c6b69a55d48decd71600",
        country: "US"
    },
    {
        id: "0elWFr7TW8piilVRYJUe4P",
        name: "Natanael Cano",
        monthlyListeners: 23769320.0,
        followers: 14481967,
        imageUrl: "https://i.scdn.co/image/ab676161000051740819edd43096a2f0dde7cd44",
        country: "MX"
    },
    {
        id: "4xRYI6VqpkE3UwrDrAZL8L",
        name: "Logic",
        monthlyListeners: 9486459.0,
        followers: 6084977,
        imageUrl: "https://i.scdn.co/image/ab6761610000517494678f7d5353a9b680f60d23",
        country: "US"
    },
    {
        id: "3hcs9uc56yIGFCSy9leWe7",
        name: "Lil Durk",
        monthlyListeners: 22108959.0,
        followers: 7863892,
        imageUrl: "https://i.scdn.co/image/ab6761610000517409791422702c3fa9780468d4",
        country: "US"
    },
    {
        id: "20JZFwl6HVl6yg8a4H3ZqK",
        name: "Panic! At The Disco",
        monthlyListeners: 22315938.0,
        followers: 12305132,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b256ae9a4b82bfff97776ae2",
        country: "US"
    },
    {
        id: "4DdkRBBYG6Yk9Ka8tdJ9BW",
        name: "Offset",
        monthlyListeners: 23959039.0,
        followers: 4266541,
        imageUrl: "https://i.scdn.co/image/ab67616100005174628143c3dd14fc995f925d56",
        country: "US"
    },
    {
        id: "23zg3TcAtWQy7J6upgbUnj",
        name: "USHER",
        monthlyListeners: 41638281.0,
        followers: 11912177,
        imageUrl: "https://i.scdn.co/image/ab67616100005174716114797a4a644c67c5fa72",
        country: "US"
    },
    {
        id: "3xvaSlT4xsyk6lY1ESOspO",
        name: "Disney",
        monthlyListeners: 26809766.0,
        followers: 586083,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c698d53b77db34027b00f853",
        country: "US"
    },
    {
        id: "2nszmSgqreHSdJA3zWPyrW",
        name: "Luis Miguel",
        monthlyListeners: 17434134.0,
        followers: 16369406,
        imageUrl: "https://i.scdn.co/image/ab676161000051746481401e529e475116702a29",
        country: "MX"
    },
    {
        id: "14zUHaJZo1mnYtn6IBRaRP",
        name: "Justin Quiles",
        monthlyListeners: 18027155.0,
        followers: 4639919,
        imageUrl: "https://i.scdn.co/image/ab67616100005174beba3686f2081e55ccea59e8",
        country: "PR"
    },
    {
        id: "17lzZA2AlOHwCwFALHttmp",
        name: "2 Chainz",
        monthlyListeners: 9498766.0,
        followers: 8067140,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f556662d187b9191c421be1c",
        country: "US"
    },
    {
        id: "2jku7tDXc6XoB6MO2hFuqg",
        name: "Tory Lanez",
        monthlyListeners: 23171383.0,
        followers: 6928960,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bd5d3e1b363c3e26710661c3",
        country: "CA"
    },
    {
        id: "1yR65psqiazQpeM79CcGh8",
        name: "Marília Mendonça",
        monthlyListeners: 12216956.0,
        followers: 34244830,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25",
        country: "BR"
    },
    {
        id: "716NhGYqD1jl2wI1Qkgq36",
        name: "Bizarrap",
        monthlyListeners: 32679890.0,
        followers: 16159396,
        imageUrl: "https://i.scdn.co/image/ab6761610000517414add0d3419426b84158b913",
        country: "AR"
    },
    {
        id: "711MCceyCBcFnzjGY4Q7Un",
        name: "AC/DC",
        monthlyListeners: 39746475.0,
        followers: 29105921,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c4c77549095c86acb4e77b37",
        country: "AU"
    },
    {
        id: "718COspgdWOnwOFpJHRZHS",
        name: "Luke Combs",
        monthlyListeners: 34881535.0,
        followers: 11153382,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bd634295d99c61823c517c3f",
        country: "US"
    },
    {
        id: "4IWBUUAFIplrNtaOHcJPRM",
        name: "James Arthur",
        monthlyListeners: 36929990.0,
        followers: 18037700,
        imageUrl: "https://i.scdn.co/image/ab676161000051742a0c6d0343c82be9dd6fce0b",
        country: "GB"
    },
    {
        id: "3Isy6kedDrgPYoTS1dazA9",
        name: "Sean Paul",
        monthlyListeners: 34200429.0,
        followers: 4813265,
        imageUrl: "https://i.scdn.co/image/ab6761610000517460c3e9abe7327c0097738f22",
        country: "JM"
    },
    {
        id: "13y7CgLHjMVRMDqxdx0Xdo",
        name: "Gucci Mane",
        monthlyListeners: 14910885.0,
        followers: 5597183,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b9b77f64bd278ffde2c94428",
        country: "US"
    },
    {
        id: "540vIaP2JwjQb9dm3aArA4",
        name: "DJ Snake",
        monthlyListeners: 35121982.0,
        followers: 8777320,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ca97cf089968b569e29d795c",
        country: "FR"
    },
    {
        id: "6AgTAQt8XS6jRWi4sX7w49",
        name: "Polo G",
        monthlyListeners: 20012781.0,
        followers: 11651917,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bedf3bdf589da06d1567196c",
        country: "US"
    },
    {
        id: "1KCSPY1glIKqW2TotWuXOR",
        name: "P!nk",
        monthlyListeners: 37231369.0,
        followers: 16974189,
        imageUrl: "https://i.scdn.co/image/ab676161000051747bbad89a61061304ec842588",
        country: "US"
    },
    {
        id: "77SW9BnxLY8rJ0RciFqkHh",
        name: "The Neighbourhood",
        monthlyListeners: 42811099.0,
        followers: 17445495,
        imageUrl: "https://i.scdn.co/image/ab67616100005174df0b5ac84376a0a4b2166816",
        country: "US"
    },
    {
        id: "0X2BH1fck6amBIoJhDVmmJ",
        name: "Ellie Goulding",
        monthlyListeners: 43653512.0,
        followers: 12517542,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c3cd7dc428871e8985d62b9a",
        country: "GB"
    },
    {
        id: "31TPClRtHm23RisEBtV3X7",
        name: "Justin Timberlake",
        monthlyListeners: 38916618.0,
        followers: 14379286,
        imageUrl: "https://i.scdn.co/image/ab676161000051747a5cfe2597665a3d160e805e",
        country: "US"
    },
    {
        id: "5fMUXHkw8R8eOP2RNVYEZX",
        name: "Diplo",
        monthlyListeners: 34134724.0,
        followers: 2656487,
        imageUrl: "https://i.scdn.co/image/ab67616100005174df01727aa674ddefa777797a",
        country: "US"
    },
    {
        id: "2kCcBybjl3SAtIcwdWpUe3",
        name: "Lil Peep",
        monthlyListeners: 16521164.0,
        followers: 12680631,
        imageUrl: "https://i.scdn.co/image/ab676161000051743d9d59e200e82fa53d8781a1",
        country: "US"
    },
    {
        id: "02kJSzxNuaWGqwubyUba0Z",
        name: "G-Eazy",
        monthlyListeners: 21787264.0,
        followers: 5393060,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b796c0db7acaf3f1b71d1e3b",
        country: "US"
    },
    {
        id: "6nVcHLIgY5pE2YCl8ubca1",
        name: "JHAYCO",
        monthlyListeners: 28956201.0,
        followers: 7935606,
        imageUrl: "https://i.scdn.co/image/ab67616100005174cc45cb8a69f59976e2895b8c",
        country: "PR"
    },
    {
        id: "4tZwfgrHOc3mvqYlEYSvVi",
        name: "Daft Punk",
        monthlyListeners: 21627869.0,
        followers: 10072290,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a7bfd7835b5c1eee0c95fa6e",
        country: "FR"
    },
    {
        id: "7vk5e3vY1uw9plTHJAMwjN",
        name: "Alan Walker",
        monthlyListeners: 30401825.0,
        followers: 39181133,
        imageUrl: "https://i.scdn.co/image/ab67616100005174bf753c009fd9c2d53351dd3c",
        country: "NO"
    },
    {
        id: "3meJIgRw7YleJrmbpbJK6S",
        name: "Die drei ???",
        monthlyListeners: 923404.0,
        followers: 1069766,
        imageUrl: "https://i.scdn.co/image/ab676161000051747de827ab626c867816052015",
        country: "DE"
    },
    {
        id: "5lwmRuXgjX8xIwlnauTZIP",
        name: "Romeo Santos",
        monthlyListeners: 29516643.0,
        followers: 21948850,
        imageUrl: "https://i.scdn.co/image/ab676161000051746d8b48abede0f9e433aa6e49",
        country: "US"
    },
    {
        id: "2ye2Wgw4gimLv2eAKyk1NB",
        name: "Metallica",
        monthlyListeners: 27135709.0,
        followers: 28042931,
        imageUrl: "https://i.scdn.co/image/ab6761610000517469ca98dd3083f1082d740e44",
        country: "US"
    },
    {
        id: "41MozSoPIsD1dJM0CLPjZF",
        name: "BLACKPINK",
        monthlyListeners: 16265384.0,
        followers: 50449007,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c9690bc711d04b3d4fd4b87c",
        country: "KR"
    },
    {
        id: "7Gi6gjaWy3DxyilpF1a8Is",
        name: "Junior H",
        monthlyListeners: 25027161.0,
        followers: 18170655,
        imageUrl: "https://i.scdn.co/image/ab6761610000517450998d90507d8c1603b2530b",
        country: "MX"
    },
    {
        id: "0tmwSHipWxN12fsoLcFU3B",
        name: "Manuel Turizo",
        monthlyListeners: 39279303.0,
        followers: 13855598,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ef3d15322d9fbdcadefaf326",
        country: "CO"
    },
    {
        id: "6oMuImdp5ZcFhWP0ESe6mG",
        name: "Migos",
        monthlyListeners: 18904478.0,
        followers: 13954319,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f4593f7b778219838d858c34",
        country: "US"
    },
    {
        id: "07YUOmWljBTXwIseAUd9TW",
        name: "Sebastian Yatra",
        monthlyListeners: 23887124.0,
        followers: 22842944,
        imageUrl: "https://i.scdn.co/image/ab67616100005174650a498358171e1990efeeff",
        country: "CO"
    },
    {
        id: "0c173mlxpT3dSFRgMO8XPh",
        name: "Big Sean",
        monthlyListeners: 23216082.0,
        followers: 11185376,
        imageUrl: "https://i.scdn.co/image/ab676161000051743d5b14b45d4c3d10d23b03ff",
        country: "US"
    },
    {
        id: "46SHBwWsqBkxI7EeeBEQG7",
        name: "Kodak Black",
        monthlyListeners: 27022507.0,
        followers: 10816526,
        imageUrl: "https://i.scdn.co/image/ab6761610000517470c05cf4dc9a7d3ffd02ba19",
        country: "US"
    },
    {
        id: "7wlFDEWiM5OoIAt8RSli8b",
        name: "YoungBoy Never Broke Again",
        monthlyListeners: 15364527.0,
        followers: 12987624,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b1d6eaf7ad3417765577cac4",
        country: "US"
    },
    {
        id: "3q7HBObVc0L8jNeTe5Gofh",
        name: "50 Cent",
        monthlyListeners: 37108970.0,
        followers: 15176540,
        imageUrl: "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2",
        country: "US"
    },
    {
        id: "0eDvMgVFoNV3TpwtrVCoTj",
        name: "Pop Smoke",
        monthlyListeners: 21407987.0,
        followers: 14426165,
        imageUrl: "https://i.scdn.co/image/ab67616100005174597f9edd2cd1a892d4412b09",
        country: "US"
    },
    {
        id: "6S2OmqARrzebs0tKUEyXyp",
        name: "Demi Lovato",
        monthlyListeners: 27813017.0,
        followers: 26667120,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e106fea940fcf250f8dd5bfe",
        country: "US"
    },
    {
        id: "1zNqQNIdeOUZHb8zbZRFMX",
        name: "Swae Lee",
        monthlyListeners: 40411037.0,
        followers: 2223918,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f1be22786da29b0a1284c0a5",
        country: "US"
    },
    {
        id: "31W5EY0aAly4Qieq6OFu6I",
        name: "A Boogie Wit da Hoodie",
        monthlyListeners: 16452784.0,
        followers: 8376295,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ebe9d9f649d6ef85497f71af",
        country: "US"
    },
    {
        id: "6VuMaDnrHyPL1p4EHjYLi7",
        name: "Charlie Puth",
        monthlyListeners: 36139219.0,
        followers: 23066915,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d5594e3ae145bbb2c096366d",
        country: "US"
    },
    {
        id: "3PhoLpVuITZKcymswpck5b",
        name: "Elton John",
        monthlyListeners: 51276727.0,
        followers: 13635807,
        imageUrl: "https://i.scdn.co/image/ab676161000051740a7388b95df960b5c0da8970",
        country: "GB"
    },
    {
        id: "699OTQXzgjhIYAHMy9RyPD",
        name: "Playboi Carti",
        monthlyListeners: 43483472.0,
        followers: 11392232,
        imageUrl: "https://i.scdn.co/image/ab6761610000517473d4facbd619ae025b5588c7",
        country: "US"
    },
    {
        id: "2o5jDhtHVPhrJdv3cEQ99Z",
        name: "Tiësto",
        monthlyListeners: 47000218.0,
        followers: 7437298,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e84e08fb1dfa2bf9b5a61563",
        country: "NL"
    },
    {
        id: "1wRPtKGflJrBx9BmLsSwlU",
        name: "Pritam",
        monthlyListeners: 37801928.0,
        followers: 36260094,
        imageUrl: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
        country: "IN"
    },
    {
        id: "64M6ah0SkkRsnPGtGiRAbb",
        name: "Bebe Rexha",
        monthlyListeners: 41491493.0,
        followers: 9282064,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ead1540fa76796266fadba33",
        country: "US"
    },
    {
        id: "4LLpKhyESsyAXpc4laK94U",
        name: "Mac Miller",
        monthlyListeners: 24042353.0,
        followers: 10740461,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
        country: "US"
    },
    {
        id: "1VPmR4DJC1PlOtd0IADAO0",
        name: "$uicideboy$",
        monthlyListeners: 11786353.0,
        followers: 7525922,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b0019debdbe359a73295887f",
        country: "US"
    },
    {
        id: "3fMbdgg4jU18AjLCKBhRSm",
        name: "Michael Jackson",
        monthlyListeners: 44309886.0,
        followers: 32074212,
        imageUrl: "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa",
        country: "US"
    },
    {
        id: "07YZf4WDAMNwqr4jfgOZ8y",
        name: "Jason Derulo",
        monthlyListeners: 31439968.0,
        followers: 12154500,
        imageUrl: "https://i.scdn.co/image/ab6761610000517462fa38af4bdc7322b2103493",
        country: "US"
    },
    {
        id: "4SsVbpTthjScTS7U2hmr1X",
        name: "Arcángel",
        monthlyListeners: 24537230.0,
        followers: 14983963,
        imageUrl: "https://i.scdn.co/image/ab67616100005174afdf17286a0d7a23ad388587",
        country: "PR"
    },
    {
        id: "6Xgp2XMz1fhVYe7i6yNAax",
        name: "Trippie Redd",
        monthlyListeners: 24034523.0,
        followers: 9732919,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f2db81b3312a1f167fc54096",
        country: "US"
    },
    {
        id: "5LHRHt1k9lMyONurDHEdrp",
        name: "Tyga",
        monthlyListeners: 21856251.0,
        followers: 6933676,
        imageUrl: "https://i.scdn.co/image/ab676161000051741d8e3ecf59f556b8e4fafce8",
        country: "US"
    },
    {
        id: "7hJcb9fa4alzcOq3EaNPoG",
        name: "Snoop Dogg",
        monthlyListeners: 28960616.0,
        followers: 12336997,
        imageUrl: "https://i.scdn.co/image/ab676161000051749a398209a4ef3360dce2dec4",
        country: "US"
    },
    {
        id: "0L8ExT028jH3ddEcZwqJJ5",
        name: "Red Hot Chili Peppers",
        monthlyListeners: 36726618.0,
        followers: 21134096,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c33cc15260b767ddec982ce8",
        country: "US"
    },
    {
        id: "5Pwc4xIPtQLFEnJriah9YJ",
        name: "OneRepublic",
        monthlyListeners: 59222211.0,
        followers: 17357960,
        imageUrl: "https://i.scdn.co/image/ab6761610000517457138b98e7ddd5a86ee97a9b",
        country: "US"
    },
    {
        id: "77ziqFxp5gaInVrF2lj4ht",
        name: "Sech",
        monthlyListeners: 19884904.0,
        followers: 12078931,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e6399502553c796f40e11017",
        country: "PA"
    },
    {
        id: "4V8LLVI7PbaPR0K2TGSxFF",
        name: "Tyler, The Creator",
        monthlyListeners: 34044673.0,
        followers: 15950444,
        imageUrl: "https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada",
        country: "US"
    },
    {
        id: "0VRj0yCOv2FXJNP47XQnx5",
        name: "Quavo",
        monthlyListeners: 22842323.0,
        followers: 7551779,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d52229f479361a2375f6021c",
        country: "US"
    },
    {
        id: "12GqGscKJx3aE4t07u7eVZ",
        name: "Peso Pluma",
        monthlyListeners: 50540348.0,
        followers: 15398524,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c08ef51312b27a1237bec73f",
        country: "MX"
    },
    {
        id: "3YQKmKGau1PzlVlkL1iodx",
        name: "Twenty One Pilots",
        monthlyListeners: 31009310.0,
        followers: 24532430,
        imageUrl: "https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5",
        country: "US"
    },
    {
        id: "2h93pZq0e7k5yf4dywlkpM",
        name: "Frank Ocean",
        monthlyListeners: 36515825.0,
        followers: 14951727,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ee3123e593174208f9754fab",
        country: "US"
    },
    {
        id: "23fqKkggKUBHNkbKtXEls4",
        name: "Kygo",
        monthlyListeners: 35005958.0,
        followers: 8418735,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e5ea1aa1404629c12ad86658",
        country: "NO"
    },
    {
        id: "1vCWHaC5f2uS3yhpwWbIA6",
        name: "Avicii",
        monthlyListeners: 39690975.0,
        followers: 22969432,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ae07171f989fb39736674113",
        country: "SE"
    },
    {
        id: "0TnOYISbd1XYRBk9myaseg",
        name: "Pitbull",
        monthlyListeners: 49640344.0,
        followers: 10659037,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ee07b5820dd91d15d397e29c",
        country: "US"
    },
    {
        id: "4oUHIQIBe0LHzYfvXNW4QM",
        name: "Morgan Wallen",
        monthlyListeners: 43929433.0,
        followers: 10358251,
        imageUrl: "https://i.scdn.co/image/ab67616100005174cdb9694bfa4a026ee19426ae",
        country: "US"
    },
    {
        id: "4r63FhuTkUYltbVAg5TQnk",
        name: "DaBaby",
        monthlyListeners: 23145783.0,
        followers: 12175919,
        imageUrl: "https://i.scdn.co/image/ab676161000051740da5cd9354d458143258879a",
        country: "US"
    },
    {
        id: "13ubrt8QOOCPljQ2FL1Kca",
        name: "A$AP Rocky",
        monthlyListeners: 35189200.0,
        followers: 14722549,
        imageUrl: "https://i.scdn.co/image/ab676161000051745c58c41a506a0d6b32cc6cad",
        country: "US"
    },
    {
        id: "4nDoRrQiYLoBzwC5BhVJzF",
        name: "Camila Cabello",
        monthlyListeners: 42719620.0,
        followers: 33657804,
        imageUrl: "https://i.scdn.co/image/ab676161000051747ffadf2671159fbfdc5c87f4",
        country: "US"
    },
    {
        id: "3nFkdlSjzX9mRTtwJOzDYB",
        name: "JAY-Z",
        monthlyListeners: 34621404.0,
        followers: 9338992,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c75afcd5a9027f60eaebb5e4",
        country: "US"
    },
    {
        id: "1McMsnEElThX1knmY4oliG",
        name: "Olivia Rodrigo",
        monthlyListeners: 49031605.0,
        followers: 38759198,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e03a98785f3658f0b6461ec4",
        country: "US"
    },
    {
        id: "5YGY8feqx7naU7z4HrwZM6",
        name: "Miley Cyrus",
        monthlyListeners: 56539492.0,
        followers: 24566166,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b4ba86c361191d48cbeb4b32",
        country: "US"
    },
    {
        id: "4kYSro6naA4h99UJvo89HB",
        name: "Cardi B",
        monthlyListeners: 29485455.0,
        followers: 24351029,
        imageUrl: "https://i.scdn.co/image/ab676161000051744e8a7e14e2f602eb9af24e31",
        country: "US"
    },
    {
        id: "7Ln80lUS6He07XvHI8qqHH",
        name: "Arctic Monkeys",
        monthlyListeners: 51748401.0,
        followers: 25991892,
        imageUrl: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
        country: "GB"
    },
    {
        id: "64KEffDW9EtZ1y2vBYgq8T",
        name: "Marshmello",
        monthlyListeners: 60709097.0,
        followers: 33755602,
        imageUrl: "https://i.scdn.co/image/ab6761610000517469b18a96278c204074a6f265",
        country: "US"
    },
    {
        id: "69GGBxA162lTqCwzJG5jLp",
        name: "The Chainsmokers",
        monthlyListeners: 50344355.0,
        followers: 20382875,
        imageUrl: "https://i.scdn.co/image/ab676161000051749c0f09a8247c54ecba74819d",
        country: "US"
    },
    {
        id: "137W8MRPWKqSmrBGDBFSop",
        name: "Wiz Khalifa",
        monthlyListeners: 32193720.0,
        followers: 11164883,
        imageUrl: "https://i.scdn.co/image/ab676161000051742cdddc4dd42f7403f0d7bb9c",
        country: "US"
    },
    {
        id: "3WrFJ7ztbogyGnTHbHJFl2",
        name: "The Beatles",
        monthlyListeners: 37333358.0,
        followers: 28100801,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433",
        country: "GB"
    },
    {
        id: "2hlmm7s2ICUX0LVIhVFlZQ",
        name: "Gunna",
        monthlyListeners: 39769743.0,
        followers: 7798940,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b978b95b8e03351df8e103af",
        country: "US"
    },
    {
        id: "6XyY86QOPPrYVGvF9ch6wz",
        name: "Linkin Park",
        monthlyListeners: 40731996.0,
        followers: 26089649,
        imageUrl: "https://i.scdn.co/image/ab6761610000517484a0dd74f21e8acce6a9fd49",
        country: "US"
    },
    {
        id: "6jJ0s89eD6GaHleKKya26X",
        name: "Katy Perry",
        monthlyListeners: 58991574.0,
        followers: 34111973,
        imageUrl: "https://i.scdn.co/image/ab676161000051745e5f676a99a81dba06cc3db6",
        country: "US"
    },
    {
        id: "4YRxDV8wJFPHPTeXepOstw",
        name: "Arijit Singh",
        monthlyListeners: 40351591.0,
        followers: 119034998,
        imageUrl: "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7",
        country: "IN"
    },
    {
        id: "0iEtIxbK0KxaSlF7G42ZOp",
        name: "Metro Boomin",
        monthlyListeners: 55105206.0,
        followers: 8969073,
        imageUrl: "https://i.scdn.co/image/ab67616100005174df9a1555f53a20087b8c5a5c",
        country: "US"
    },
    {
        id: "26VFTg2z8YR0cCuwLzESi2",
        name: "Halsey",
        monthlyListeners: 42241551.0,
        followers: 21673076,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f1ee3ff162b1370cdd11ad97",
        country: "US"
    },
    {
        id: "1SupJlEpv7RS2tPNRaHViT",
        name: "Nicky Jam",
        monthlyListeners: 28547507.0,
        followers: 18890255,
        imageUrl: "https://i.scdn.co/image/ab676161000051749d0d4dfef3eb105a3885997d",
        country: "PR"
    },
    {
        id: "0EmeFodog0BfCgMzAIvKQp",
        name: "Shakira",
        monthlyListeners: 65758284.0,
        followers: 34056123,
        imageUrl: "https://i.scdn.co/image/ab67616100005174aee73c0f0458b95091845ee1",
        country: "CO"
    },
    {
        id: "4dpARuHxo51G3z768sgnrY",
        name: "Adele",
        monthlyListeners: 58478000.0,
        followers: 57657211,
        imageUrl: "https://i.scdn.co/image/ab6761610000517468f6e5892075d7f22615bd17",
        country: "GB"
    },
    {
        id: "7c0XG5cIJTrrAgEC3ULPiq",
        name: "Ty Dolla $ign",
        monthlyListeners: 38863853.0,
        followers: 5412111,
        imageUrl: "https://i.scdn.co/image/ab6761610000517424b3c0f33bc5e3f6a53f84d7",
        country: "US"
    },
    {
        id: "0C8ZW7ezQVs4URX5aX7Kqx",
        name: "Selena Gomez",
        monthlyListeners: 38041681.0,
        followers: 50634294,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c3c753851496854e29abff7a",
        country: "US"
    },
    {
        id: "4AK6F7OLvEQ5QYCBNiQWHq",
        name: "One Direction",
        monthlyListeners: 44031054.0,
        followers: 36038324,
        imageUrl: "https://i.scdn.co/image/5bb443424a1ad71603c43d67f5af1a04da6bb3c8",
        country: "GB"
    },
    {
        id: "1HY2Jd0NmPuamShAr6KMms",
        name: "Lady Gaga",
        monthlyListeners: 65233166.0,
        followers: 30970792,
        imageUrl: "https://i.scdn.co/image/ab67616100005174515dea0684e8e716852e24e0",
        country: "US"
    },
    {
        id: "6KImCVD70vtIoJWnq6nGn3",
        name: "Harry Styles",
        monthlyListeners: 54173881.0,
        followers: 32808215,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f7db7c8ede90a019c54590bb",
        country: "GB"
    },
    {
        id: "2LRoIwlKmHjgvigdNGBHNo",
        name: "Feid",
        monthlyListeners: 43833626.0,
        followers: 13090895,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e82c62cc8cf019aecfd71ee8",
        country: "CO"
    },
    {
        id: "5cj0lLjcoR7YOSnhnX0Po5",
        name: "Doja Cat",
        monthlyListeners: 51577792.0,
        followers: 30932494,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e94f88ff74ae4ddcab961f97",
        country: "US"
    },
    {
        id: "1dfeR4HaWDbWqFHLkxsg1d",
        name: "Queen",
        monthlyListeners: 53385148.0,
        followers: 50817901,
        imageUrl: "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",
        country: "GB"
    },
    {
        id: "329e4yvIujISKGKz1BZZbO",
        name: "Farruko",
        monthlyListeners: 35804424.0,
        followers: 15911177,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b012855da7fae98ace556e34",
        country: "PR"
    },
    {
        id: "7iK8PXO48WeuP03g8YR51W",
        name: "Myke Towers",
        monthlyListeners: 42654145.0,
        followers: 15882771,
        imageUrl: "https://i.scdn.co/image/ab676161000051748372345609bebaf1e948ef7f",
        country: "PR"
    },
    {
        id: "2wY79sveU1sp5g7SokKOiI",
        name: "Sam Smith",
        monthlyListeners: 52722217.0,
        followers: 24083064,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f057d1dce23e7f4d5d0f32e5",
        country: "GB"
    },
    {
        id: "7tYKF4w9nC0nq9CsPZTHyP",
        name: "SZA",
        monthlyListeners: 67559582.0,
        followers: 22320195,
        imageUrl: "https://i.scdn.co/image/ab676161000051740895066d172e1f51f520bc65",
        country: "US"
    },
    {
        id: "6LuN9FCkKOj5PcnpouEgny",
        name: "Khalid",
        monthlyListeners: 55198923.0,
        followers: 16289850,
        imageUrl: "https://i.scdn.co/image/ab6761610000517424ff450c42d4e36fb34a7631",
        country: "US"
    },
    {
        id: "1URnnhqYAYcrqrcwql10ft",
        name: "21 Savage",
        monthlyListeners: 52846441.0,
        followers: 19667265,
        imageUrl: "https://i.scdn.co/image/ab676161000051744f8f76117470957c0e81e5b2",
        country: "US"
    },
    {
        id: "4VMYDCV2IEDYJArk749S6m",
        name: "Daddy Yankee",
        monthlyListeners: 54221013.0,
        followers: 34545063,
        imageUrl: "https://i.scdn.co/image/ab67616100005174aa534de724c7a565c07bb3f5",
        country: "PR"
    },
    {
        id: "15UsOTVnJzReFVN1VCnxy4",
        name: "XXXTENTACION",
        monthlyListeners: 40411890.0,
        followers: 46199723,
        imageUrl: "https://i.scdn.co/image/ab67616100005174f0c20db5ef6c6fbe5135d2e4",
        country: "US"
    },
    {
        id: "6M2wZ9GZgrQXHCFfjv46we",
        name: "Dua Lipa",
        monthlyListeners: 72398881.0,
        followers: 44370243,
        imageUrl: "https://i.scdn.co/image/ab676161000051740c68f6c95232e716f0abee8d",
        country: "GB"
    },
    {
        id: "7bXgB6jMjp9ATFy66eO08Z",
        name: "Chris Brown",
        monthlyListeners: 49856032.0,
        followers: 22866129,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a48397e590a1c70e2cda7728",
        country: "US"
    },
    {
        id: "53XhwfbYqKCa1cC15pYq2q",
        name: "Imagine Dragons",
        monthlyListeners: 60124305.0,
        followers: 53945441,
        imageUrl: "https://i.scdn.co/image/ab67616100005174ab47d8dae2b24f5afe7f9d38",
        country: "US"
    },
    {
        id: "4gzpq5DPGxSnKTe4SA8HAU",
        name: "Coldplay",
        monthlyListeners: 87437652.0,
        followers: 52479985,
        imageUrl: "https://i.scdn.co/image/ab676161000051741ba8fc5f5c73e7e9313cc6eb",
        country: "GB"
    },
    {
        id: "0du5cEVh5yTK9QJze8zA0C",
        name: "Bruno Mars",
        monthlyListeners: 81044553.0,
        followers: 57920481,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c36dd9eb55fb0db4911f25dd",
        country: "US"
    },
    {
        id: "0hCNtLu0JehylgoiP8L4Gh",
        name: "Nicki Minaj",
        monthlyListeners: 46301775.0,
        followers: 32057770,
        imageUrl: "https://i.scdn.co/image/ab6761610000517407a50f0a9a8f11e5a1102cbd",
        country: "US"
    },
    {
        id: "4MCBfE4596Uoi2O4DtmEMz",
        name: "Juice WRLD",
        monthlyListeners: 28203260.0,
        followers: 34906057,
        imageUrl: "https://i.scdn.co/image/ab676161000051741908e1a8b79abf71d5598944",
        country: "US"
    },
    {
        id: "2YZyLoL8N0Wb9xBt1NhZWg",
        name: "Kendrick Lamar",
        monthlyListeners: 71717110.0,
        followers: 32006274,
        imageUrl: "https://i.scdn.co/image/ab67616100005174437b9e2a82505b3d93ff1022",
        country: "US"
    },
    {
        id: "1i8SpTcr7yvPOmcqrbnVXY",
        name: "Ozuna",
        monthlyListeners: 43163766.0,
        followers: 37174988,
        imageUrl: "https://i.scdn.co/image/ab67616100005174c80f303b208a480f52e8180b",
        country: "PR"
    },
    {
        id: "6qqNVTkY8uBg9cP3Jd7DAH",
        name: "Billie Eilish",
        monthlyListeners: 106596732.0,
        followers: 97961320,
        imageUrl: "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da",
        country: "US"
    },
    {
        id: "1RyvyyTE3xzB2ZywiAwp0i",
        name: "Future",
        monthlyListeners: 57905030.0,
        followers: 18131125,
        imageUrl: "https://i.scdn.co/image/ab676161000051746ef89e23678018c6d8630825",
        country: "US"
    },
    {
        id: "3Nrfpe0tUJi4K4DXYWgMUX",
        name: "BTS",
        monthlyListeners: 26549355.0,
        followers: 75136549,
        imageUrl: "https://i.scdn.co/image/ab67616100005174d642648235ebf3460d2d1f6a",
        country: "KR"
    },
    {
        id: "1vyhD5VmyZ7KMfW5gqLgo5",
        name: "J Balvin",
        monthlyListeners: 57989199.0,
        followers: 36954262,
        imageUrl: "https://i.scdn.co/image/ab67616100005174dea08796d296a58c5d060439",
        country: "CO"
    },
    {
        id: "5pKCCKE2ajJHZ9KAiaK11H",
        name: "Rihanna",
        monthlyListeners: 84855790.0,
        followers: 61941130,
        imageUrl: "https://i.scdn.co/image/ab6761610000517499e4fca7c0b7cb166d915789",
        country: "US"
    },
    {
        id: "246dkjvS1zLTtiykXe5h60",
        name: "Post Malone",
        monthlyListeners: 85286781.0,
        followers: 45004902,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e17c0aa1714a03d62b5ce4e0",
        country: "US"
    },
    {
        id: "5K4W6rqBFWDnAN6FQUkS6x",
        name: "Kanye West",
        monthlyListeners: 66624452.0,
        followers: 26631759,
        imageUrl: "https://i.scdn.co/image/ab676161000051746e835a500e791bf9c27a422a",
        country: "US"
    },
    {
        id: "0Y5tJX1MQlPlqiwlOH1tJY",
        name: "Travis Scott",
        monthlyListeners: 70060211.0,
        followers: 31898390,
        imageUrl: "https://i.scdn.co/image/ab6761610000517419c2790744c792d05570bb71",
        country: "US"
    },
    {
        id: "66CXWjxzNUsdJxJ2JdwvnR",
        name: "Ariana Grande",
        monthlyListeners: 76642254.0,
        followers: 98814719,
        imageUrl: "https://i.scdn.co/image/ab6761610000517440b5c07ab77b6b1a9075fdc0",
        country: "US"
    },
    {
        id: "7dGJo4pcD2V6oG8kP0tJRR",
        name: "Eminem",
        monthlyListeners: 78649995.0,
        followers: 88761512,
        imageUrl: "https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b",
        country: "US"
    },
    {
        id: "1uNFoZAHBGtllmzznpCI3s",
        name: "Justin Bieber",
        monthlyListeners: 75748290.0,
        followers: 76626180,
        imageUrl: "https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36",
        country: "CA"
    },
    {
        id: "6eUKZXaKkcviH0Ku9w2n3V",
        name: "Ed Sheeran",
        monthlyListeners: 66921903.0,
        followers: 115389739,
        imageUrl: "https://i.scdn.co/image/ab676161000051743bcef85e105dfc42399ef0ba",
        country: "GB"
    },
    {
        id: "1Xyo4u8uXC1ZmMpatF05PJ",
        name: "The Weeknd",
        monthlyListeners: 105152410.0,
        followers: 88925846,
        imageUrl: "https://i.scdn.co/image/ab67616100005174214f3cf1cbe7139c1e26ffbb",
        country: "CA"
    },
    {
        id: "4q3ewBCX7sLwd24euuV69X",
        name: "Bad Bunny",
        monthlyListeners: 65538087.0,
        followers: 84591559,
        imageUrl: "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df",
        country: "PR"
    },
    {
        id: "06HL4z0CvFAxyc27GXpf02",
        name: "Taylor Swift",
        monthlyListeners: 95755820.0,
        followers: 118971229,
        imageUrl: "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
        country: "US"
    },
    {
        id: "3TVXtAsR1Inumwj472S9r4",
        name: "Drake",
        monthlyListeners: 76825979.0,
        followers: 90862590,
        imageUrl: "https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9",
        country: "CA"
    },
    {
        id: "1wZtkThiXbVNtj6hee6dz9",
        name: "Wisin & Yandel",
        monthlyListeners: 19236442.0,
        followers: 7583675,
        imageUrl: "https://i.scdn.co/image/ab67616100005174b5496c4b788e181679069ee8",
        country: "PR"
    },
];
