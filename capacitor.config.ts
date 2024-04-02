import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cine.club',
  appName: 'cine-club',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
