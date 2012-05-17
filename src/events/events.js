var EventListener = require("./eventlistener").EventListener;
var Event = require("./event").Event;


var uidCounter_ = 0;
var UID_PROPERTY_ = 'uid_' + Math.floor(Math.random() * 2147483648).toString(36);
function getUid(obj) {
    return obj[UID_PROPERTY] || (obj[UID_PROPERTY] = ++uidCounter_);
};

var events = {};

/**
 * Container for storing event listeners and their proxies
 * @private
 * @type {Object.<goog.events.Listener>}
 */
events.listeners_ = {};


/**
 * @param {EventTarget} src .
 * @param {string} type .
 * @param {Function} listener .
 * @param {boolean=} opt_capt .
 */
events.listen = function(src, type, listener) {
    if(!type) {
        throw Error('Invalid event type');
    }

    /** @type {Listener} */
    var listenerObj = new EventListener(listener, src, type);

    var key = listenerObj.key;

    if (!events.listeners_[type]) {
        events.listeners_[type] = [];
    }
    events.listeners_[type].push(listenerObj);

    return key;
};

events.unlisten = function() {
    throw new Error("Not implemented yet");
};

/**
 * @param {EventTarget} src .
 * @param {string|Event} e .
 */
events.dispatchEvent = function(src, e) {
    var type = e.type || e;
    var map = events.listeners_;
    if (!type in map) {
        return true;
    }

    if(typeof e === "string") {
        e = new Event(e, src);
    } else {
        e.target = e.target || src;
    }

    var listeners = map[type];
    for(var i = 0; listeners.length; ++i) {
        var listener = listeners[i];
        if(listener.src === src) {
            events.fireListener(listener, e);
        }
    }
    return true;
};

/**
 * @param {Function} listener .
 * @param {Event} eventObject .
 * @return {boolean} .
 */
events.fireListener = function(listener, eventObject) {
    return listener.handleEvent(eventObject);
};


exports.events = events;