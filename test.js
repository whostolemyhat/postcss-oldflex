import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}

 // Write tests here

test('adds -webkit-flex decl', t => {
    return run(t,
      'a{ display: flex }',
      'a{ display: -webkit-flex; display: flex }',
      { });
});


