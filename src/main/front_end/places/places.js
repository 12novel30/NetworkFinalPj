
//-----------------------------------------------------
// VARIABLES
//-----------------------------------------------------

const coldPeople = document.querySelector('.cold-people');
const hotPeople = document.querySelector('.hot-people');
const currTemp = document.querySelector('.curr-temp');

const user_id = undefined; //???????????
const place_id = undefined;


function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log('Looks like there was a problem', error))
}
//-----------------------------------------------------
// FETCH FUNCTIONS
//-----------------------------------------------------

fetchData(`http://localhost:8080/api/${user_id}/${place_id}`)
    .then(data => {
            const votedResult = data.message;
            modifyResult(votedResult);
            modifyTemp(votedResult);
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

function modifyResult(data){
    const coldBtn = data["placeInfo"]["cool"];
    const hotBtn = data["placeInfo"]["hot"];

    coldPeople.innerHTML = coldBtn;
    hotPeople.innerHTML = hotBtn;
}

function modifyTemp(data){
    const currentTemp = data["placeInfo"]["tmp"];

    currTemp.innerHTML = currentTemp;
}


//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------------
const form = document.querySelector('form')



form.addEventListener('button', postCold)
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
        body: JSON.stringify({how: -1})
    }
    fetch(`http://localhost:8080/api/${user_id}/${place_id}/voting`, config)
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

