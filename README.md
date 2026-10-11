# 苦尽 · BITTER END COFFEE

由原始 `design.html` 整理的静态网站，保留原有视觉、文案、移动端导航和菜单切换。无需 npm、构建命令或后端，可直接发布到 GitHub Pages。

## 上传并发布（网页操作）

1. 解压 `bitter-end-coffee.zip`。
2. 在 GitHub 新建一个公开仓库，例如 `bitter-end-coffee`。
3. 在仓库文件页选择 **Add file → Upload files**（空仓库可点击 **uploading an existing file**）。将解压文件夹里的 **index.html、assets 文件夹和 README.md** 上传并提交；隐藏文件 `.nojekyll`、`.gitignore` 也可一并上传。
4. 注意：`index.html` 必须直接位于仓库根目录，不要额外套一层 `bitter-end-coffee` 文件夹，也不要只上传 ZIP。
5. 打开仓库 **Settings → Pages**。在 **Build and deployment → Source** 选择 **Deploy from a branch**，选择 **main** 分支和 **/(root)**，点击 **Save**。
6. 等待部署完成，在 Pages 设置页打开显示的网站地址。一般为 `https://你的用户名.github.io/bitter-end-coffee/`。

发布操作参考：[GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 本地预览

直接双击 `index.html` 即可。若电脑装有 Python，也可以在本文件夹中执行：

```sh
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 文件结构

```text
index.html         页面文案、菜单价格和店铺资料
assets/styles.css  配色、布局和响应式样式
assets/main.js     菜单分类切换、移动端导航、平滑滚动
assets/images/     原页面使用的 9 张图片（已本地化）
.nojekyll          跳过 Jekyll 处理
.gitignore         忽略系统文件
```

资源均使用相对路径，支持 GitHub Pages 的仓库子路径。

## 正式使用前填写

原稿以下内容原样保留，请在 `index.html` 中更新：

- 地址：`北京市朝阳区 [待填写具体地址]`
- 电话：显示文字和 `tel:010-XXXX-XXXX` 均需修改
- 邮箱：确认 `hello@bitterend.coffee`，修改时同步更新 `mailto:`
- Instagram、小红书、微信：当前链接为 `#`，需换成真实链接
- 确认营业时间、菜单价格和顾客评价是否用于正式展示

字体继续使用原稿的 Google Fonts 在线服务；网络不可用时会使用系统备用字体。图片已包含在项目中，无需访问原图片平台。本项目没有添加新的素材授权声明。
