import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: 'https://icon-icons.com/downloadimage.php?id=263048&root=4216/ICO/512/&file=chart_finance_economy_project_management_business_icon_263048.ico',
  height: 780,
  width: 1200,
  fullscreen: true,
  resizable: true,
  hideTitleBar: false,
  alwaysOnTop: false,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: false,
  multiArch: false,
  targets: 'deb',
  useLocalFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: [],
  safeDomain: [],
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'http://zkcl.tpddns.cn:8082/',
  name: 'ERP after-sales management platform',
  safeDomain: ['zkcl.tpddns.cn:8082'],
  hideTitleBar: true,
};
