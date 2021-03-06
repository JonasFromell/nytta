(function (global) {
    "use strict";
    function each (obj, fn, context) {
        var i, nth;

        if (!obj) {
            return;
        }

        if (obj.forEach === Array.prototype.forEach) {
            return obj.forEach(fn, context);
        }

        if (obj.length === +obj.length) {
            for (i = 0, nth = obj.length; i < nth; i++) {
                fn.call(context || obj, obj[i], i, obj);
            }
        }
        else {
            var keys = Object.keys(obj);

            for (i = 0, nth = keys.length; i < nth; i++) {
                var key = keys[i];

                fn.call(context || obj, obj[key], key, obj);
            }
        }
    }
    function extend (obj) {
        each([].slice.call(arguments, 1), function (source) {
            each(source, function (value, key) {
                obj[key] = value;
            });
        });

        return obj;
    }
    function mixin (target, source) {
        extend(target, source);

        function Constructor () {
            this.constructor = target;
        }

        Constructor.prototype = source.prototype;

        child.prototype = new Constructor();
        child.__super__ = source.prototype;

        return child;
    }
    var nytta = {
        each: each,
        extend: extend,
        mixin: mixin
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = nytta;
    }
    else {
        global.nytta = nytta;
    }
})(this);