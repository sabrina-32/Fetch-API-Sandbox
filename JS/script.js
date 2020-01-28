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
}



