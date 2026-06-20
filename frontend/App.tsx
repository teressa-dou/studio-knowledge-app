/**
 * 应用主入口文件
 * 这是应用的核心文件，包含路由和导航配置
 */

import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';

// 创建导航栈
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * 主导航栈
 * 用于屏幕之间的切换
 */
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Studio Knowledge App',
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * 底部选项卡导航
 * 用于应用底部的导航栏
 */
function RootNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          borderTopColor: '#e0e0e0',
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="MainTab"
        component={MainStack}
        options={{
          title: '首页',
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ContentTab"
        component={MainStack}
        options={{
          title: '内容',
          tabBarLabel: '内容',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>📚</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={MainStack}
        options={{
          title: '对话',
          tabBarLabel: '对话',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>💬</Text>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={MainStack}
        options={{
          title: '我的',
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/**
 * 主应用组件
 */
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}