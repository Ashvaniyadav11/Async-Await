function orderfood(){
    console.log("Calling the pizza Hut");

    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("your order got placed  with order ID  #"+Math.floor(Math.random()*10000));
            res();
        },4000);
    })

}

// orderfood().then(()=>{
//     console.log("ORDER delvered Succesfully");
    
// })
// .catch(()=>{
//     console.log("Delivery attempt to fail...");
    
// })


function getUser(){
    return new Promise((res,rej)=>{
        
        res({id:1,name:"Harsh"})  
    })
}

function getPosts(UserId){
    return new Promise((res,rej)=>{
        res([UserId,"Tittle_1","Tittle_2"])
    })
    
}
function getComment(PostId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(["Great Post ", "Azmazing Content","You rocked Me"])
        }, 1000);
    })
}

// getUser().then((data)=>{
//     console.log(data);
//     return getPosts(data.id)
// }) 
// .then((titles)=>{
//     console.log(titles);
//     return getComment("hddhfhf")
// })
// .then((dcmts)=>{
//     console.log(dcmts);
    
// })
// .finally(function (){
//     console.log("All Data Fetched Succesfully");
    
// })


function fakeapiCall(endpoint){
    const data = {
        users : ["harsh","shivam","raghav"],
        posts : ["Hey Champs ","great Going EveryOne", "Lets build this Chai"]
    }
   
 
    
    let delay = Math.random()*2000 + 1000

    return new Promise(function(res,rej){
        setTimeout(() => {
            res(data[endpoint]);
            
        }, delay);
    })
}

fakeapiCall("users").then((data)=>{
    console.log(data);
    
})