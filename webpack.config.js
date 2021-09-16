const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	target: "web",
	entry: "./src",
	devtool: "inline-source-map",
	// output webpack create for us to bundle the app
	output: {
		filename: "js/[name].bundle.js",
		// compile js codes for production into a js folder
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: "./",
		open: true,
		compress: true,
		hot: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new HtmlWebpackPlugin({
			title: "Custom template",
			template: "index.html",
			cache: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
				include: [path.resolve(__dirname, "src")],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
};
