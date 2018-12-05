const path = require('path');

module.exports = {
    entry: './src/kg-code-sample.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: "to-string-loader" // cast style nodes to string
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // translate SCSS to CSS
                        options: {
                            includePaths: ["node_modules/highlight.js/styles"]
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'kg-code-sample.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
