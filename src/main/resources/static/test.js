import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



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



//////////////////////////////////////////////////////////
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



const email = document.getElementById('id').value;
const password = document.getElementById('pw').value;
const form = document.querySelector('form');


//-----------------------------------------------------
// LOGIN FUNCTION
//-----------------------------------------------------

function login(){
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');

    if(id.value == "" || pw.value == "") {
        alert("Fill all the information.")
    }
}

class Login_Button extends Component {
    goTomain = () => {
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.props.idvalue,
                password: this.props.pwvalue,
            }),
        })
            .then(res => res.json())
            .then(result => {
                if (result.message === 'SUCCESS') {
                    this.props.history.push('/main');
                    window.localStorage.setItem('token', result.token);
                } else {
                    alert('잘못된 회원정보입니다.');
                }
            });
    };

    render() {
        const { idvalue, pwvalue } = this.props;

        return (
            <div className="button_box">
                <button
                    onClick={this.goTomain}
                >
                    로그인
                </button>
            </div>
        );
    }
}

export default withRouter(Login_Button);

//-----------------------------------------------------
// SIGN UP FUNCTION
//-----------------------------------------------------

class login_button extends Component{
    goTomain = () => {
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email: this.props.idvalue, password: this.props.pwvalue
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result.message === 'SUCCESS') {
                    alert('Sign Up Success!')
                } else {
                    alert('Something wrong in your information.');
                }
            });
    };
    render() {
        const { idvalue, pwvalue } = this.props;

        return (
            <div className="button_box">
                <button onClick={this.goTomain}>
                    로그인
                </button>
            </div>
        );
    }
}
export default withRouter(login_button);

function create_id(){
    let name = document.querySelector('#name');
    let id = document.querySelector('#id');
    let pw = document.querySelector('#pw');
    let r_pw = document.querySelector('#r_pw');

    if (name.value == "" || id.value == "" || pw.value == "" || r_pw.value == ""){
        alert("Fill all the information.")
    }
    else{
        if(pw.value !== r_pw.value) {
            alert("Please check your password.")
        }
    }
}