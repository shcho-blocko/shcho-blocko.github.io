CoinStack.ECKey.createKeyFromHexSeed = function(seed) { 
   return CoinStack.Util.bitcoin().HDNode.fromSeedHex(seed, CoinStack.Util.bitcoin().networks.bitcoin).privKey.toWIF()
}
CoinStack.ECKey.createKeyKSM = function(window) {
    if (window.crypto || window.msCrypto) {
        return CoinStack.ECKey.createKey();
    }
    console.log("createKeyFromHexSeed()");
    //return CoinStack.ECKey.createKeyFromHexSeed("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
    var seed = CoinStack.Util.hashSha256(Math.random()+''+Date.now());
    return CoinStack.ECKey.createKeyFromHexSeed(seed);
}