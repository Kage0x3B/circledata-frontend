const autoPreprocess = require("svelte-preprocess");

const production = process.env.NODE_ENV === "production";

module.exports = {
    preprocess: autoPreprocess({
        defaults: {
            script: "typescript"
        },
        sourceMap: !production,
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss-nesting")]
        }
    })
};
