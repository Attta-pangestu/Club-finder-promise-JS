const path = require('path') ; 
const htmlWebpackPlugin = require('html-webpack-plugin') ; 

module.exports = {
    entry : './app.js', 
    output : {
        path : path.resolve(__dirname, 'dist'), 
        filename : 'bundle.js'
    },
    
    module: {
        rules : [
            // Style and css loader
            {
                test: /\.css$/, 
                use : [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }, 

    plugins : [
        new htmlWebpackPlugin({
            template : './src/template.html', 
            filename: 'index.html'
        })
    ],

    devServer: {
        client : {
            overlay : {
                errors: true, 
                warnings: false
            }
        }
    }, 
};