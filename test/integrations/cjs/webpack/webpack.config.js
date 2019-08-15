const path = require('path');

module.exports = {
    entry: './test/integrations/cjs/webpack/index.js',
    output: {
        filename: 'webpack-output.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        minimize: false
    }
};
