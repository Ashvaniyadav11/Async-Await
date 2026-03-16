// sync -> callstack -> main thread 

//async -> webApi -> callack queue -> (call stack empty)-> call stack -> main thread

function getdetails(username,cd){    // callback
    setTimeout(function(){
        console.log(username+" Sending the request to instagram ..");
        
    },1000);
    setTimeout(function (){
        console.log("fetching data ..");
        
    },2000);
    setTimeout(function() {
        cd();
    },6000)
  
};

// getdetails("harshvandana",function (){
//     console.log("Saving data into gallary");
    
// })


// koi function ko chalate waqt ye bata dena kaam krne ke baad kon sa function chalana hai 

// function step1(cb){
//     console.log("Step 1");
//     cb();

// }

// function step2(cb){
//     console.log("Step 2");
//     cb();

// }

// function step3(cb){
//     console.log("Step 3");
//     cb();

// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All calback hell");  // also called kritmus tree
            
//         });
//     })
// })

//using promise 





// server ka code jb bhi server ke liye hoga usually wo async nhi hoga par jab bhi request kahi aur jayegi wo kb tk   resonse laye koi bharosa nhi hoga
//jis code kb chalega pta hi nhi hai kb chalega wha hum promise use krte hai

// const pr = new Promise(function(res,rej){
//     console.log("instagram se data lao")
//     console.log("instagram se data ho rha hai")
//     console.log("instagram se data errorr ho rha hai ")
//     res();
// })

// pr
// .then(function(){
//     console.log("Resolved");
    
// })
// .catch(function(){
//     console.log("Rejected");
    
// });



function step1(){
    
    return new Promise(function(res,rej){
        console.log("Step 1");
        res()
    });

}
function step2(){
    
    return new Promise(function(res,rej){
        console.log("Step 2");
        res()
    });

}

function step3(){
    
    return new Promise(function(res,rej){
        console.log("Step 3");
        res()
    });

}






step1()
.then(step2)
.then(step3)
.then(function(){
    console.log("All promise got resolved");
    
})