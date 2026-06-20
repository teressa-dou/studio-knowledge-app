# 📚 环境配置指南

作为编程新手，这个指南会一步步帮助你配置开发环境。

---

## ���� 前置条件

### 1. 安装 Node.js 和 npm

**什么是 Node.js？**  
Node.js 是一个JavaScript运行环境，让你可以在电脑上运行JavaScript代码。

**安装步骤**：

**Windows 用户**：
1. 访问 https://nodejs.org/
2. 下载 LTS 版本（推荐）
3. 双击安装程序，按照提示安装
4. 完成后打开命令行（CMD 或 PowerShell）
5. 输入以下命令验证安装：
```bash
node --version
npm --version
```

**Mac 用户**：
1. 访问 https://nodejs.org/
2. 下载 LTS 版本
3. 双击 .pkg 文件进行安装
4. 打开终端输入验证命令：
```bash
node --version
npm --version
```

**Linux 用户**：
```bash
sudo apt update
sudo apt install nodejs npm
node --version
npm --version
```

---

### 2. 安装 Git

**什么是 Git？**  
Git 是版本控制系统，帮助你管理代码更改历史。

**安装步骤**：

**Windows**：
1. 访问 https://git-scm.com/
2. 下载并安装
3. 按照默认设置完成安装

**Mac**：
```bash
brew install git
```

**Linux**：
```bash
sudo apt install git
```

验证安装：
```bash
git --version
```

---

### 3. 安装 Expo CLI

Expo 是一个工具，让开发 React Native 应用变得简单。

```bash
npm install -g expo-cli
```

验证安装：
```bash
expo --version
```

---

### 4. 配置 GitHub SSH 密钥（可选但推荐）

这样你可以安全地连接到 GitHub。

**生成 SSH 密钥**：
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

按回车接受所有默认选项。

**在 GitHub 添加 SSH 密钥**：
1. 复制你的公钥：
   - Windows: `type %USERPROFILE%\.ssh\id_ed25519.pub`
   - Mac/Linux: `cat ~/.ssh/id_ed25519.pub`
2. 访问 https://github.com/settings/keys
3. 点击 "New SSH key"
4. 粘贴你的公钥
5. 点击 "Add SSH key"

---

## 🚀 克隆和设置项目

### 1. 克隆仓库

**使用 SSH（推荐）**：
```bash
git clone git@github.com:teressa-dou/studio-knowledge-app.git
cd studio-knowledge-app
```

**或使用 HTTPS**：
```bash
git clone https://github.com/teressa-dou/studio-knowledge-app.git
cd studio-knowledge-app
```

### 2. 安装前端依赖

```bash
cd frontend
npm install
```

**这会做什么？**
- npm 会读取 `package.json` 文件
- 下载所有项目需要的依赖包
- 在 `node_modules` 文件夹中安装它们

---

## 🔥 启动开发服务器

### 启动 Expo

```bash
expo start
```

你会看到类似这样的输出：
```
Starting Expo server...
Tunnel ready.

To run the app with live reloading, choose one of the following:

 › Android Emulator - press 'a' in the above terminal
 › iOS Simulator - press 'i' in the above terminal
 › Web - press 'w' in the above terminal
 › Expo Go - scan the QR code with the Expo Go app
```

### 在手机上运行

**方式 1：使用 Expo Go 应用**
1. 在 App Store 或 Google Play 下载 "Expo Go"
2. 打开应用
3. 扫描终端中显示的二维码
4. 应用会在你的手机上加载！

**方式 2：使用模拟器**
- 按 'a' 启动 Android 模拟器
- 按 'i' 启动 iOS 模拟器（仅 Mac）
- 按 'w' 在网页浏览器中运行

---

## 🔧 常见问题

### Q: 我执行了命令但什么都没有发生？
**A**: 
- 确保你在正确的文件夹中（使用 `pwd` 或 `cd` 检查）
- 确保 Node.js 已正确安装（运行 `node --version`）

### Q: 我看到"command not found"错误？
**A**: 
- Expo CLI 可能没有正确安装
- 尝试重新安装：`npm install -g expo-cli`
- 重启命令行

### Q: 我的手机连接不上开发服务器？
**A**:
- 确保手机和电脑在同一个 WiFi 网络上
- 重新扫描 QR 码
- 尝试重新启动 Expo：按 Ctrl+C 然后再运行 `expo start`

### Q: 我想改变代码，但应用没有更新？
**A**:
- Expo 支持"热重载"，修改代码会自动更新
- 如果没有，尝试按 'r' 手动重载应用

---

## 📝 下一步

完成环境配置后，你可以：

1. 查看项目结构：`ls` 或 `dir`
2. 开始编辑代码
3. 在 `frontend/src/screens` 创建你的第一个屏幕
4. 参考 [DEVELOPMENT.md](./DEVELOPMENT.md) 了解开发流程

**恭喜！** 🎉 你已经完成了环境配置！现在可以开始开发了！

---

## 💻 推荐的代码编辑器

- **Visual Studio Code** (免费，强烈推荐)
  - 下载：https://code.visualstudio.com/
  - 推荐扩展：ES7+ React/Redux/React-Native snippets, Prettier, ESLint

- **WebStorm** (收费，但功能强大)
- **Sublime Text** (轻量级)

---

**遇到问题？**  
在 GitHub Issues 中提问，我会帮助你！😊