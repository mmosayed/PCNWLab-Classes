const external_playlist = require('./playlist');
/*  
    WELCOME! 

    These next few psets we will be working with the
    same set of data. We will be building various features
    for a music player app.

    Please check out the object in 'playlist.js'. 
    DO NOT modify that file. 

    Ignore line 1. You don't need to understand what it's 
    doing. Just understand that the const variable 'playlist'
    holds the object we need.
*/

/*  1
    Define a @class called Song
    With @properties: 
        name {string}  
        artists {array} : this is an array of strings, with Artist names
        length {number} : this length is in seconds
    With @methods: 
        getArtist() // This returns the main recording artist for the song
        getFeatures() // This returns all the featured artists in an array of strings
        getDuration() // This returns the legnth in the song in Minutes and Seconds. 
                          Eg. "3 min 22 seconds"
*/

class Song{
	constructor(name, artists=[], length) {
		this._setName(name);
		this._setArtists(artists);
		this.length = length;
    }
    
    _setName(name) {
        if (typeof name !== "string" || name.length < 1) {
            throw new Error('name must be a string')
        }
        
        this.name = name;
    }

    _setArtists(artists) {
        if (!Array.isArray(artists) || artists.length === 0) {
            throw new Error('artists must be an array')
        }
        
        this.artists = artists;
    }

    _setName(name) {
        if (typeof name !== "string" || name.length < 1) {
            throw new Error('name must be a string')
        }
        
        this.name = name;
    }

	getArtist() {
		return this.artists[0];
	}

	getFeatures() {
		return this.artists.slice(1);
	}

	getDuration() {
		let minutes = Math.floor(this.length / 60);
		let remainSecs = this.length % 60;
		return `${minutes} min ${remainSecs} seconds`;
	}
}

const lolSong = new Song("Fake Song LOL", ["Mr. lolZ", "hiya", "thisguytoo"], "324");
console.log(lolSong);
console.log(lolSong.getArtist());
console.log(lolSong.getFeatures());
console.log(lolSong.getDuration());

/*  2
    Define a @class called Playlist
    With @properties: 
        name {string} 
        songs {array} : this is an array of Song objects
    With @methods: 
        addSong(name, artists, length) // Adds a Song object to the list of songs
        removeSong(name) //  Removes the song with the name passed into the parameter
        getNumberOfSongs() // Returns the number of songs in the playlist
        getNamesOfSongs() // Returns an Array with only the Name of the songs as strings.
        getTotalLength() // Returns the total length of the playlist in seconds
        getTotalDuration() // Returns the total length of the playlist in Minutes and Seconds.
                                Eg. "40 min 10 seconds"
        ***** HARD MODE ***** : 
        getArtists() // Returns an Array of all the artists in the playlist. 
                        Do not repeat an Artist more than once.
        getMostCommonArtist() // Returns an Object literal with the name of the most reoccurring Artist in
                                 the playlist and number of occurences. Includes featured artists and main artists. 
                                 If there is a tie between artists, just return any one of the tied Artists.
                                 Eg. { name: "Drake", occurence: 4 }
*/

class Playlist{
	constructor(name, songs=[]) {
		this.name = name;
		this.songs = songs;
	}

	addSong(name, artists, length) {
		const songObj = new Song(name, artists, length);
		this.songs.push(songObj);
	}

	removeSong(name) {
        this.songs = this.songs.reduce((acc, songObj) => {            
            if (name !== songObj["name"]) {
                acc = acc.concat(songObj);
            }
            return acc;
        }, []);
    }

	getNumberOfSongs() {
        return `Number of songs in playlist: ${this.songs.length}`;
	}
	
	getNamesOfSongs() {
        const nameArray = this.songs.reduce((acc, songObj) => {
            return acc.concat(songObj["name"]);
        }, []);
        return `Songs in playlist: ${nameArray}`;
	}

	getTotalLength() {
        const lengthSecs = this.songs.reduce((acc, songObj) => {
            return acc = songObj["length"] + acc;
        }, 0)
        return lengthSecs;
    }
	
	getTotalDuration() {
        const totalLengthSecs = this.getTotalLength()
        let minutes = Math.floor(totalLengthSecs / 60);
		let remainSecs = totalLengthSecs % 60;
		return `Total playlist length: ${minutes} min ${remainSecs} seconds`;
    }
    
    getArtists() {
        let artistsArray = this.songs.reduce((acc, currentSong) => {
            let curSongArtists = currentSong.artists;
            return acc.concat(curSongArtists.reduce((acc2, songArtist) => {
                if (!acc.includes(songArtist)) {
                    return acc2.concat(songArtist);
                }
                return acc2;
            }, []));
        }, []);
        return artistsArray;
    }

         // for (let i = 0; i < curSongArtists; i++) {
            //     if (!acc.includes(curSongArtists[i])) {
            //         return acc.concat(curSongArtists[i]);
            //     }
            // }
            // if (!acc.includes(currentSong.artists)) {
            //     return acc.concat(currentSong.artists);
            // }

    // getMostCommonArtists() {
    //     let mostCommonArtist
    //     let bigArr = this.songs.reduce((acc, currentSong) => {
    //         return acc.concat(currentSong.artists)
    //     }
    // }
}

const playlist_1 = new Playlist("The Best Playlist EVER, Vol. 1");
playlist_1.addSong("Da Song", ["Me", "Myself", "I"], 340);
playlist_1.addSong("Bear Song", ["Panda", "BrownB"], 242);
playlist_1.addSong("Duck Song", ["DaffyD", "Mistah Fudd", "BB"], 414);
playlist_1.addSong("Bug Song", ["Roach Master Roach", "BB"], 666);
console.log(playlist_1.songs);
playlist_1.removeSong("Da Song");
console.log(playlist_1.songs);
console.log(playlist_1.getNumberOfSongs());
console.log(playlist_1.getTotalLength());
console.log(playlist_1.getNamesOfSongs());
console.log(playlist_1.getTotalDuration());
console.log(playlist_1.getArtists());

/* 3
    Define a ***GLOBAL VARIABLE***

    @func loadExternalPlaylist
    @param {object} playlist
    @returns {object} 
    @desc - Takes in a structured playlist object literal as the param.
            Returns a Playlist object using the Playlist class.
            The returned object must hold all the data from the external object literal.
    @example - 
        const loadedPlaylist = loadExternalPlaylist(external_playlist);

        // Testing
        loadedPlaylist.getNamesOfSongs();
        loadedPlaylist.getTotalDuration();

*/
