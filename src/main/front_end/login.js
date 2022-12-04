const form = document.querySelector('form')

//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------

form.addEventListener('submit', logIn);

//-----------------------------------------------------
// POST DATA
//-----------------------------------------------------

function logIn(e) { //e는 event
    e.preventDefault();   // cancel the browser's default submit behavior
    const email = document.getElementById('id').value;
    const password = document.getElementById('pw').value;

    const config = {
        method: 'POST', // type of request
        headers: {
            'Content-Type': 'application/json', // data가 JSON으로 encode되었음을 서버에 알려줌.
            'Accept' : 'application/json'
        }, // header of object(usually object)
        body: JSON.stringify({
            Email: email,
            Password: password,
        })//서버에 보내지는 values
    }
    // default HTTP method for a fetch request is GET
    // 서버에 데이터를 보내려면 POST method로 바꿔줌.
    // fetch 함수는 second parameter로 우리가 request에 적용할 수 있는
    // 여러 다른 settings을 control할 수 있도록 configuration object을 받음.
    fetch('/api/login', config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => {
            //// 관리자 계정일 시 관리 페이지 접속
            if (data.isAdmin === True){
                location.href = "admin.html"
            }
            // 관리자 계정 아닌 유저일 시 메인 페이지 접속
            else if (data.token) {  //// ????????????????
                localStorage.setItem("test-token", data.token)
                location.href = "main.html"
            } else {
                alert('Something wrong in your information.');
            }
        });
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
