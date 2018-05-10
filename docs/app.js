function area() {
    let radius = document.getElementById('radius').value;
    let result = Math.round((Math.PI * Math.pow(radius, 2) * 10)) / 10;
    let stringResult = `El área de un círculo de radio ${radius} es ${result}`;
    publicResult('radiusCalc', stringResult);
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

// Aux Functions
function publicResult(parentId, text) {
    let elementResult = document.getElementById(parentId).lastElementChild;
    elementResult.classList.remove('disabled');
    return elementResult.innerHTML = text;
};