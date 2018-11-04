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

class Song {

    constructor(name,artists,length){

        this.name = name,
        this.artists = artists,
        this.length = length

    }

    getArtist(){
        return this.artists[0]
    }
    getFeatures(){
        return this.artists.slice(1,this.artists.length)
    }
    getDuration(){
        return `${Math.floor(this.length/60)} mins and ${this.length%60} seconds`
    }
}

// let firstSong = new Song(external_playlist.songs[0].name,external_playlist.songs[0].artists,external_playlist.songs[0].length)
// console.log(firstSong.getArtist(),firstSong.getFeatures(),firstSong.getDuration())

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

class Playlist {
    constructor(name,songs=[]){
        this.name = name,
        this.songs = songs
    }
    addSong(name, artists, length){
        this.songs.push(new Song(name,artists,length))
    }
    removeSong(name){
        let indexToErase = -1
        this.songs.forEach((e,i)=>{
            if(e.name === name){
                
                indexToErase = i
               
            }
        })

        this.songs.splice(indexToErase,1)
        
    }

    getNumberOfSongs(){
        return this.songs.length
    }

    getNameOfSongs(){
        return this.songs.map((e)=>{
                return e.name
        })
    }

    getTotalLength(){
        return this.songs.reduce((acc,e)=>{
            return e.length + acc
        },0)
    }
    getTotalDuration(){

        return `${Math.floor(this.songs.reduce((acc,e)=>{
            return e.length + acc
        },0)/60)} mins and ${this.songs.reduce((acc,e)=>{
            return e.length + acc
        },0)%60} seconds`
    }

    getArtists(){
        let allArtists = []
        let artistNonRepeat = {}
        this.songs.forEach(e => allArtists.push(...e.artists))
        allArtists.forEach(e => artistNonRepeat[e]=== undefined ? artistNonRepeat[e] = 1 : artistNonRepeat[e]++)
        return Object.keys(artistNonRepeat)
    }

    getMostCommonArtist(){
        let allArtists = []
        let artistNonRepeat = {}
        this.songs.forEach(e => allArtists.push(...e.artists))
        allArtists.forEach(e => artistNonRepeat[e]=== undefined ? artistNonRepeat[e] = 1 : artistNonRepeat[e]++)
        let mostCommonArtist, mostCommon = 0
        for(let key in artistNonRepeat){
            if(artistNonRepeat[key]>mostCommon){
                mostCommon = artistNonRepeat[key]
                mostCommonArtist = key
            }
        }
        return {name:mostCommonArtist, occurrence:mostCommon}  
    }

}

let songList = []

for(let i=0; i<5; i++){
    songList.push(new Song(external_playlist.songs[i].name,external_playlist.songs[i].artists,external_playlist.songs[i].length))
}

let playList = new Playlist('top 5',songList)

// playList.addSong('Loki',['Amon Amarth'],300)
// console.log('list of songs')
// console.table(playList.songs)
// console.log('remove songs')
// playList.removeSong('ZEZE')
// console.table(playList.songs)
// console.log('num of songs')
// console.log(playList.getNumberOfSongs())
// console.log('name of songs')
// console.log(playList.getNameOfSongs())
// console.log('total durations')
// console.log(playList.getTotalDuration())
// console.log('total length')
// console.log(playList.getTotalLength())
//console.log('get all artists')
//console.log(playList.getArtists())
// console.log('get most common artists')
// console.log(playList.getMostCommonArtist())
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

const loadExternalPlaylist = (externalPlayList) => {
        return new Playlist(externalPlayList.name,externalPlayList.songs)
}

const loadedPlaylist = loadExternalPlaylist(external_playlist);

        // Testing
        console.log(loadedPlaylist.getNameOfSongs());
        console.log(loadedPlaylist.getTotalDuration());
