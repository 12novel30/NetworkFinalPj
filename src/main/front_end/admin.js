
//-----------------------------------------------------
// VARIABLES
//-----------------------------------------------------
const currTemp1 = document.getElementById('hae-dong-curr-temp');
const cold1 = document.getElementById('hae-dong-cold');
const hot1 = document.getElementById('hae-dong-hot');

const currTemp2 = document.getElementById('2f-out-curr-temp');
const cold2 = document.getElementById('2f-out-cold');
const hot2 = document.getElementById('2f-out-hot');

const currTemp3 = document.getElementById('2f-laptop-curr-temp');
const cold3 = document.getElementById('2f-laptop-cold');
const hot3 = document.getElementById('2f-laptop-hot');

const currTemp4 = document.getElementById('3f-1-curr-temp');
const cold4 = document.getElementById('3f-1-cold');
const hot4 = document.getElementById('3f-1-hot');

const currTemp5 = document.getElementById('3f-2-curr-temp');
const cold5 = document.getElementById('3f-2-cold');
const hot5 = document.getElementById('3f-2-hot');

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
            const placeInfo= data.message;
            modifyTable(placeInfo);
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

function modifyTable(data){
    const currentTemp1 =

    currTemp1.innerHTML = currentTemp1;
    currTemp2.innerHTML = currentTemp2;
    currTemp3.innerHTML = currentTemp3;
    currTemp4.innerHTML = currentTemp4;
    currTemp5.innerHTML = currentTemp5;
}


//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------
const form = document.querySelector('form')

form.addEventListener('submit', changeTemp)

//-----------------------------------------------------
// BTN FUNCTIONS(POST)
//-----------------------------------------------------

function changeTemp(e){
    e.preventDefault();
    const new_temp1 = document.getElementById('1f-hd-new').value;
    const new_temp2 = document.getElementById('2f-out-new').value;
    const new_temp3 = document.getElementById('2f-laptop-new').value;
    const new_temp4 = document.getElementById('3f-1-new').value;
    const new_temp5 = document.getElementById('3f-2-new').value;

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({newTemp: `new_temp${i}`})
    }
    fetch(`http://localhost:8080/api/admin/${i}/`, config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}

function postHot(e){
    e.preventDefault();

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({how: 1})
    }
    fetch(`http://localhost:8080/api/${user_id}/${place_id}`, config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))

}

