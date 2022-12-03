const email = document.getElementById('id').value;
const password = document.getElementById('pw').value;
const form = document.querySelector('form');

//-----------------------------------------------------
// LOGIN & SIGNUP FUNCTION
//-----------------------------------------------------
function login(){
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');

    if(id.value == "" || pw.value == "") {
        alert("Fill all the information.")
    }

}

function create_id(){
    let name = document.querySelector('#name');
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');
    let r_pw = document.querySelector('#r_pw');

    if (name.value == "" || id.value == "" || pw.value == "" || r_pw.value == ""){
        alert("Fill all the information.")
    }
    else{
        if(pw.value !== r_pw.value) {
            alert("Please check your password.")
        }
    }
}

//-----------------------------------------------------
// FETCH FUNCTIONS
//-------------------------------------------------------
function fetchData(url){
    return fetch(url)
            .then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('Looks like there was a problem', error))
}

// Promise들 중에서 하나라도 문제가 발생하면
// catch method를 activate하고 promise를 reject함


//-----------------------------------------------------
// HELPER FUNCTIONS
//-----------------------------------------------------

function checkStatus(response){
    if(response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}


//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------

form.addEventListener('submit', postData);


//-----------------------------------------------------
// POST DATA
//-----------------------------------------------------

function postData(e) { //e는 event
    e.preventDefault();   // cancel the browser's default submit behavior
    const email = document.getElementById('id').value;
    const password = document.getElementById('pw').value;

    const config = {
        method: 'POST', // type of request
        headers: {
            'Content-Type': 'application/json' // data가 JSON으로 encode되었음을 서버에 알려줌.
        }, // header of object(usually object)
        body: JSON.stringify({Email: email, Password: password})//서버에 보내지는 values
    }

    // default HTTP method for a fetch request is GET
    // 서버에 데이터를 보내려면 POST method로 바꿔줌.
    // fetch 함수는 second parameter로 우리가 request에 적용할 수 있는
    // 여러 다른 settings을 control할 수 있도록 configuration object을 받음.
    fetch('/api/login', config)
        .then(checkStatus)
        .then(res => res.json)
        .then(data => console.log(data))
}


//-----------------------------------------------------
// USEFUL FUNCTION EXAMPLE
//-----------------------------------------------------
