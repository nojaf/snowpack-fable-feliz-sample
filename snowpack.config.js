module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv', ["@snowpack/plugin-run-script", {
        "cmd": "dotnet fable ./fsharp/fsharp.fsproj --outDir ./src/bin",
        "watch": "dotnet fable watch ./fsharp/fsharp.fsproj --outDir ./src/bin"
    }]],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
