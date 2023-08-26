const {merge} = require('webpack-merge') ; 
const common = require('./webpack.commonn.js'); 

module.exports = merge(common, {
    mode : 'development'
}); 

