const {Blockchain,Transactions} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('90899a78dc4e562a8392c5a1aa5ff8a13e2405a4ad322e208040338b5ed7962f');
const myWalletAddress = myKey.getPublic('hex');


let fainancial4 = new Blockchain();


const tx1 = new Transactions(myWalletAddress,'public key', 1);
tx1.signTransaction(myKey);
fainancial4.addTransactions(tx1);

console.log('\n Starting the miner');
fainancial4.minePendingTransactions(myWalletAddress);
console.log('\n balance of myWalletAddress', fainancial4.getBalanceofAddress(myWalletAddress));
console.log('.\is chain valid ? ', fainancial4.isChainValid() ? 'yes':'no');


