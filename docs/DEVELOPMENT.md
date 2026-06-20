# 🛠 开发指南

欢迎！这个指南将帮助你理解项目结构和如何进行开发。

---

## 📚 项目结构详解

```
frontend/
├── App.tsx                      # 主应用入口
├── app.json                     # Expo 配置
├── package.json                 # 项目依赖
├── tsconfig.json               # TypeScript 配置
├── src/
│   ├── screens/                # 屏幕组件（各个页面）
│   │   ├── HomeScreen.tsx      # 首页
│   │   ├── ContentScreen.tsx   # 内容管理页面（待开发）
│   │   ├── ChatScreen.tsx      # AI对话页面（待开发）
│   │   └── ProfileScreen.tsx   # 用户档案页面（待开发）
│   │
│   ├── components/             # 可复用组件
│   │   ├── Header.tsx
│   │   ├── Card.tsx
│   │   └── Button.tsx
│   │
│   ├── services/               # 服务层（API、Firebase）
│   │   ├── firebase.ts         # Firebase 配置
│   │   ├── auth.ts             # 认证服务
│   │   └── content.ts          # 内容服务
│   │
│   └── utils/                  # 工具函数
│       ├── constants.ts
│       └── helpers.ts
│
└── assets/                      # 静态资源
    ├── icon.png
    └── splash.png
```

---

## 🎯 核心概念

### 1. 屏幕（Screens）

屏幕是应用中的各个页面。每个屏幕都是一个 React 组件。

**创建新屏幕的步骤**：

```typescript
// src/screens/MyNewScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyNewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>我的新屏幕</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyNewScreen;
```

### 2. 导航（Navigation）

导航用于在屏幕之间切换。我们使用 React Navigation。

```typescript
// 在 App.tsx 中添加新屏幕
<Stack.Screen
  name="MyScreen"
  component={MyNewScreen}
  options={{ title: '我的屏幕' }}
/>
```

### 3. 状态管理

使用 React Hooks 管理组件状态：

```typescript
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>计数: {count}</Text>
      <Button title="增加" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

### 4. 样式

React Native 使用 StyleSheet 创建样式：

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
```

---

## 🔧 常用命令

### 启动开发服务器
```bash
cd frontend
npm start
# 或
expo start
```

### 在特定平台运行
```bash
# Android
npm run android
# 或按 'a'

# iOS (仅 Mac)
npm run ios
# 或按 'i'

# Web
npm run web
# 或按 'w'
```

### 安装新的依赖包
```bash
npm install package-name
# 例如：npm install react-native-gesture-handler
```

### 查看日志
```bash
# 在 Expo 控制台中
# 按 'j' 打开 Chrome DevTools
# 或在开发机器的控制台查看输出
```

---

## 📱 React Native 基础

### 常用组件

#### View（视图容器）
```typescript
<View style={{ flex: 1, padding: 10 }}>
  {/* 内容 */}
</View>
```

#### Text（文本）
```typescript
<Text style={{ fontSize: 16 }}>Hello World</Text>
```

#### TouchableOpacity（可点击区域）
```typescript
<TouchableOpacity onPress={() => console.log('点击了')}>
  <Text>点击我</Text>
</TouchableOpacity>
```

#### ScrollView（可滚动容器）
```typescript
<ScrollView>
  {/* 内容会自动滚动 */}
</ScrollView>
```

#### FlatList（列表）
```typescript
<FlatList
  data={items}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={item => item.id}
/>
```

---

## 🔌 Firebase 集成指南

### 第一步：创建 Firebase 项目

1. 访问 https://console.firebase.google.com/
2. 点击"创建项目"
3. 输入项目名称
4. 完成设置

### 第二步：获取配置信息

1. 在 Firebase Console 中
2. 点击"设置"按钮（齿轮图标）
3. 选择"项目设置"
4. 向下滚动到"您的应用"
5. 点击"</> 注册新应用
6. 选择 Web
7. 复制配置代码

### 第三步：更新配置

编辑 `src/services/firebase.ts`：

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
};
```

### 第四步：在应用中初始化

编辑 `App.tsx`：

```typescript
import { initializeFirebase } from './src/services/firebase';

// 在应用启动时
useEffect(() => {
  initializeFirebase();
}, []);
```

---

## 🔐 Firebase 认证

### 创建认证服务

创建 `src/services/auth.ts`：

```typescript
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getAuthInstance } from './firebase';

export const registerUser = async (email: string, password: string) => {
  try {
    const auth = getAuthInstance();
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const auth = getAuthInstance();
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const auth = getAuthInstance();
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
```

---

## 💾 Firestore 数据库

### 数据结构示例

```
firestore/
├── users/
│   └── {userId}
│       ├── email: string
│       ├── name: string
│       ├── avatar: string
│       └── createdAt: timestamp
│
├── content/
│   └── {contentId}
│       ├── title: string
│       ├── description: string
│       ├── category: string
│       ├── author: string
│       ├── createdAt: timestamp
│       └── attachments: array
│
└── conversations/
    └── {conversationId}
        ├── participants: array
        ├── messages: array
        └── createdAt: timestamp
```

### 创建内容服务

创建 `src/services/content.ts`：

```typescript
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp
} from 'firebase/firestore';
import { getFirestoreInstance } from './firebase';

export interface Content {
  id?: string;
  title: string;
  description: string;
  category: string;
  author: string;
  createdAt: Timestamp;
  attachments?: string[];
}

export const createContent = async (content: Content) => {
  try {
    const db = getFirestoreInstance();
    const docRef = await addDoc(collection(db, 'content'), {
      ...content,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const getContent = async (category: string) => {
  try {
    const db = getFirestoreInstance();
    const q = query(
      collection(db, 'content'),
      where('category', '==', category)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw error;
  }
};
```

---

## 🧪 调试技巧

### 1. 使用 console.log

```typescript
console.log('调试信息:', myVariable);
console.error('错误:', error);
console.warn('警告:', warning);
```

### 2. 使用 Chrome DevTools

按 'j' 在开发机器上打开 Chrome DevTools。

### 3. 使用 React DevTools

安装 React Native Debugger：
https://github.com/jhen0409/react-native-debugger

---

## 📝 提交代码的最佳实践

### 1. 提交前检查

```bash
# 查看修改了哪些文件
git status

# 查看具体修改
git diff
```

### 2. 提交更改

```bash
# 添加所有修改
git add .

# 或添加特定文件
git add src/MyFile.tsx

# 提交（使用清晰的消息）
git commit -m "添加用户认证功能"
```

### 3. 推送到 GitHub

```bash
git push origin main
```

### 提交消息规范

- ✅ 好的: `feat: 添加登录认证功能`
- ✅ 好的: `fix: 修复内容列表加载错误`
- ✅ 好的: `docs: 更新安装指南`
- ❌ 不好的: `update` 或 `fix bug`

---

## 📚 下一步开发任务

### Phase 1 完成后
1. ✅ 项目框架搭建
2. ✅ 基础导航设置
3. ⏳ **下一步：实现登录注册屏幕**

### 推荐任务顺序
1. 创建 LoginScreen 组件
2. 创建 RegisterScreen 组件
3. 集成 Firebase Authentication
4. 测试登录流程
5. 创建 ContentScreen（内容列表）
6. 实现内容上传功能

---

## 🆘 遇到问题？

### 常见问题

**Q: 模块未找到错误？**
A: 确保文件路径正确，运行 `npm install`，重启开发服务器

**Q: 样式不生效？**
A: React Native 不支持 CSS，只能使用 StyleSheet。检查拼写。

**Q: Firebase 连接失败？**
A: 检查 Firebase 配置，确保网络连接正常

### 获取帮助

- 查看官方文档
- 在 GitHub Issues 提问
- 查看相关教程

---

## 🎓 推荐学习资源

- [React Native 官方文档](https://reactnative.dev/)
- [Expo 文档](https://docs.expo.dev/)
- [Firebase 文档](https://firebase.google.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)

---

**祝你开发顺利！** 🚀