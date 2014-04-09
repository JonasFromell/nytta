    function mixin (target, source) {
        extend(target, source);

        function Constructor () {
            this.constructor = target;
        }

        Constructor.prototype = parent.prototype;

        child.prototype = new Constructor();
        child.__super__ = parent.prototype;

        return child;
    }