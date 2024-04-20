export interface UserState {
  PUB_INFO: PubInfo | null;
  BUNDLE: string | null;
}

export interface PubInfo {
  AdId: string;
  appId: string;
  lang: string;
  osType: string;
  platform: string;
  serviceId: string;
  sessionId: string;
  timestamp: string;
  customerId: string;
  darkMode: boolean;
}

