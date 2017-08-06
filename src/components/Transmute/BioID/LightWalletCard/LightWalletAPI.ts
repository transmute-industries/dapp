
var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');


export const generateMnemonic = () => {
    return bip39.generateMnemonic()
}

export const getWalletFromMnemonic = (mnemonic: string) => {
    var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
    // Get the first account using the standard hd path.
    var wallet_hdpath = "m/44'/60'/0'/0/";
    var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
    return wallet;
}

export const getDefaultAddressFromWallet = (wallet: any) => {
    return "0x" + wallet.getAddress().toString("hex");
}

export const getDefaultAddressFromMnemonic = (mnemonic: string) => {
    return getDefaultAddressFromWallet(getWalletFromMnemonic(mnemonic))
}