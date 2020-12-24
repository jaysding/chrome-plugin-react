// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
const antdConfig = {
    locale: zhCN
}

ReactDOM.render(
    <ConfigProvider {...antdConfig}><Popup/></ConfigProvider>,
    document.getElementById('root')
)
