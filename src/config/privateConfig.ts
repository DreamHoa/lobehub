/**
 * 私有化部署配置
 * 在这里集中管理所有需要隐藏/禁用的功能
 * 官方代码更新时只需维护这一个文件
 */
import { SettingsTabs } from '@/store/global/initialState';

// 在设置页面中隐藏的 Tab
export const HIDDEN_SETTINGS_TABS: SettingsTabs[] = [
  SettingsTabs.Provider,
  SettingsTabs.ServiceModel,
  SettingsTabs.Memory,
];

// 在社区页面中隐藏的导航项
export const HIDDEN_COMMUNITY_TABS: string[] = [
  'model',
  'provider',
];

// 在聊天输入框中隐藏的 Action
export const HIDDEN_CHAT_ACTIONS: string[] = [
  'memory',
];

// 在自定义侧边栏中隐藏的项目
export const HIDDEN_SIDEBAR_ITEMS: string[] = [
  'memory',
];

// 隐藏模型选择器中的服务商设置按钮
export const HIDE_PROVIDER_SETTINGS_BUTTON = true;

// 隐藏模型选择器底部的管理服务商入口
export const HIDE_PROVIDER_MANAGER_FOOTER = true;
