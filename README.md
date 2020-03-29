# 导航
- 安装node环境
- 编译vue
- 打包exe/dmg

## 1、安装node环境
环境安装有两种方式：

````
// 1、通过脚本安装
// 直接在项目根目录下执行以下脚本
sh init.sh

// 2、直接命令安装
// 执行两遍 npm i 命令，分别root目录、release目录
cd </root>
npm i
cd release
npm i
````


## 2、编译Vue
将生成`dist文件夹`，为接下来的`打包exe和dmg应用程序`做准备
````
// 项目根目录下执行脚本
cd </root>
npm run build
````


## 3、打包
执行这一步的前提是上面两步已顺利完成<p>
>本demo只对`exe`和`dmg`格式做了打包配置，如有其他格式需求，请自行配置`/release/package.json文件`<p>

**注意：所有打包操作都是在`/release文件夹`下进行的**

以下是打包涉及到的一些指令：
>必须保证是在`/release`下
````
// 查看应用程序运行效果
npm run start

// 打包dmg格式文件
// 强烈建议在macOS系统下执行该命令
npm run build

// 打包exe格式文件
// 此处默认配置的是window-x64，如有其他需求请自行添加指令
// 强烈建议在window系统下执行该命令
npm run build:win64
````

打包成功之后会在`/release/outdir`下生成打包文件
