const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        open: true,
        port: 9000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
});
