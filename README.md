# Hedera Strato JS Example
This repo is a basic example of a minimum working _Smart Contract_ upload and query call on the [Hedera Hashgraph network](https://hedera.com/). It show-cases the [hedera-strato-js](https://github.com/three-Vs/hedera-strato-js) (hsj - hence, its name: *hsj-example*) library in all its simplistic glory.

To run it, simply _clone it_ and do a 

```bash
npm install
```
to fetch the dependencies.

Next, you'll need to setup a local `.env` file providing some values for the library to work with. Please see the [`.env.sample`](./.env.sample) for info and further details. Assuming you are using a `testnet`/`previewnet` account, the minimum required `.env` defined values are:

```
HEDERA_NETWORK=...
HEDERA_OPERATOR_ID=0.0...
HEDERA_OPERATOR_KEY=91132178...
```

Then, you can simply run the example by doing a `npm test` call. 

If all goes to plan, you should see the `hello.sol` > `HelloWorld` > `greet` message logged: `Hello Future!`.

**And that's it!** You managed to successfully compile, upload and execute a smart-contract on the Hedera network. Happy coding!

## License
This work has been published under the MIT License.