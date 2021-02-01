const uuid = require('uuid');

module.exports = class Message {
    constructor(content, user) {
        this._content = content,
        this._user = user,
        this._timestamp = new Date(), // Public 
        this._timeSinceSent = this.timeSinceSent(), // Public
        this._uuid = uuid.v4() // Public

    }

    timeSinceSent() {
        // Milliseconds since message was sent
        let diffMilliSeconds = Math.abs(new Date() - this._timestamp)

        // Days since message was sent
        let days = Math.floor(diffMilliSeconds / 86400);
        // Remove total days from calculation
        diffMilliSeconds -= days * 86400;

        // Hours since message was sent
        let hours = Math.floor(diffMilliSeconds/3600) % 24;
        diffMilliSeconds -= hours * 3600;

        // Minutes since message was sent
        let minutes = Math.floor(diffMilliSeconds / 60) % 60;
        diffMilliSeconds -= minutes * 60;

        // Compare
        let diff = '';

        // Add days
        if (days > 0) {
            diff += (days === 1) ? `${days} day, ` : `${days} days, `;
        }

        // Change wording depending on 1 hour or multiple
        diff += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;
        diff += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

        return diff;
    }
}
