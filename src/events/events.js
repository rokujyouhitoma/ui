var events = {};


/**
 * @param {object} src .
 * @param {string} type .
 * @param {Function} listener .
 * @param {boolean=} opt_capt .
 * @param {object=} opt_handler .
 */
events.listen = function(src, type, listener, opt_capt, opt_handler) {
};


/**
 * @param {object} src .
 * @param {string} type .
 * @param {Function} listener .
 * @param {boolean=} opt_capt .
 * @param {object=} opt_handler .
 */
events.unlisten = function(src, type, listener, opt_capt, opt_handler) {
};


/**
 * @param {Function} listener .
 * @param {Event} evt event Object.
 */
events.fireListener = function(listener, evt) {
    var rv = listener.handleEvent(eventObject);
    //TODO: xxx
    //Bubling.
    //Caputure.
    return rv;
};


exports.events = events;
