const form = document.querySelector('form')

//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------

form.addEventListener('submit', logIn);

//-----------------------------------------------------
// GET DATA
//-----------------------------------------------------


//-----------------------------------------------------
// POST DATA
//-----------------------------------------------------

function logIn(e) { //e는 event
    e.preventDefault();   // cancel the browser's default submit behavior
    const id = document.getElementById('id').value;
    const pw = document.getElementById('pw').value;

    const config = {
        method: 'POST', // type of request
        headers: {
            'Content-Type': 'application/json', // data가 JSON으로 encode되었음을 서버에 알려줌.
            'Accept' : 'application/json'
        }, // header of object(usually object)
        body: JSON.stringify({
            Email: id,
            Password: pw,
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
            if(data.isAdmin){
                location.href = "admin.html"; // admin 계정이면 admin page로 이동
            }
            if(data.email == id && data.password == pw){  // email이랑 작성한 id, password랑 작성한 pw 같은지
                localStorage.setItem("userId", data.userId); // response에서 전달해준 UserId 받아서 localStorage에 저장
                location.href = "main.html"; // main page로 이동.
            }
            else{
                alert('Something wrong in your information. If you do not have your account, please register.')
            }
        })
        .catch(error => console.log('Looks like there was a problem', error))
}

//-----------------------------------------------------
// FETCH FUNCTIONS
//-------------------------------------------------------


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
