#! bin/sh
echo -e "\033[33m 请确保当前为root目录 \033[0m"
sleep 1
echo -e "\033[33m 安装vue项目node环境 \033[0m"
sleep 0.5
npm i

echo -e "\033[32m 安装Electron项目node环境 \033[0m"
sleep 0.5
cd release
npm i

echo -e "\033[32m success \033[0m"

