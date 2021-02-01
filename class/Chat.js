// Import the message class to create new instances of it.
const Message = require("./Message.js")


module.exports = class Chat {
    constructor(conversation = []) {
        this._conversation = conversation;
    }

    // Get the entire chat log
    getConversation(){
        return this._conversation
    }

    // Adds a message to a conversation with the content and user
    addToConversation(text, user) {
        let createdMessage = new Message(text, user)
        
        return this._conversation[createdMessage.uuid] = createdMessage
    }

    delMessage(uuid) {
        return delete this._conversation[uuid]
    }
}
/*

let AlexAndMartin = new Chat()
AlexAndMartin.addToConversation("Hej")
console.log(AlexAndMartin._conversation) 
*/