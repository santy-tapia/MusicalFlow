import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.santiagotapia.dev',
  appName: 'musical-flow',
  webDir: 'dist/musical-flow/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
