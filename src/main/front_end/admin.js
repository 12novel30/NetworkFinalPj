
//-----------------------------------------------------
// VARIABLES
//-----------------------------------------------------
const currTemp1 = document.getElementById('hae-dong-curr-temp');
const currCold1 = document.getElementById('hae-dong-cold');
const currHot1 = document.getElementById('hae-dong-hot');

const currTemp2 = document.getElementById('2f-out-curr-temp');
const currCold2 = document.getElementById('2f-out-cold');
const currHot2 = document.getElementById('2f-out-hot');

const currTemp3 = document.getElementById('2f-laptop-curr-temp');
const currCold3 = document.getElementById('2f-laptop-cold');
const currHot3 = document.getElementById('2f-laptop-hot');

const currTemp4 = document.getElementById('3f-1-curr-temp');
const currCold4 = document.getElementById('3f-1-cold');
const currHot4 = document.getElementById('3f-1-hot');

const currTemp5 = document.getElementById('3f-2-curr-temp');
const currCold5 = document.getElementById('3f-2-cold');
const currHot5 = document.getElementById('3f-2-hot');

//-----------------------------------------------------
// FETCH FUNCTIONS
//-----------------------------------------------------
function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log('Looks like there was a problem', error))
}

fetchData(`http://localhost:8080/api/admin`)
    .then(data => {
            const placeInfo = data;
            modify1(placeInfo[0]);
            modify2(placeInfo[1]);
            modify3(placeInfo[2]);
            modify4(placeInfo[3]);
            modify5(placeInfo[4]);
        }
    )

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

function modify1(data){
    const temp1 = data.tmp;
    const cold1 = data.cool;
    const hot1 = data.hot;

    currTemp1.innerHTML = `${temp1}`;   ////interpolation 형식으로 넣어야 하나 아니면 그냥 넣어도 되나?
    currCold1.innerHTML = `${cold1}`;
    currHot1.innerHTML = `${hot1}`;
}

function modify2(data){
    const temp2 = data.tmp;
    const cold2 = data.cool;
    const hot2 = data.hot;

    currTemp2.innerHTML = `${temp2}`;
    currCold2.innerHTML = `${cold2}`;
    currHot2.innerHTML = `${hot2}`;
}

function modify3(data){
    const temp3 = data.tmp;
    const cold3 = data.cool;
    const hot3 = data.hot;

    currTemp3.innerHTML = `${temp3}`;
    currCold3.innerHTML = `${cold3}`;
    currHot3.innerHTML = `${hot3}`;
}

function modify4(data){
    const temp4 = data.tmp;
    const cold4 = data.cool;
    const hot4 = data.hot;

    currTemp4.innerHTML = `${temp4}`;
    currCold4.innerHTML = `${cold4}`;
    currHot4.innerHTML = `${hot4}`;
}

function modify5(data){
    const temp5 = data.tmp;
    const cold5 = data.cool;
    const hot5 = data.hot;

    currTemp5.innerHTML = `${temp5}`;
    currCold5.innerHTML = `${cold5}`;
    currHot5.innerHTML = `${hot5}`;
}



//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------
const input1 = document.getElementById("1f-hd-new");
const input2 = document.getElementById("2f-out-new");
const input3 = document.getElementById("2f-laptop-new");
const input4 = document.getElementById("3f-1-new");
const input5 = document.getElementById("3f-2-new");

input1.addEventListener("change", changeTemp1)
input2.addEventListener("change", changeTemp2)
input3.addEventListener("change", changeTemp3)
input4.addEventListener("change", changeTemp4)
input5.addEventListener("change", changeTemp5)

//-----------------------------------------------------
// BTN FUNCTIONS(POST)
//-----------------------------------------------------

function changeTemp1(e){
    e.preventDefault();
    const new_temp1 = document.getElementById('1f-hd-new').value;

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({newTemp: new_temp1})
    }
    fetch("http://localhost:8080/api/admin/1/updateTemp", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

function changeTemp2(e){
    e.preventDefault();
    const new_temp2 = document.getElementById('2f-out-new').value;


    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({newTemp: new_temp2})
    }
    fetch("http://localhost:8080/api/admin/2/updateTemp", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

function changeTemp3(e){
    e.preventDefault();
    const new_temp3 = document.getElementById('2f-laptop-new').value;

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ newTemp : new_temp3})
    }
    fetch("http://localhost:8080/api/admin/3/updateTemp", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

function changeTemp4(e){
    e.preventDefault();
    const new_temp4 = document.getElementById('3f-1-new').value;

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ newTemp : new_temp4})
    }
    fetch("http://localhost:8080/api/admin/4/updateTemp", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

function changeTemp5(e){
    e.preventDefault();
    const new_temp5 = document.getElementById('3f-2-new').value;

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ newTemp : new_temp5})
    }
    fetch("http://localhost:8080/api/admin/5/updateTemp", config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}


