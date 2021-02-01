
module.exports = class Picture {
    constructor(imgPath) {
        this._imgpath = imgPath;
        this._aspectWidth = "150px";
        this._aspectHeight = "250px";
    }

    // Return a string of the image path on the server
    get serverImgPath() {
        return this._imgpath;
    }
}