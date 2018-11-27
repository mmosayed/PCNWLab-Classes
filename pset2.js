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
                          Eg. "3 min 22 seconds"*/


class Song {
    constructor(name, artists, length) {
        /*this._setName(name); //invoking a class method
        //this.name = setName(name); - if you are validating outside the class
        this._setArtists(artists);
        //this.artists = setArtists(artists);
        this._setlength(length);
        //this.length = setLength(length)*/

        this._setProperty('name', name);
        this._setProperty('artists', artists);
        this._setProperty('length', length);
}

    _setProperty(propertyName, propertyValue,) {
        this[propertyName] = propertyValue;
    }

    _setName(name) {
        if (typeof name !== 'string' || name.length < 1) {
                throw new Error('name must be a string');
        }
        this.name = name; // don't need to return anything because it adds it to the keyword - only works in a class
    }
    _setArtists(artists) {
        if (Array.isArray(artists) === false || artist.length === 0) {
                throw new Error('artists must be an array');
        }
        for (let i = 0; i < artists.length; i++) {
            if (typeof artists[i] !== 'string'){
                throw new Error ('artist name must be a string')
            }
        }
        this.artists = artists;//setting parameter to an instance variable
    }

    _setlength(length) {
        if (length > 0 && typeof length === 'number') {
            this.length = length;
        }
        throw new Error('artists must be an array');
    }

    getArtist() {
        for (let i = 0; i < this.artists.length; i++){
          return this.artists[i];
        }
    }

    getFeatures() {
       let newArtist = [];
        for (let i = 1; i < this.artists.length; i++){
             newArtist.push(this.artists[i]);
        }
        return newArtist;
    }

    getDurations() {
        const minutes = Math.floor(this.length/60);
        const seconds = Math.floor(this.length % 60);
        return `${minutes} min ${seconds} seconds`; 
    }
}
const newSong = new Song('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
const newSong2 = new Song('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
const newSong3 = new Song('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
console.log(newSong.getFeatures('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225));
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

                        1. retrieve artists
                        2. push artists into an array
                        3. sort artist array
                        4. for loop
                        5. return indexOf & lastIndexOf [i]
                        6. if indexOf !== lastIndexOf
                        7. range = lastIndexOf - indexOf
                        8. splice(IndexOf, range)
        getMostCommonArtist() // Returns an Object literal with the name of the most reoccurring Artist in
                                 the playlist and number of occurences. Includes featured artists and main artists. 
                                 If there is a tie between artists, just return any one of the tied Artists.
                                 Eg. { name: "Drake", occurence: 4 }
*/
class Playlist {
    constructor(name,songs=[]){
        this.name = name;
        this.songs = songs;
    }

    addSong(name, artist, length) {
        const newSong = new Song(name, artist, length);
        this.songs[newSong];
        return this.songs;
    }
    removeSong(name){
        Object.keys(this.songs);
    }
    getNumberofSongs(){
        return this.songs.length;
    }
    getNamesOfSongs(){
        console.log(Object.keys(this.songs));
    }
    getTotalLength(){
        let total = 0;
        for(let i = 0; i < this.songs.length; i++) {
           let keys =  Object.keys(this.songs[i])
            for(let keys in this.songs[i]) {
                if(typeof this.songs[keys[i]] === 'number'){
                    total += this.songs[keys[i]];
                }
            }
        }
    return total;
    }
}
const newPlay = new Playlist('rollTide');
newPlay.addSong('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
newPlay.addSong('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
newPlay.addSong('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);
newPlay.addSong('ZEZE',  ['Kodak Black', 'Travis Scott', 'Offset'], 225);

console.log(newPlay.getTotalLength());


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