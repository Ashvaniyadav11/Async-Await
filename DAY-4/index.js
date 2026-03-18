

//fetch hamesa ek promise bnata hai




// async function name() {
//     const app = await fetch("https://api.github.com/users/asynchronousJavascriptor")

//     console.log(app);
// }

// name()



// document.getElementById('inn').addEventListener('click',
//     async function(){

//         const data = document.getElementById('inn').value;
//         const response = await fetch(`https://api.github.com/users/${data}`)
//         const newd = await response.json()
//         document.getElementById('card').innerHTML = newd;
//     }
// )


document.getElementById('innn').addEventListener('click', async function(){

    const data = document.getElementById('inn').value;

    const response = await fetch(`https://api.github.com/users/${data}`);
    const newd = await response.json();

    document.getElementById('card').innerHTML = `
        <div  id= "gh" >
        <h2>${newd.name}</h2>
        <img src="${newd.avatar_url}" width="120">
        <p>Username: ${newd.login}</p>
        <p>Followers: ${newd.followers}</p>
        <p>Public Repos: ${newd.public_repos}</p>
        <p>Company Name: ${newd.company} </p>
        <p> Account Created:${newd.created_at}</p>
        <p> Account Updated:${newd.updated_at}</p>

        <p>Bio : ${newd.bio}</p>

        </div>
    `;
     
});











