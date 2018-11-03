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
constructor(name, artists, length){
this.name = name
this.artists = artists
this.length = length


}

getArtists(){
    return this.artists[0]

}

getFeatures(artists){
    let features = []
for (let i = 1 ; i< artists.length ; i++){
     features.push(this.artists[i])

}
    return features
}

getDuration(){
    return   this.length/60 
}

}

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
constructor(name,songs){
this.name = name
this.songs =songs


}

addSong(name, artists, length){

    const newSong = new Song(name,artists,length)
    this.songs.push(newSong)

}

removeSong(name){
    let songBank = []
for(i = 0 ; i < this.songs.length ; i ++){

if(name !== this.songs[i]){

    songBank.push(songs[i])
    this.songs = songBank
}

}

return songBank
}

getNumberOfSongs(){
  
return this.songs.length


}

}

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