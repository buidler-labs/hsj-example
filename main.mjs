import { HederaNetwork, Contract } from '@buidlerlabs/hedera-strato-js';

const hapiSession = await HederaNetwork.defaultApiSession();
const helloContract = await Contract.newFrom({ path: './hello.sol' });
const liveContract = await hapiSession.upload(helloContract);

console.log(await liveContract.greet());