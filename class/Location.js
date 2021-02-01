
// Location module for a user

module.exports = class Location {
    constructor(postalcode, city) {
        this._postal = postalcode;
        this._city = city;
    }

    get bearings(){
        // Implement some type of way to get a datastring containing city, region and country from the potential other attribute of information given by the user.
    }
}
