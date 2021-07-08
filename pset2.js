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
    constructor(name,artists=[],length=0){
        this.name = this._setName(name)
        this.artists = artists
        this.length = length

        
    }

    _setName(name){
        if(typeof name !== 'string' || name.length < 1) throw new Error
        return name
    }

    _setArtists(artists){
        if(!Array.isArray(artists) || artists.length < 1) throw new Error
        artists.forEach(artist =>{
            if(typeof artist != "string") throw new Error("Artist must be a string")
        })
    }

    getArtists(){return this.artists[0] }
    getFeatures(){return this.artists.slice(1)}
    getDuration(){
        const minutes = Math.floor(this.length / 60);
        const seconds = this.length - minutes * 60;
        return `${minutes} min ${seconds} seconds`
    }
}
const theKill = new Song('The Kill', ['Kodak Black', 'Travis Scott', 'Offset'], 232);

console.log(theKill)
console.log(theKill.getArtists());
console.log(theKill.getFeatures());
console.log(theKill.getDuration());

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
console.log("------------------------");

class Playlist{
    constructor(name,songs=[]){
        this.name=name
        this.songs = songs
    }

    addSong(name, artists=[], length=0){
        this.songs.push(new Song(name,artists,length))
    }
    
   
    removeSong(name){
        this.songs.forEach((obj,idx) =>{
            if(obj.n === name){this.songs.splice(idx,1)}
        })

    }

    getNumberOfSongs(){ return this.songs.length}

    getNamesOfSongs(){
        return this.songs.reduce((acc,obj)=>{
            return acc.concat(obj.name)
        },[])
    }

    getTotalLength(){
        return this.songs.reduce((acc,obj) =>{
            return acc + obj.length
        },0)
       
    }

    getTotalDuration(){ 
        const lengthSec = this.getTotalLength()
        const minutes = Math.floor(lengthSec / 60);
        const seconds = lengthSec - minutes * 60; 
        return `${minutes} min ${seconds} seconds`

    }


    //***** HARD MODE *****
    getArtists(){
        return this.songs.reduce((acc,obj) =>{
            //console.log(obj.artists);
            obj.artists.forEach(artist =>{
                //console.log(artist);
                if(acc.indexOf(artist) === -1) acc.push(artist)
            })
            return acc
        },[])
    }

    getMostCommonArtist(){
        const arr1 = this.songs.reduce((acc,obj)=>{
            obj.artists.forEach(artist=>{
                acc.push(artist)
            })
            return acc
        },[])
        let name = ""
        let nameCount = 0
        for (let i = 0; i < arr1.length; i++) {
            let count = 0
            for (let j = i; j < arr1.length; j++) {
                if(arr1[j] == arr1[i]) count++;
            }
        
            if(count > nameCount){
                nameCount = count 
                name = arr1[i]
            } 
        }   
        let obj = {'name':name,'occurence':nameCount}    
        return obj
    }
}
//Tests
console.log('############## PLAYLIST ####################')
const newPlaylist = new Playlist('playyer')
newPlaylist.addSong('Sunflower - Spider-Man: Intro',['Post Malone', 'Swae Lee'],158)
newPlaylist.addSong("Motor Sport",["Nicki","Cardi B"],420)
console.log(newPlaylist.getTotalLength())
newPlaylist.removeSong('Sunflower - Spider-Man: Intro')
console.log(newPlaylist.songs);
console.log(newPlaylist.getTotalDuration());




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
console.log("************************");


function loadExternalPlaylist(playlist){
    return new Playlist(playlist.name,playlist.songs)
}

const loadedPlaylist = loadExternalPlaylist(external_playlist);
console.log(loadedPlaylist.getNamesOfSongs());
console.log(loadedPlaylist.getNumberOfSongs());
console.log(loadedPlaylist.getTotalDuration());
console.log(loadedPlaylist.getArtists());
console.log(loadedPlaylist.getMostCommonArtist());
