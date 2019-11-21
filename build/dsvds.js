// new BrowserSyncPlugin(
//     {
//         host: 'localhost',
//         port: 3000,
//         proxy: 'http://vertex-club.local',
//         files: [
//             {
//                 match: ['./src'],
//                 fn(event, file) {
//                     if (event === 'change') {
//                         const bs = require('browser-sync').get('bs-webpack-plugin');
//                         bs.reload();
//                     }
//                 },
//             },
//         ],
//     },
//     {
//         reload: false,
//     }
// ),