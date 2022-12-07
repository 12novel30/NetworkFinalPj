
//-----------------------------------------------------
// VARIABLES
//-----------------------------------------------------
const currTemp = document.querySelector('.curr-temp');

const coldPeople = document.querySelector('.cold-people');
const goodPeople = document.querySelector('.good-people');
const hotPeople = document.querySelector('.hot-people');

const user_id = localStorage.getItem("userId"); // localStorage 에 저장된 userId 값 가져옴.
const place_id = document.location.href.split("/")[4].split(".")[0]; // API url을 받으려면 현재 url을 string으로 받고
                                                                                        // 이걸 /과 .으로 split.
console.log(place_id)

//-----------------------------------------------------
// FETCH DATA function
//-----------------------------------------------------
function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
}
//-----------------------------------------------------
// FETCH FUNCTIONS: GET placeInfo and Modify!
//-----------------------------------------------------

fetchData(`/api/${user_id}/${place_id}`)
    .then(data => {
            const votedResult = data;
            modifyResult(votedResult);              // json 객체로 전달하는거 문제 없겠지?
            modifyTemp(votedResult);
        }
    )
    .catch(error => {
        console.log("Looks like there was a problem", error);
    })

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
    const coldBtn = data.placeInfo.cool;
    const goodBtn = data.placeInfo.good;
    const hotBtn = data.placeInfo.hot;   // 대문자?
    console.log(`${coldBtn}`);
    console.log(`${goodBtn}`);
    console.log(`${hotBtn}`);
    coldPeople.innerHTML = `${coldBtn}`;
    goodPeople.innerHTML = `${goodBtn}`;
    hotPeople.innerHTML =  `${hotBtn}`;
}

function modifyTemp(data){
    const currentTemp = data.placeInfo.tmp;

    currTemp.innerHTML = `${currentTemp}`;
}


//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------
const coldBtn = document.querySelector('.cold-btn')
const goodBtn = document.querySelector('.good-btn')
const hotBtn = document.querySelector('.hot-btn')

coldBtn.addEventListener('button', postCold)
goodBtn.addEventListener('button', postGood)
hotBtn.addEventListener('button', postHot)


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
            {   console.log(data);
                window.alert("You have successfully voted.")
                location.href = "../main.html"
            })
        .catch(error => {
            console.log("Looks like there was a problem", error);
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
            {   console.log(data);
                window.alert("You have successfully voted.")
                location.href = "../main.html"
            })
        .catch(error => {
            console.log("Looks like there was a problem", error);
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
            {   console.log(data);
                window.alert("You have successfully voted.")
                location.href = "../main.html"
            })
        .catch(error => {
            console.log("Looks like there was a problem", error);
        })
}

