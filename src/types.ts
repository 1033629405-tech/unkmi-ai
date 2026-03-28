export type Screen = 'inspiration' | 'memory' | 'device' | 'ai';

export interface UserProfile {
  name: string;
  email: string;
  storageUsed: string;
  storageTotal: string;
  avatar?: string;
}

export interface DeviceInfo {
  name: string;
  battery: number;
  wifi: string;
  firmwareVersion: string;
  deviceStorageUsed: string;
  deviceStorageTotal: string;
}
