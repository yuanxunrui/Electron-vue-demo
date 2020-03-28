# 导航
该项目用户在安装完npm环境后可直接运行，满足window和mac的打包需要，可直接查看package.json中指令进行打包操作
（强烈建议dmg格式在macOS环境下打包，exe格式在window系统下打包）
## 1、安装npm环境
#### 安装vue环境

`root`路径执行`npm i`
#### 安装electron环境
`/release`路径下执行`npm i`

## 2、编译Vue项目
`npm run build`

## 3、编译Electron项目
进入`release`文件夹
执行`npm run start`查看效果

执行`npm run build`打包dmg格式文件

执行`npm run build:win`打包exe格式文件

具体查看`package.json`
