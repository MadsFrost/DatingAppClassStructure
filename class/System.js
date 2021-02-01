module.exports = class System{
    constructor(){
        this._activeUser = false;
    }

    // System.login(someUser) will change the active user

    login(userToLogin){
        this._activeUser = userToLogin
        return `User: ${userToLogin.entireName} has logged in.`
    }

    // System.signOut() will signout whichever active user is on
    signOut(){
        let prevUser = this._activeUser.entireName
        this._activeUser = false;
        return `User: ${prevUser} has signed out.`
    }

    // Returns the current user with-in the initialized System._activeUser
    get currentUser(){
        return this._activeUser;
    }
}