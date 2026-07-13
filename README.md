# AI营销文案矩阵工具 ✨

一站式AI营销文案生成工具，覆盖小红书、朋友圈、电商详情、短视频脚本、SEO文章五大场景。

## 🚀 技术栈

- **框架**: Astro + Tailwind CSS (CDN)
- **部署**: Cloudflare Pages
- **AI**: 火山引擎 ARK API (豆包)

## 📦 功能模块

| 模块 | 说明 |
|------|------|
| 📕 小红书种草文 | 生成带emoji的种草/测评/开箱笔记 |
| 💬 朋友圈营销文 | 生成3条不同风格的朋友圈文案 |
| 🛒 商品详情文案 | 生成SEO标题+卖点描述+详情长文 |
| 🎬 短视频脚本 | 生成分镜表格+完整口播稿 |
| 📝 SEO文章 | 生成含标题结构的SEO优化文章 |

## 🔧 本地开发

```bash
npm install
npm run dev
```

## 🌐 部署到 Cloudflare Pages

1. Fork 本项目
2. 在 Cloudflare Dashboard 创建 Pages 项目，连接 GitHub 仓库
3. 设置环境变量 `ARK_API_KEY` 为你的火山引擎 ARK API Key
4. 构建配置：
   - Build command: `npm run build`
   - Output directory: `dist`
5. 部署完成

## ⚙️ 环境变量

| 变量名 | 说明 |
|--------|------|
| `ARK_API_KEY` | 火山引擎 ARK API Key |

## 📄 License

MIT
