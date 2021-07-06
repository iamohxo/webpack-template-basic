//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


//export
module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    //entry는 html이 아니라 js파일을 진입점으로 설정한다.
    entry: './js/main.js',
    output: { // 결과물(번들) 내보내는 과정
        // path: path.resolve(__dirname, 'dist'), //nodejs환경에서 사용할수있는것으로 들고와야함
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    
    //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 실행
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ]
}