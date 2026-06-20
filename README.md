# Studio Knowledge App 🚀

工业设备组装工作室的知识管理与学习平台

## 📱 项目简介

Studio Knowledge App 是为工业设备组装工作室设计的移动应用，支持：
- 👥 成员认证与管理
- 📚 多板块知识库管理
- 💬 AI对话功能（类似GPT）
- 📤 内容上传与分享
- 🏢 工作室管理与建设

**用户规模**：100-200人  
**目标平台**：iOS & Android

---

## 🛠 技术栈

### 前端
- **React Native** - 跨平台移动开发框架
- **Expo** - 简化的React Native开发工具
- **TypeScript** - 类型安全
- **React Navigation** - 路由管理

### 后端
- **Firebase** - 后端即服务 (BaaS)
  - Authentication - 用户认证
  - Firestore - 实时数据库
  - Storage - 文件存储
  - Cloud Functions - 无服务器函数

### AI集成
- **OpenAI API** - GPT对话功能

---

## 📁 项目结构

```
studio-knowledge-app/
├── frontend/                 # React Native + Expo 前端
│   ├── app/
│   ├── src/
│   │   ├── screens/         # 屏幕组件
│   │   ├── components/      # 可复用组件
│   │   ├── services/        # API & Firebase服务
│   │   └── utils/           # 工具函数
│   ├── app.json
│   └── package.json
│
├── docs/                     # 文档
│   ├── SETUP.md             # 环境配置
│   └── DEVELOPMENT.md       # 开发指南
│
└── README.md
```

---

## 🚀 快速开始

### 前置要求
- Node.js >= 14.0
- npm 或 yarn
- Expo CLI
- Git

### 安装步骤

#### 1. 克隆仓库
```bash
git clone https://github.com/teressa-dou/studio-knowledge-app.git
cd studio-knowledge-app
```

#### 2. 前端设置
```bash
cd frontend
npm install
```

#### 3. 启动Expo开发服务器
```bash
expo start
```

#### 4. 在手机上运行
- 下载Expo Go应用
- 扫描终端显示的二维码
- 应用会在手机上加载

详见 [SETUP.md](./docs/SETUP.md)

---

## 📋 开发路线图

### Phase 1: 核心功能 (第1-2周)
- [x] 项目框架搭建
- [x] 基础导航配置
- [ ] Firebase初始化
- [ ] 用户认证系统
- [ ] 登录/注册界面

### Phase 2: 内容管理 (第3-4周)
- [ ] 多板块内容模型设计
- [ ] 内容列表展示
- [ ] 内容上传功能

### Phase 3: AI对话功能 (第5-6周)
- [ ] OpenAI API集成
- [ ] 对话界面开发
- [ ] 消息历史管理

### Phase 4: 优化与测试
- [ ] 性能优化
- [ ] 安全审计
- [ ] 部署准备

---

## 💡 学习资源

- [Expo官方文档](https://docs.expo.dev)
- [React Native中文文档](https://reactnative.cn)
- [Firebase官方文档](https://firebase.google.com/docs)

---

## 📄 许可证

MIT License

---

**项目状态**: 🚀 开发中  
**最后更新**: 2026-06-20