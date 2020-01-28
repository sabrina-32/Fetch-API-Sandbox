document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPost').addEventListener('click', getPost);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText()  {

fetch('text.txt')
.then(res=> {
    return res.text();
})
.then(data=>    {
    document.getElementById('output').innerHTML = data;
})
.catch(err =>   {
    console.log(err);
})

}

function getUsers() {
    fetch('users.json')
    .then(res=>res.json())
    .then((data)=> {
        let output = '<h2>Users</h2>';
        data.forEach(function(user) {

            output+=
            `<ul>
                <li>ID: ${user.id}</li>
                <li>NAME: ${user.name}</li>
                <li>EMAIL: ${user.email}</li>
            </ul>`
        });

        document.getElementById('output').innerHTML = output;
    })
}




function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then((data)=> {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post) {

            output+=
            `
            <div>
            <h3> ${post.title}</h3>

            <p> ${post.body}</p>
            
            </div>
            `;
        });

        document.getElementById('output').innerHTML = output;
    })
}



function  addPost(e){
    e.preventDefault();

    let  title = document.getElementById('title').value;
    let  body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })

    .then((res)=>res.json())
    .then((data)=>console.log(data) )

}