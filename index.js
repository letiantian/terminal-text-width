var widths = [
    [126, 1],
    [159, 0],
    [687, 1],
    [710, 0],
    [711, 1],
    [727, 0],
    [733, 1],
    [879, 0],
    [1154, 1],
    [1161, 0],
    [4347, 1],
    [4447, 2],
    [7467, 1],
    [7521, 0],
    [8369, 1],
    [8426, 0],
    [9000, 1],
    [9002, 2],
    [11021, 1],
    [12350, 2],
    [12351, 1],
    [12438, 2],
    [12442, 0],
    [19893, 2],
    [19967, 1],
    [55203, 2],
    [63743, 1],
    [64106, 2],
    [65039, 1],
    [65059, 0],
    [65131, 2],
    [65279, 1],
    [65376, 2],
    [65500, 1],
    [65510, 2],
    [120831, 1],
    [262141, 2],
    [1114109, 1],
];

var getCharWidth = function(c) {
    var code =  c.charCodeAt(0);
    if (code == 14 || code == 15)
        return 0;
    for (var i=0; i<widths.length; ++i) {
        if (code < widths[i][0]) 
            return widths[i][1];
    }
    return 1;
}

var getTextWidth = function(s) {
    var r = 0;
    for (var i=0; i<s.length; ++i) {
        r += getCharWidth(s[i]);
    }
    return r;
};

module.exports = getTextWidth;

/**
 * Thanks:
 * http://likang.me/blog/2012/04/13/calculate-character-width-in-python/
 * https://github.com/urwid/urwid/blob/master/urwid/old_str_util.py
 */