var postcss = require('postcss');

module.exports = postcss.plugin('postcss-oldflex', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here
        css.walkRules(function (rule) {
            var webkitFlexExists = rule.some(
                function (decl) {
                    decl.value === '-webkit-flex';
                });

            if (!webkitFlexExists) {
                rule.walkDecls('display', function (decl) {
                    var value = decl.value;
                    if (value === 'flex') {
                        decl.cloneBefore({ value: '-webkit-flex' });
                    }
                });
            }
        });
    };
});
