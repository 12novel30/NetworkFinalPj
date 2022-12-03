const body = document.body;
document.body.addEventListener('click', () => {
    body .innerHTML = '<h1>Hello, World</h1>';
})

const btnUpdate = document.getElementById('btn-main');
btnUpdate.addEventListener('click', () => {

})

const items = document.getElementsByTagName('li');
items.addEventListener('click', () => {

})

const highlights = document.getElementsByClassName('highlight');
for (const highlight of highlights){
    highlight.style.backgroundColor='cornsilk';
}



btnUpdate.addEventListener('click', () => {
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');
    headline.textContent = input.value;
});




location.href = 'main.html';
