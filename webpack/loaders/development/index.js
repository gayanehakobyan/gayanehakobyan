const path = require("path");
const appRoot = "../../..";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require(`../../../config/config.json`);

module.exports = [
    {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, appRoot + "/source/ts"),
        use: "ts-loader"
    },
    {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
        ]
    },
    {
        test: /\.html$/,
        include: path.resolve(__dirname, appRoot + "/source/html"),
        use: [
            {
                loader: "string-replace-loader",
            },
            {
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }
        ]
    }
];

console.log("array from loaders")