declare module 'react-native-ntp-client' {
  const ntpClient: {
    defaultNtpPort: number;
    defaultNtpServer: string;
    ntpReplyTimeout: number;
    getNetworkTime: (server: string, port: number, callback: (error: Object, date: Date) => void) => void;
  };
  export default ntpClient;
}
