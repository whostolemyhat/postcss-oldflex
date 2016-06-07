# PostCSS Oldflex [![Build Status][ci-img]][ci]

[PostCSS] plugin which always adds display: -webkit-flex prefix to flexbox declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/whostolemyhat/postcss-oldflex.svg
[ci]:      https://travis-ci.org/whostolemyhat/postcss-oldflex

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-oldflex') ])
```

See [PostCSS] docs for examples for your environment.
