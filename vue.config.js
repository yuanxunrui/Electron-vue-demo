const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // 部署生产环境和开发环境下的URL
    publicPath: './',
    // 生成的文件的总文件夹的名称
    outputDir:'./release/dist',
    // 指定生成的html文件的输出路径 (配置之后，改变系统默认的index.html的文件名)
    indexPath:'./index.html',
    // 针对map文件,map文件的作用:打包之后的项目,代码都经过了压缩加密
    // 这时如果报错,无法准确得知错误在哪里产生,有了map文件,就可以精准定位到是哪里出错
    // 如果打包后发现map文件体积过大,导致整个项目文件体积过大,就可以设置不输出map文件
    productionSourceMap:false,
    devServer: {
        // can be overwritten by process.env.HOST
        host: '0.0.0.0',
        port: 8080
    },
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                win: {
                    icon: './public/app.ico'
                },
                mac: {
                    icon: './public/app.png'
                }
            }
        }
    }
};
