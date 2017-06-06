
function Alarm(expireAfterSeconds) {

    this.expireAfterSeconds = expireAfterSeconds;
    this.creationTime = this._getTime();
}

Alarm.prototype.isExpired = function () {
    if (this.expireAfterSeconds < 1) {
        return true;
    }
    var elapsedSeconds = (this._getTime() - this.creationTime) / 1000;
    return elapsedSeconds >= this.expireAfterSeconds;
}

Alarm.prototype._getTime = function () {
   return Date.now();
}

module.exports = Alarm;