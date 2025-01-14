const btn = document.querySelector('#btn');
const eBtn = document.querySelector('#e_btn');
const input = document.querySelector('#text');
const inputRange = document.querySelector('#range')
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');

const colorChange = function () {
    const color = input.value;
    square.style.backgroundColor = color;
    
}
const circleSize = function () { 
    const size = inputRange.value;
    circle.style.width = size + '%';
    circle.style.height = size + '%';
};
eBtn.style.display = 'none';

btn.addEventListener('click', colorChange);
inputRange.addEventListener('input', circleSize)



