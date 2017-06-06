
function Alarm(expireAfterSeconds) {
    this.isExpired = expireAfterSeconds < 1; // ? true : false;
    setTimeout(() => {
        this.isExpired = true;
    }, expireAfterSeconds * 1000);
}

module.exports = Alarm;