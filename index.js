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


module.exports = _;