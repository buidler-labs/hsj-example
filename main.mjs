import { ApiSession, Contract } from '@buidlerlabs/hedera-strato-js';

const { session } = await ApiSession.default();
const helloContract = await Contract.newFrom({ path: './hello.sol' });
const liveContract = await session.upload(helloContract);

console.log(await liveContract.greet());