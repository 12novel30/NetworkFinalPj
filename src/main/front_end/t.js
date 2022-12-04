

fetch("api/admin")
    .then(res => res.json())
    .then(data => console.log(data))