# aliu 的个人博客

基于 Next.js 16 + TypeScript + Tailwind CSS 构建的现代化个人网站。

## 技术栈

- **框架**: Next.js 16.2.6 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **组件库**: shadcn/ui (base-nova style)
- **国际化**: next-intl 4.13
- **包管理**: Bun
- **代码规范**: ESLint + Prettier

## 项目结构

```
├── app/                          # Next.js App Router
│   ├── [locale]/                # 国际化路由
│   │   ├── (home)/              # 首页（路由组，不影响 URL）
│   │   │   └── page.tsx
│   │   ├── about/               # 关于页面
│   │   │   └── page.tsx
│   │   └── layout.tsx           # 布局
│   ├── layout.tsx               # 根布局
│   └── page.tsx                 # 重定向到 /zh
├── components/                  # React 组件
│   ├── layout/                  # 布局组件
│   │   ├── header.tsx           # 导航栏
│   │   ├── footer.tsx           # 页脚
│   │   └── language-switcher.tsx  # 语言切换
│   ├── home/                    # 首页组件
│   │   └── hero-section.tsx
│   └── ui/                      # shadcn/ui 组件
├── i18n/                        # 国际化配置
│   ├── config.ts                # i18n 配置
│   └── locales/                 # 翻译文件
│       ├── zh.json
│       └── en.json
├── lib/                         # 工具函数和常量
│   ├── utils.ts
│   └── constants.ts
├── public/                      # 静态资源
├── next.config.ts               # Next.js 配置
├── tailwind.config.ts           # Tailwind 配置
├── tsconfig.json                # TypeScript 配置
└── package.json
```

## 开发

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 类型检查
bun run type-check

# 代码检查
bun run lint

# 代码格式化
bun run format

# 构建生产版本
bun run build

# 启动生产服务器
bun run start
```

## 路由

- `/` → 重定向到 `/zh`
- `/zh` → 中文首页
- `/en` → 英文首页
- `/zh/about` → 中文关于页面
- `/en/about` → 英文关于页面

## 特性

- ✅ 国际化支持（中文/英文）
- ✅ 响应式设计
- ✅ 组件化架构
- ✅ TypeScript 严格类型检查
- ✅ Tailwind CSS 4 样式
- ✅ 路由组（Route Groups）优化 URL 结构
- ✅ 错误边界和加载状态
- ✅ SEO 优化（动态 metadata）
- ✅ 代码规范（ESLint + Prettier）

## 部署

项目配置为静态导出，可部署到 GitHub Pages 或其他静态托管服务。

```bash
# 构建静态文件
bun run build

# 输出目录：out/
```

## License

MIT
