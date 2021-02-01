// Importing Unique ID generator library
const uuid = require('uuid');

// Import all the other classes for our "master" user class
const Match = require("./Match.js")
const Location = require("./Location.js")
const Picture = require("./Picture.js")
const System = require("./System.js")

class User {
    constructor(firstName, lastName, birthday, location = new Location(), picture = new Picture()) {
        this._uuid = uuid.v4();
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._active = true;
        this._location = location;
        this._userPicture = {picture}
        this._matches = {}
    }

    get uuid(){
        return this._uuid;
    }

    get age(){
        let todaysDate = Date.now()
        let age = new Date(todaysDate - this_birthday.getTime())
        return (age.getUTCFullYear() - 1970)
    }

    get userLocation(){
        return this._location;
    }

    get entireName(){
        return this._firstName + " " + this._lastName
    }

    get matches(){
        return this._matches
    }

    createMatch(sndUser){
        return this._matches[this._uuid] = new Match(this.User, sndUser)
    }

    deleteMatch(uuid){
        return delete this._matches[uuid];
    }
    
    getMatch(){
        return this._matches[this._uuid];
    }
    
    newUserPicture(imgPath){
        return this._userPicture = new Picture(imgPath);
    }

}

// Lav en ny User (Mads) og login ham ind på systemet
let Mads = new User("Mads", "Klynderud", new Date("2000-07-25"), (2400, "Copenhagen"), "./default.png")
console.log(Mads)
let NytSystem = new System()
console.log(NytSystem.login(Mads))

// Lav en ny person og match Mads med personen
let Ina = new User("Ina", "Efternavn", new Date("1999-02-19"), (2400, "Copenhagen"), "./default.png")
Mads.createMatch(Ina)

// Find the UUID of Mads's Matches
console.log(Mads.getMatch())