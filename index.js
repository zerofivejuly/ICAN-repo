//===================================COPYRIGHT DATE======================================
const year = document.getElementById('year');
const thisYear = new Date().getFullYear();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;

//==============================TOGGLE BTW MAIN-SIGNIN AND MAIN-SIGN-UP=======================================
const acct1 = document.querySelector('#acct1');
const acct2 = document.querySelector('#acct2');
const mainSignIn = document.querySelector('.main-signin');
const mainSignUp = document.querySelector('.main-signup');
const main = document.querySelector('.main');


acct1.addEventListener('click', function() {
    mainSignIn.classList.add('signIn');
    mainSignUp.classList.add('signIn');
    main.style.margin = 'auto'
});

acct2.addEventListener('click', function() {
    mainSignIn.classList.remove('signIn');
    mainSignUp.classList.remove('signIn');
    main.style.margin = '15rem'
});
