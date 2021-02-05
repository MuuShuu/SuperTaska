const menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    const fisrstButton = document.getElementById('secondRound')
    fisrstButton.classList.remove('display_2')
});

let selectNumber;
const select = document.getElementById('select');
select.addEventListener('change', function(event){
     selectNumber = Number(event.target.value);
    
});

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function() {
    const secondButton = document.getElementById('thirdRound');
    secondButton.classList.remove('display_3');
    const inputName = document.getElementById('name');
    const inputValue = document.getElementById('value');
    const name = inputName.value;
    const value = inputValue.value;
    const nameCalculator = document.getElementById('nameCalculator');
    const inputValueNumber = document.getElementById('inputValue')
    nameCalculator.innerHTML = name;
    inputValueNumber.innerHTML = value;
    inputName.value = '';
    inputValue.value = '';
})


const plus = document.getElementById('plusButton');
plus.addEventListener('click', function(){
    const numberNow = Number(document.getElementById('inputValue').innerHTML);
    const newNumber = numberNow + selectNumber;
    document.getElementById('inputValue').innerHTML = newNumber;
});

const minus = document.getElementById('minusButton');
minus.addEventListener('click', function(){
    const numberNow = Number(document.getElementById('inputValue').innerHTML);
    const newNumber = numberNow - selectNumber;
    document.getElementById('inputValue').innerHTML = newNumber;
});


