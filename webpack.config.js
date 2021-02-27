const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        app: ['./src/index.js'],
        vendor: ['react', 'react-dom']
    },
    mode: 'development',
    devtool: 'eval-source-map',
    target: 'web',
    optimization: {
        runtimeChunk: 'single'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '我的app',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },{
                        loader: "css-loader",
                    },{
                        loader: "less-loader",
                            options: {
                                lessOptions: {
                                    strictMath: true,
                                },
                                sourceMap: true
                        },
                    },
                ],
              },
        ]
    }
}