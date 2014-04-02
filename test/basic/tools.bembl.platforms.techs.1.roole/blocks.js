var PATH = require('path'),
    environ = require('bem-environ'),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs/v2');

exports.getTechs = function() {

    return {
        'bemjson.js'           : join(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'           : 'v2/bemdecl.js',
        'deps.js'              : 'v2/deps.js',
        'css'                  : 'v2/css',
        'ie.css'               : 'v2/ie.css',
        'ie6.css'              : 'v2/ie6.css',
        'ie7.css'              : 'v2/ie7.css',
        'ie8.css'              : 'v2/ie8.css',
        'ie9.css'              : 'v2/ie9.css',
        'roole'                : 'v2/roole',
        'bemhtml'              : join(BEMBL_TECHS, 'bemhtml.js'),
        'js+bemhtml'           : join(BEMBL_TECHS, 'js+bemhtml.js'),
        'js'                   : 'v2/js-i'
    };

};

exports.defaultTechs = ['css', 'browser.js', 'bemhtml'];
