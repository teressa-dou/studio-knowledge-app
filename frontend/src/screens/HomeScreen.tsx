/**
 * 主屏幕组件
 * 这是应用的首页，显示欢迎信息和导航按钮
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

/**
 * HomeScreen 组件
 * @returns JSX.Element - 主屏幕的UI
 */
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 头部 */}
      <View style={styles.header}>
        <Text style={styles.title}>Studio Knowledge App</Text>
        <Text style={styles.subtitle}>工业设备组装工作室知识平台</Text>
      </View>

      {/* 功能卡片 */}
      <View style={styles.cardsContainer}>
        {/* 内容管理卡片 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>📚</Text>
          <Text style={styles.cardTitle}>内容管理</Text>
          <Text style={styles.cardDescription}>浏览和上传知识内容</Text>
        </TouchableOpacity>

        {/* AI对话卡片 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>💬</Text>
          <Text style={styles.cardTitle}>AI对话</Text>
          <Text style={styles.cardDescription}>与AI进行对话交流</Text>
        </TouchableOpacity>

        {/* 成员管理卡片 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>👥</Text>
          <Text style={styles.cardTitle}>成员管理</Text>
          <Text style={styles.cardDescription}>查看工作室成员</Text>
        </TouchableOpacity>

        {/* 我的档案卡片 */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardIcon}>👤</Text>
          <Text style={styles.cardTitle}>我的档案</Text>
          <Text style={styles.cardDescription}>管理个人信息和设置</Text>
        </TouchableOpacity>
      </View>

      {/* 快速统计 */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>工作室统计</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>128</Text>
            <Text style={styles.statLabel}>内容总数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>活跃成员</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>知识板块</Text>
          </View>
        </View>
      </View>

      {/* 底部提示 */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          欢迎使用 Studio Knowledge App！
        </Text>
        <Text style={styles.footerSubtext}>
          选择上方的功能开始使用应用
        </Text>
      </View>
    </ScrollView>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#e8e8e8',
  },
  cardsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  footerSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
});

export default HomeScreen;