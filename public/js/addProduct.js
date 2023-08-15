 const express = require('express');
 const admin = require('firebase-admin');
 let db = admin.firestore();
let user = JSON.parse(sessionStorage.user || null);
let loader = document.querySelector('.loader');
alert("I am supposed to appear");
//checking if user is logged in or not
window.onload = () => {
    if(user){
        if(!compareToken(user.authToken, user.email)){
            location.replace('/login');
        }
    } else{
        location.replace('/login');
    }
}

// price input

const actualPrice = document.querySelector('#actual-price');
const discountPercentage = document.querySelector('#discount-price');
const sellingPrice = document.querySelector('#sell-price');

discountPercentage.addEventListener('input', () => {
    if(discountPercentage.value > 100){
        discountPercentage.value = 90;
    } else{
        let discount = actualPrice.value * discountPercentage.value / 100;
        sellingPrice.value = actualPrice.value - discount;
    }
})

sellingPrice.addEventListener('input', () => {
    let discount = (sellingPrice.value / actualPrice.value) * 100;
    discountPercentage.value = discount;
})

// //upload image handle
//  let uploadImages = document.querySelectorAll('.fileupload');
//  let imagePaths = []; // will store all upload image paths;

//  uploadImages.forEach((fileupload, index) => {
//      fileupload.addEventListener('change', () => {
//          const file = fileupload.files[0];
        
//         if(file.type.include('image')){
//              // it means user uploaded an image
//              fetch('/s3url').then(res => res.json())
//              .then(url => {
//                  fetch(url,{
//                      method: 'PUT',
//                      headers: new Headers({'Content-Type': 'multipart/form-data'}),
//                      body: file
//                  }).then(res => {
//                      imageUrl=url.split("?")[0];
//                      imagePaths[index] = imageUrl;
//                      let label = document.querySelector(`label[for=${fileupload.id}]`
//                      );
//                      label.computedStyleMap.backgroundImage = `url(${imageUrl})`;
//                  })
//              })
//          }
//      })
//  })






  function handleUpload(e) {
    const files = e.target.files;
    console.log(files);
  }

  alert("Hello World, Hoisting sucks");



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9itJ1mODaqAW00aChkAoBy4270Yifgns",
//   authDomain: "e-commerce-website-a3289.firebaseapp.com",
//   projectId: "e-commerce-website-a3289",
//   storageBucket: "e-commerce-website-a3289.appspot.com",
//   messagingSenderId: "187433333037",
//   appId: "1:187433333037:web:c5bb6dfc7285a3771d63a4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


