
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
            const most1 = data[0].most;
            const temp2 = data[1].tmp;
            const most2 = data[1].most;
            const temp3 = data[2].tmp;
            const most3 = data[2].most;
            const temp4 = data[3].tmp;
            const most4 = data[3].most;
            const temp5 = data[4].tmp;
            const most5 = data[4].most;

        updateTemp1(temp1);
        updateMost1(most1);
        updateTemp2(temp2);
        updateMost2(most2);
        updateTemp3(temp3);
        updateMost3(most3);
        updateTemp4(temp4);
        updateMost4(most4);
        updateTemp5(temp5);
        updateMost5(most5);
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
    place1.innerHTML = `${data}`;
}
function updateMost1(data){
    const most1 = document.querySelector('.vote-status-1');
    most1.innerHTML = `${data}`;
}

function updateTemp2(data){
    const place2 = document.querySelector('.out-2f');
    place2.innerHTML = `${data}`;
}
function updateMost2(data){
    const most2 = document.querySelector('.vote-status-2');
    most2.innerHTML = `${data}`;
}



function updateTemp3(data){
    const place3 = document.querySelector('.laptop-2f');
    place3.innerHTML = `${data}`;
}
function updateMost3(data){
    const most3 = document.querySelector('.vote-status-3');
    most3.innerHTML = `${data}`;
}

function updateTemp4(data){
    const place4 = document.querySelector('.out-3f');
    place4.innerHTML = `${data}`;
}
function updateMost4(data){
    const most4 = document.querySelector('.vote-status-4');
    most4.innerHTML = `${data}`;
}

function updateTemp5(data){
    const place5 = document.querySelector('.in-3f');
    place5.innerHTML = `${data}`;
}
function updateMost5(data){
    const most5 = document.querySelector('.vote-status-5');
    most5.innerHTML = `${data}`;
}
