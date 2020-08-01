const path = require('path');

module.exports = {
    entry: "./src/index.js", // dau vao
    mode: "development",
    output: { // dau ra
        path: path.resolve(__dirname, "dist"),
        filename: "es6-environment.bundle.js"
    }
}