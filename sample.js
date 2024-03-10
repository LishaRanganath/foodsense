// function api(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("wheather data");
//         resolve(200);
//       },2000);
//     })
// }
// async function getwhData(){
//     await api();//1st call
//     await api();//2nd call
// }
//the 1st call will be sent after it exceution only the 2nd call will be sent


// async function hello(){
//     console.log("hello");
// }

function getData(dId){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dId);
        resolve("success");

       },5000);
});
}

//ASYNC-AWAIT
// async function getAlldata(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
// IIFE example
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();
// getData(1,()=>{
//     getData(2);
// });
// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });
//or
// promise chaining (.then chaining)
// getData(1).then((res)=>{
//     return getData(2)
//     })
//     .then((res)=>{
//         return getData(3);
//     }).then((res)=>{
//         console.log(res);
//     });


// const getPromise=()=>{
//         return new Promise((resolve,reject)=>{
//         console.log("promises");
//          resolve(123);
//         // reject("error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected",err);
// })

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("some data1");
//         resolve("success");
//     },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("some data2");
//         resolve("success");
//     },4000);
//     });
// }
// console.log("fetching data 1");
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

//CALLBACK HELL
// getData(1,()=>{
//     console.log("getting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(2,()=>{
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });
