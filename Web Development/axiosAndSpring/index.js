// const formData = require('form-data')

const axios = require('axios')

// const FormData = require('form-data')
// // function postData(){
// //     axios.post("http://localhost:8080/songs",).then(res => console.log(res)).catch(err => console.log(err))
// // }
// let data = new FormData();
//
// data.append('file', "Bad Habits-Bhalwaan-VlcMusic.CoM", "Bad Habits-Bhalwaan-VlcMusic.CoM.mp3");
//
// const config = {
//     headers: { 'content-type': 'multipart/form-data' }
// }
// axios.post("https://musicappmukul.herokuapp.com/uploadMySong/", data, config)
// axios.get("https://musicappmukul.herokuapp.com/songs").catch(function (res) {
//     document.querySelector('div').appendChild(res.data)
// }
// ).then(err => console.log(err))

//
// async function getData() {
//     const response = await fetch('https://musicappmukul.herokuapp.com/songs')
//     return response;
//         // await axios.get('https://musicappmukul.herokuapp.com/songs')
//         // .then((response) => {
//         //     // console.log(response.data)
//         //     return response.data
//         // })
//         // .catch((myJson) => {
//         //     console.log(myJson);
//         // });
// }


//
// function getData(url, cb) {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => cb(result));
// }

async function getData(url){
    let response = await axios.get(url).then(response => {
        return response.data;
    }).catch(err => console.log(err));
    let data = await response;
    return data;
}
let result = getData('https://musicappmukul.herokuapp.com/songs')
result.then(res => console.log(res))



