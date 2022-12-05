const form = document.querySelector('form')

//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------

form.addEventListener('submit', signUp)

//-----------------------------------------------------
// SIGN UP FUNCTION
//-----------------------------------------------------

function signUp(ev) {
    ev.preventDefault();   // cancel the browser's default submit behavior
    const name = document.getElementById('name').value;
    const email = document.getElementById('id').value;
    const password = document.getElementById('pw').value;
    const isAdmin = JSON.parse(document.getElementById('admin_false').value);

    const config = {
        method: 'POST', // type of request
        headers: {
            'Content-Type': 'application/json', // data가 JSON으로 encode되었음을 서버에 알려줌.
            'Accept' : 'application/json',
        }, // header of object(usually object)
        body: JSON.stringify({
            Name: name,
            Email: email,
            Password: password,
            IsAdmin: isAdmin,
        })//서버에 보내지는 values
    }
    // default HTTP method for a fetch request is GET
    // 서버에 데이터를 보내려면 POST method로 바꿔줌.
    // fetch 함수는 second parameter로 우리가 request에 적용할 수 있는
    // 여러 다른 settings을 control할 수 있도록 configuration object을 받음.
    fetch('/api/register', config)
        .then(checkStatus)
        .then(res => res.json)
        .then(data => {
            console.log(data);
            location.href = "index.html"
        })

}

//-----------------------------------------------------
// HELPER FUNCTIONS
//-----------------------------------------------------
function checkStatus(response) {
    if (response.ok) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
}
