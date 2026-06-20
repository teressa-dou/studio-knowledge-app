/**
 * Firebase 配置和初始化文件
 * 这里配置 Firebase 连接参数
 */

import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

/**
 * Firebase 配置对象
 * 这些值需要从 Firebase Console 获取
 * 访问: https://console.firebase.google.com/
 * 
 * 步骤:
 * 1. 创建新项目或选择现有项目
 * 2. 点击"设置" -> "项目设置"
 * 3. 在"您的应用"部分找到 Web 应用配置
 */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

/**
 * 初始化 Firebase 应用
 * 这应该在应用启动时调用一次
 */
let firebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

/**
 * 初始化 Firebase 服务
 * @returns {void}
 */
export const initializeFirebase = () => {
  try {
    // 检查配置是否已正确设置
    if (firebaseConfig.apiKey === "YOUR_API_KEY") {
      console.warn(
        "⚠️ Firebase 配置未设置。请更新 src/services/firebase.ts 中的配置。"
      );
      return;
    }

    // 初始化 Firebase
    firebaseApp = initializeApp(firebaseConfig);

    // 初始化各个服务
    auth = getAuth(firebaseApp);
    db = getFirestore(firebaseApp);
    storage = getStorage(firebaseApp);

    console.log("✅ Firebase 初始化成功");
  } catch (error) {
    console.error("❌ Firebase 初始化失败:", error);
  }
};

/**
 * 获取 Firebase 认证实例
 * @returns {Auth} Firebase Auth 实例
 */
export const getAuthInstance = (): Auth => {
  if (!auth) {
    throw new Error("Firebase 未初始化。请先调用 initializeFirebase()");
  }
  return auth;
};

/**
 * 获取 Firestore 数据库实例
 * @returns {Firestore} Firestore 实例
 */
export const getFirestoreInstance = (): Firestore => {
  if (!db) {
    throw new Error("Firebase 未初始化。请先调用 initializeFirebase()");
  }
  return db;
};

/**
 * 获取 Storage 实例
 * @returns {FirebaseStorage} Firebase Storage 实例
 */
export const getStorageInstance = (): FirebaseStorage => {
  if (!storage) {
    throw new Error("Firebase 未初始化。请先调用 initializeFirebase()");
  }
  return storage;
};

/**
 * Firebase 配置帮助函数
 * 用于测试连接是否正常
 */
export const testFirebaseConnection = async () => {
  try {
    const db = getFirestoreInstance();
    console.log("✅ Firestore 连接测试成功");
    return true;
  } catch (error) {
    console.error("❌ Firestore 连接测试失败:", error);
    return false;
  }
};

export default {
  firebaseConfig,
  initializeFirebase,
  getAuthInstance,
  getFirestoreInstance,
  getStorageInstance,
  testFirebaseConnection,
};