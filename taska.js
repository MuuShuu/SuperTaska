const menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'name');
    const inputValue = document.createElement('input');
    inputValue.setAttribute('id', 'value');
    const numberSelect = document.createElement('select');
    numberSelect.setAttribute('id', 'select');
    numberSelect.add(new Option('1', 1));
    numberSelect.add(new Option('2', 2));
    numberSelect.add(new Option('3', 3));
    numberSelect.add(new Option('4', 4));
    numberSelect.add(new Option('5', 5));
    const checkboxValue = document.createElement('input');
    checkboxValue.setAttribute('type', 'checkbox');
    const nextStep = document.createElement('button');
    nextStep.innerHTML = 'Go to calculate';
    document.body.appendChild(inputName);
    document.body.appendChild(inputValue);
    document.body.appendChild(numberSelect);
    document.body.appendChild(checkboxValue);
    document.body.appendChild(nextStep);
    //тут нужно описать чекбокс

    nextStep.addEventListener('click', function(){
        const name = inputName.value;
        const value = inputValue.value;
        const newElementName = document.createElement('p');
        const newElementValue = document.createElement('p');
        newElementValue.setAttribute('id', 'number')
        newElementName.innerHTML = name;
        newElementValue.innerHTML = value;
        document.body.appendChild(newElementName);
        document.body.appendChild(newElementValue);
        inputName.value = '';
        inputValue.value = '';
        const plusButton = document.createElement('button');
        plusButton.setAttribute('id', 'plusButton')
        plusButton.innerHTML = 'Plus';
        document.body.appendChild(plusButton);
        const minusButton = document.createElement('button');
        minusButton.setAttribute('id', 'minusButton')
        minusButton.innerHTML = 'Minus';
        document.body.appendChild(minusButton);
        //const numberValue = Number(document.getElementById('number').innerHTML);
        
        const select = document.getElementById('select');
        const valueSelectBox = document.createElement('span')
        valueSelectBox.setAttribute('id', 'valueSelect')
        document.body.appendChild(valueSelectBox)
        
        select.addEventListener('change', function(event){
            const selectNumber = event.target.value
            document.getElementById('valueSelect').innerHTML = selectNumber
        });

        //const numberValue = Number(document.getElementById('number').innerHTML);
        //const valueSelectNow = Number(document.getElementById('valueSelect').innerHTML);
        const plus = document.getElementById('plusButton')
        plus.addEventListener('click', function(){
            const numberValue = Number(document.getElementById('number').innerHTML);
            const valueSelectNow = Number(document.getElementById('valueSelect').innerHTML);
            const newValue = numberValue + valueSelectNow;
            newElementValue.innerHTML = newValue
        });
        const minus = document.getElementById('minusButton')
        minus.addEventListener('click', function(){
            const numberValue = Number(document.getElementById('number').innerHTML);
            const valueSelectNow = Number(document.getElementById('valueSelect').innerHTML);
            const newValue = numberValue - valueSelectNow;
            newElementValue.innerHTML = newValue
        });
    })
});

