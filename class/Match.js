
// A match contains a chat which will initialize as empty
let Chat = require("./Chat.js")

module.exports = class Match{
    constructor(fstUser, sndUser) {
        this._fstUser = fstUser;
        this._sndUser = sndUser;
        this._newChat = new Chat();
        this._dateMatched = Date.now();
    }

    SendMessageToMatch(content, user){
        this._newChat.addToConversation(content, user);
    }

    get chat(){
        return this._newChat;
    }
}