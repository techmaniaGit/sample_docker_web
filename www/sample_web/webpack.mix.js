const directories = [
];

for (let i = 0; i < directories.length; i++) {
    const mix = require('laravel-mix');

    mix.sass('resources/sass/' + directories[i] + '/index.scss', 'public/larabel_ts_vue_template/css/build/' + directories[i]);

    mix.webpackConfig({
        resolve: {
            extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
            alias: {
                vue$: "vue/dist/vue.esm.js"
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: { appendTsSuffixTo: [/\.vue$/] },
                    exclude: /node_modules/
                }
            ]
        }
    });
}
