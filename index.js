/**
 * Created by samael on 15-6-10.
 */
var _ = {};
_.once = function(fn) {
    var invoked = false;
    var num;
    return function() {
        if (invoked == false) {
            invoked = true;
            num = fn();
            return num;
        }
        return num;
    }
}

_.memoize = function(fn1, fn2) {
    var cache = {};
    return function(arg) {
        var key = fn2 ? fn2(arg) : arg;
        if(!(key in cache)) {
            cache[key] = fn1(arg);
        }
        return cache[key];
    };
}

_.bind = function(fn, target) {
    return function () {
        return fn.apply(target);
    }
};
module.exports = _;