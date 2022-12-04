

fetch("http://localhost:8080/api/admin")
    .then(res => res.json())
    .then(data => console.log(data))