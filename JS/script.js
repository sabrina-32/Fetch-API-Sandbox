document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);

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



