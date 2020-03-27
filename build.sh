#! bin/sh
echo -e "\033[33m ---------- 即将进行vue打包 ---------- \033[0m"
sleep 0.5
npm run build

echo -e "\033[32m -------- vue打包完成 ---------- \033[0m"
sleep 1
echo -e "\033[33m ---------- 即将进行Electron打包exe文件 ---------- \033[0m"

cd release
npm run build:win64

echo -e "\033[32m ---------- success ----------\033[0m"
sleep 1
open ./outdir
