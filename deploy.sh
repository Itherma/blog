#!/usr/bin/env sh 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'xujian.site' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:sunnyxujian/github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://sunnyxujian:${GITHUB_TOKEN}@github.com/sunnyxujian/github.io.git
  git config --global user.name "sunnyxujian"
  git config --global user.email "1227971544@qq.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
