require('dotenv').config(); // 환경 변수를 별도 파일(.env)로 관리하기 쉽게 해준다 보일러 플레이트 일떄는 config를 비워두고 프로젝트 별로 바꾼다

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'; //package에서 webpack을 실행하는 script에서 mode를 지정할때 값이 담기는 변수
const PORT = process.env.PORT || 3000;

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'hidden-source-map' : 'source-map', //develop 환경에서만  source-map을 만든다
  entry: './src/index.tsx',
  output: {
    filename: '[name].js', //컴파일러이기 때문에 js결과물을 뱉어낸다
    path: path.join(__dirname, '/dist'), // __dirname = 현재 진행중인 경로, join을 통해 오른쪽부터 합치면서 진행한다 "/"를 만나면 절대 경로롤 인식해서 나머지를 무시한다
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'], //확장자 경로 처리를 위해 추가할 수 있다 프로젝트에 따라 json도 추가 가능
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: isProd ? false : true, //위에 mode 지정 값을 체크한다 true일 경우 타입 체크는 안하고 js->ts 변경만 진행(속도가 빨라 개발 중간 주로 사용)
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(webp|jpg|png|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      hash: true,
    }), //빌드가 끝나고 따로 분리해 bundle한 css, js 파일 등을 지정한 html 파일의 link, script 태그에 추가해준다.
  ],
  stats: 'errors-only',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    host: 'localhost',
    port: PORT,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    compress: true,
  },
};
