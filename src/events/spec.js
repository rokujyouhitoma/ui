describe("require", function() {
    it("Event", function() {
        var Event = require("./event").Event;
        expect(Event).toBeDefined();
    });
    it("events", function() {
        var events = require("./events").events;
        expect(events).toBeDefined();
    });
    it("EventTarget", function() {
        var EventTarget = require("./eventtarget").EventTarget;
        expect(EventTarget).toBeDefined();
    });
    it("EventListener", function() {
        var EventListener = require("./eventlistener").EventListener;
        expect(EventListener).toBeDefined();
    });
});

describe("EventTarget", function() {
    var Event;
    beforeEach(function() {
        Event = require("./event").Event;
    });
    it("new", function() {
        var e = new Event("name");
    });
});
