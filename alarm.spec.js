const Alarm = require('./alarm');

test("Alarm exists", () => {
    expect(Alarm).toBeDefined();
});

test("isExpired is a function", () => {
    expect(typeof (Alarm.prototype.isExpired)).toBe("function");
});

test("Alarm(0) should be expired", () => {
    var alarm0 = new Alarm(0);
    expect(alarm0.isExpired()).toBe(true);
});

test("Alarm(10) should be immediately false", () => {
    var alarm10 = new Alarm(10);
    expect(alarm10.isExpired()).toBe(false);
});

test("Alarm(10) should be true after 10 seconds", () => {
    var seconds = 10;
    var alarm10 = new Alarm(seconds);
    Alarm.prototype._getTime = function(){
        return Date.now() + seconds * 1001;
    }
    expect(alarm10.isExpired()).toBe(true);
});