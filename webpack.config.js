module.exports = {

    entry: './test.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: __dirname + '/scripts',
                exclude: /build\.js$/
            }
        ],
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
            {
                test: /\.json?$/,
                loader: 'json'
            }]
    }
}
