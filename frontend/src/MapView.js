// import React from 'react';
// import axios from 'axios';
// import renderHTML from 'react-render-html';
//
// export default class MapView extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//
//         }
//         this.fetchMap = this.fetchMap.bind(this);
//     }
//
//     componentDidMount() {
//         this.fetchMap();
//     }
//
//     fetchMap() {
//         axios.get('http://localhost:5000/')
//             .then(function (response) {
//                 console.log(response.data)
//                 return response.data;
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
//
//     render() {
//         console.log('reached')
//         let view = this.fetchMap();
//         console.log('checking view')
//         console.log(view)
//         return(
//             <div>
//                 {renderHTML(this.fetchMap())};
//             </div>
//         )
//     }
//
// }