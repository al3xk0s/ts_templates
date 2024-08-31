import { buildSync } from 'esbuild';

const root = 'src/index.ts';
const out = 'public/index.js';

buildSync({
    entryPoints: [root],
    bundle: true,
    minify: true,
    outfile: out,
    target: [
        'es2020',
        'chrome58',
        'edge16',
        'firefox57',
        'node12',
        'safari11',
    ],
});
