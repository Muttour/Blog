const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    chainWebpack: config => {
        config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@less', resolve('src/less'))
            .set('@utils', resolve('src/utils'))
            .set('@router', resolve('src/router'));
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-site.com",
            },
        },
    },

}
