require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stuff rival predict code hard light army giggle'; 
let testAccounts = [
"0x453d40c8fc30275aed5d3910fec4a53b77223a465f38c86f99086b646edfce7f",
"0x7c3e71a4848e6dbacaa1cd0199e3abd41701b76f51de5212f40e3f42ac0c7396",
"0xd8916933dc3629df1d569b7eef11644c7363acb3df28614984648ce899c62899",
"0x72986fa16f5f21de65cdc5f8dd1730bf118ba156d145ee42452a8b39b196178c",
"0x199cdf65027e60a8a75712464ac8440e8ca956b28c4497a5b765109e628adb1f",
"0xf6e3813f6793761eeacb68cbb4acca368339dc47c3950a3f77f70712e9affd23",
"0x23b7711d41a667b270346ea003e07ea3d18e858338dc7375bb0d2f4426a19e94",
"0xbe2058b1a09955d8944216569d17e9db8fb620294a0f76918d932914630046cb",
"0x3eef4ebe8d46cf0867ad43cb707fbc173d655a16ba35d6b43ba023435bf44513",
"0x3ad5585e8c0981f4d26ac055eba8e0390560779222fac19ee82d13308f354418"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

