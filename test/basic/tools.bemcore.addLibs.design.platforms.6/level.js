var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
                'bem-core/common.blocks',
                'bem-core/touch.blocks',
                'bem-core/touch-phone.blocks',
                'bem-components/common.blocks',
                'bem-components/design/common.blocks',
                'bem-components/touch.blocks',
                'bem-components/design/touch.blocks',
                'bem-components/touch-phone.blocks',
                'bem-components/design/touch-phone.blocks',
                'bem-mvc/common.blocks',
                'bem-mvc/touch.blocks',
                'bem-mvc/touch-phone.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.LIB_ROOT, path); })
            .concat([
                'common.blocks',
                'touch.blocks',
                'touch-phone.blocks'
            ]
            .map(function(path) { return PATH.resolve(environ.PRJ_ROOT, path); })))
    });

};
