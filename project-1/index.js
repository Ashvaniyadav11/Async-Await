const btn = document.getElementById('sub');



btn.addEventListener('click',async function(){
    const data = document.getElementById('gith').value;
    const fth = await fetch(`https://api.github.com/users/${data}`)
    
    const fulll = await fth.json();
    document.getElementById('card').innerHTML = `
    <div id="pushpa">
        <h2>${fulll.name}</h2>
        <img src="${fulll.avatar_url}" width="120">
        <p>Username: ${fulll.login}</p>
        <p>Followers: ${fulll.followers}</p>
        <p>Public Repos: ${fulll.public_repos}</p>
        
        <p> Account Created:${fulll.created_at}</p>
        <p> Account Updated:${fulll.updated_at}</p>

        </div>
    
    `;
})