// Deployed contract addresses and ABIs for the frontend
export const PARAMIFY_ADDRESS = "0xFC1EfCE3D25E7eE5535E7E6D6731D9Ba131bDC43";
import PARAMIFY_ABI_JSON from "../../../paramify-abi.json";
export const PARAMIFY_ABI = PARAMIFY_ABI_JSON.abi as any;

export const USDC_ADDRESS = '0x3600000000000000000000000000000000000000';
export const USYC_ADDRESS = '0xe9185F0c5F296Ed1797AaE4238D26CCaBEadb86C';

export const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
] as const;
