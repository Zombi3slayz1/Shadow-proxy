self.__uv$config = {
    prefix: '/service/',
    bare: [
        "https://test.com",
        "https://bare.starttiw.org",
        "https://geoquiz.gq/bare/",
        "https://test2.com"
    ],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
console.log(
