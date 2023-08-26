const {merge} = require('webpack-merge') ; 
const common = require('./webpack.commonn.js'); 

module.exports = merge(common, {
    mode: 'production',
    module : {
        rules : [
            // Babel loader
            {
                test : /\.js$/, 
                exclude : /node_modules/, 
                use : [
                    {
                        loader: 'babel-loader', 
                        options : {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    }
}); 

