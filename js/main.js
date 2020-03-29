const name = 'Kacper';
const age = '75';

console.log(`Nazywam sie ${name} i mam ${age} lat`)

if (age < 20) {
    console.log('Masz mniej niż 20 lat');
} else if(( age > 20 && age <30)){
    console.log('masz wiecej niż 20 lat ale mniej niż 30');
}else if ((age > 30 && age < 40)){
    console.log('masz ponad 30 lat ale mnie niż 40');
}else {
    console.log(`jesteś 40+`)
}

if ('javascript != java') {
    console.log(`To prawda`)
}
if (!('javascript == java')) {
    console.log(`hi`)
}
// !false = true
// !true = false  
if (!('javascript == java')) {
    console.log(`hi`)
}

//SWITCH

switch (age) {
    case 21:
        console.log(`masz równo 21 lat`)
        break;
    case 30:
        console.log(`masz równo 30 lat`)
        break;
    default:
        console.log(`masz ${age} lat`)
        break;
}

//zapis skrócony (zmienna1>zmienna2)?console.log(`true`):console.log('false')

const amIold = (age > 70) ? 'yes' : 'no'
console.log(amIold)

//zapis pełny
let oldIndicator

if (age > 70) {
    oldIndicator = `yes`
}else {
    oldIndicator = `no`
}

console.log(oldIndicator)

//FUNKCJE

function calculate(x) {
    x = x + 3
    console.log(`tradycyjnie: ${x}`)
    return x * 7;
}

console.log(calculate(4))

// (Fat) arrow functions

const calculatefat = (x) => (x+3)*7;

console.log(calculatefat(3))

//Nawigacja 

const menuButton = document.querySelector('.menu__button--js');

menuButton.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible')

})