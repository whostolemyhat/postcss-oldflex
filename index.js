import postcss from 'postcss';

const postcssOldflex = postcss.plugin('postcss-oldflex', opts => {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here
        css.walkRules(rule => {
          const webkitFlexExists = rule.some(({ prop }) => prop === '-webkit-flex');

          if (!webkitFlexExists) {
            rule.walkDecls('display', decl => {
              const { value } = decl;
              if (value === 'flex') {
                decl.cloneBefore({ prop: '-webkit-flex' });
              }
            })
          }
        })

    };
});

export default postcssOldflex;
