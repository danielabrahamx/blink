import { GatewayClient } from '@circlefin/x402-batching/client';

let client: GatewayClient | null = null;

export function getGatewayClient(): GatewayClient {
  if (!client) {
    client = new GatewayClient({
      chain: 'arcTestnet',
      privateKey: import.meta.env.VITE_BUYER_PRIVATE_KEY as `0x${string}`,
    });
  }
  return client;
}
