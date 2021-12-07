require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind mistake hope climb obscure thumb'; 
let testAccounts = [
"0x7081af833f6d6d7a7b4520683e7a146bce95bba7048faea569ee7f378136c78d",
"0x290062b1c1b4e4d350b3cbb026360dde64e75edbf6decefcbc635d376804a723",
"0x93c4fbd71e9cc4a1679f0e39cab57f56f3796396d84439da706dc75d062dc69c",
"0xe17af6d0f6c2e8b65b781531e93ae9ac2b3a4302a0f37cc81269835582a57703",
"0x870a67f560f5914f085a31da21972ec8339e4fe4bf94ecc7a39825fdadb00798",
"0xea9ff266be4e5f72b585f057dc7e2eeeea66286a242d9714894c7990958b1e3d",
"0x6f656a454d4acdb393705b4ec40b3f4f90129f29baafb1735be0ae9dba1c0a29",
"0x424f5d2082f4956016df0d440a1051f801326697c69cc242eef34ebc1910b802",
"0x9bf664cde76f78afc6c0f8d15db75981b926add16adab6e4dc5fa78e4093626e",
"0xf9549ad574e944a8a67fde200da6b850903e60d5ff1cfd52198b79a049712557"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


