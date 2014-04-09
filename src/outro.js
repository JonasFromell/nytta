    if (typeof module != 'undefined' && module.exports) {
        module.exports = nytta;
    }
    else {
        global.nytta = nytta;
    }
})(this);