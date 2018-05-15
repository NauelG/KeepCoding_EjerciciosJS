function area() {
    let radius = document.getElementById('radius').value;
    let result = Math.round((Math.PI * Math.pow(radius, 2) * 10)) / 10;
    let stringResult = `El área de un círculo de radio ${radius} es ${result}`;
    publicResult('radiusCalc', stringResult);
    return false;
}

function operate() {
    let a = document.getElementById('valueA').value;
    let b = document.getElementById('valueB').value;
    let stringResult = `${a} + ${b} = ${a+b} | ${a} - ${b} = ${a-b} | ${a} x ${b} = ${a*b} | ${a} / ${b} = ${a/b} | ${a} ** ${b} = ${a**b} | ${a} % ${b} = ${a%b}`;
    publicResult('operations', stringResult);

}

function convertCurrent() {
    let eurValue = document.getElementById('currentInput').value;
    let stringResult = `${eurValue}€ equivale a $${Math.round((1.006*eurValue)*100)/100} USD`;
    publicResult('convertCurrent', stringResult);
}

function average() {
    let a = Number(document.getElementById('average1').value);
    let b = Number(document.getElementById('average2').value);
    let c = Number(document.getElementById('average3').value);
    let stringResult = `La media entre los valores ${a},${b} i ${c} es ${Math.round(((a+b+c)/3)*10)/10}`;
    publicResult('average', stringResult);
}

function compareDate() {
    let dateA = new Date(document.getElementById('date1').value);
    let dateB = new Date(document.getElementById('date2').value);
    let valid = false;
    if (dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear()) valid = true;
    let stringResult;
    if (valid) stringResult = 'Los meses y los años coinciden';
    else stringResult = 'Los meses y los años no coinciden';
    publicResult('compareDate', stringResult);
}

function compareValues() {
    let a = Number(document.getElementById('compareValue1').value);
    let b = Number(document.getElementById('compareValue2').value);
    let stringResult = `Resultados de las comparaciones: ${a}<${b} -> ${a<b} | ${a}>${b} -> ${a>b} | ${a}=${b} -> ${a===b} | ${a}≠${b} -> ${a!==b}`;
    publicResult('compareValues', stringResult);
}

function averageResult() {
    let a = Number(document.getElementById('averageResult1').value);
    let b = Number(document.getElementById('averageResult2').value);
    let c = Number(document.getElementById('averageResult3').value);
    let average = (a + b + c) / 3;
    let result;
    if (average < 5) result = 'No Apto';
    else result = 'Apto';

    publicResult('averageResult', result);
}

function intType() {
    let int = Number(document.getElementById('intValue').value);
    let type;
    if (int < 0) {
        if (int % 2 === 0) type = 'Negativo par';
        else type = 'Negativo impar';
    } else if (int > 0) {
        if (int % 2 === 0) type = 'Positivo par';
        else type = 'Positivo impar';
    } else type = 'Cero';

    publicResult('intType', type);
}

function selectCurrent() {
    let value = Number(document.getElementById('currentValue').value);
    let operation = document.getElementById('convertType').value;
    let stringResult;
    if (operation === 'eurUsd') stringResult = `${value}€ equivale a $${Math.round((1.006*value)*100)/100} USD`;
    else stringResult = `$${value} USD equivale a ${Math.round((value/1.006)*100)/100}€`;

    publicResult('selectCurrent', stringResult);
}

function starWarsMovie() {
    let movie = document.getElementById('movieNumber').value;
    let stringResult;
    if (movie === '1' || movie === 'I') stringResult = 'StarWars I - La amenaza fantasma';
    else if (movie === '2' || movie === 'II') stringResult = 'StarWars II - El ataque de los clones';
    else if (movie === '3' || movie === 'III') stringResult = 'StarWars III - La venganza de los Sith';
    else if (movie === '4' || movie === 'IV') stringResult = 'StarWars IV - Una nueva esperanza';
    else if (movie === '5' || movie === 'V') stringResult = 'StarWars V - El imperio contraataca';
    else if (movie === '6' || movie === 'VI') stringResult = 'StarWars VI - El retorno del Jedi';
    else if (movie === '7' || movie === 'VII') stringResult = 'StarWars VII - El despertar de la Fuerza';
    else if (movie === '8' || movie === 'VIII') stringResult = 'StarWars VIII - Los últimos Jedi';
    else stringResult = 'La película introducida no es válida';

    publicResult('starWarsMovie', stringResult);
}

// Aux Functions
function publicResult(parentId, text) {
    let elementResult = document.getElementById(parentId).lastElementChild;
    elementResult.classList.remove('disabled');
    return elementResult.innerHTML = text;
};