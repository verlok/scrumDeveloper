
function Alarm(expireAfterSeconds, message) {
    this.isExpired = expireAfterSeconds < 1; // ? true : false;
    this.message = message;
    setTimeout(() => {
        this.isExpired = true;
        this.writeMessage();
    }, expireAfterSeconds * 1000);
}

Alarm.prototype.writeMessage = function (){
    console.log(this.message);
}

module.exports = Alarm;