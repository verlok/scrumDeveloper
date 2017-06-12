const Alarm = require('./alarm');

jest.useFakeTimers();

test("Alarm exists", () => {
    expect(Alarm).toBeDefined();
});

test("isExpired is a function", () => {
    timer1 = new Alarm(666);
    expect(typeof (timer1.isExpired)).toBe("boolean");
});

test("Alarm(0) should be expired", () => {
    var alarm0 = new Alarm(0);
    expect(alarm0.isExpired).toBe(true);
});

test("Alarm(10) should be immediately false", () => {
    var alarm10 = new Alarm(10);
    expect(alarm10.isExpired).toBe(false);
});

test("Alarm(10) should be true after 10 seconds", () => {
    var alarm10 = new Alarm(10);
    jest.runTimersToTime(1000 * 10);
    expect(alarm10.isExpired).toBe(true);
});

test("WriteMessage is called at least once", () => {
    Alarm.prototype.writeMessage = jest.fn();
    var alarm10 = new Alarm(10, "I'm expired");
    jest.runTimersToTime(1000 * 10);
    expect(Alarm.prototype.writeMessage).toHaveBeenCalledTimes(1);
});
