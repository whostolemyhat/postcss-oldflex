const postcss = require('postcss');

module.exports = postcss.plugin('postcss-oldflex', opts => {
    opts = opts || {};

    // Work with options here

    return function (css) {

        // Transform CSS AST here
        css.walkRules(rule => {
            const webkitFlexExists = rule.some(
                ({ value }) => value === '-webkit-flex');

            if (!webkitFlexExists) {
                rule.walkDecls('display', decl => {
                    const { value } = decl;
                    if (value === 'flex') {
                        decl.cloneBefore({ value: '-webkit-flex' });
                    }
                });
            }
        });
    };
});
