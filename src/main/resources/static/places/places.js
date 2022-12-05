
//-----------------------------------------------------
// VARIABLES
//-----------------------------------------------------

const coldPeople = document.querySelector('.cold-people');
const goodPeople = document.querySelector('.good-people');
const hotPeople = document.querySelector('.hot-people');
const currTemp = document.querySelector('.curr-temp');

const user_id = localStorage.getItem("userId"); // localStorage에 저장된 userId 값 가져옴.
let place_id = document.location.href.split("/")[6]; // API url을 받으려면 현재 url을 string으로 받고
                                                                // 이걸 /로 split했을 때, 필요함.

function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log('Looks like there was a problem', error))
}
//-----------------------------------------------------
// FETCH FUNCTIONS
//-----------------------------------------------------

fetchData(`/api/${user_id}/${place_id}`)
    .then(data => {
            const votedResult = data.placeInfo;   //대문자 맞나?
            modifyResult(votedResult);              // json 객체로 전달하는거 문제 없겠지?
            modifyTemp(votedResult);
        }
    )

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

function modifyResult(data){
    const coldBtn = data.cool; // 대문자?
    const goodBtn = data.good;
    const hotBtn = data.hot;   // 대문자?

    coldPeople.innerHTML = `${coldBtn}`;
    goodPeople.innerHTML = `${goodBtn}`;
    hotPeople.innerHTML =  `${hotBtn}`;
}

function modifyTemp(data){
    const currentTemp = data.tmp;

    currTemp.innerHTML = `${currentTemp}`;
}


//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------
const form = document.querySelector('form')

form.addEventListener('button', postCold)
form.addEventListener('button', postGood)
form.addEventListener('button', postHot)


//-----------------------------------------------------
// BTN FUNCTIONS(POST)
//-----------------------------------------------------

function postCold(e){
    e.preventDefault();

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({how: -1})  // how 첫글자가 대문자 or 소문자???
    }
    fetch(`/api/${user_id}/${place_id}/voting`, config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data =>
            {console.log(data)
            location.href = "main.html"
        })
}

function postGood(e){
    e.preventDefault();

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({how: 0})  // how 첫글자가 대문자 or 소문자???
    }
    fetch(`/api/${user_id}/${place_id}`, config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data =>
            {console.log(data)
            location.href = "main.html"
            })

}


function postHot(e){
    e.preventDefault();

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({how: 1})  // how 첫글자가 대문자 or 소문자???
    }
    fetch(`/api/${user_id}/${place_id}`, config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data =>
            {console.log(data)
            location.href = "main.html"
        })

}
