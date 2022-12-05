
//-----------------------------------------------------
// FETCH FUNCTIONS
//-----------------------------------------------------

function fetchData(url){
    return fetch(url)
        .then(checkStatus)
        .then(res => res.json())
        .catch(error => console.log('Looks like there was a problem', error))
}

fetchData('/api/main')
    .then(data => {
            const temp1 = data[0].tmp;
            const temp2 = data[1].tmp;
            const temp3 = data[2].tmp;
            const temp4 = data[3].tmp;
            const temp5 = data[4].tmp;

        updateTemp1(temp1);
        updateTemp2(temp2);
        updateTemp3(temp3);
        updateTemp4(temp4);
        updateTemp5(temp5);
    })



//-----------------------------------------------------
// HELPER FUNCTIONS
//-----------------------------------------------------

function checkStatus(response) {   // http 통신 에러 체크
    if (response.ok) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
}

function updateTemp1(data){
    const place1 = document.querySelector('.hae-dong');
    const currentTemp1 = `${data}`;
    place1.innerHTML = currentTemp1;
}

function updateTemp2(data){
    const place2 = document.querySelector('.out-2f');
    const currentTemp2 = `${data}`;
    place2.innerHTML = currentTemp2;
}
function updateTemp3(data){
    const place3 = document.querySelector('.laptop-2f');
    const currentTemp3 = `${data}`;
    place3.innerHTML = currentTemp3;
}
function updateTemp4(data){
    const place4 = document.querySelector('.out-3f');
    const currentTemp4 = `${data}`;
    place4.innerHTML = currentTemp4;
}

function updateTemp5(data){
    const place5 = document.querySelector('.in-3f');
    const currentTemp5 = `${data}`;
    place5.innerHTML = currentTemp5;
}
