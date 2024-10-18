function Somar() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    let soma = num1 + num2
    if(num1 || num2 == Number){
    resp.innerHTML = `O resultado de ${num1} + ${num2} = ${soma}`
    window.location.reload();
}else{
    alert('Somente número, Tente Novamente!')
    window.location.reload();
    //Refresh na página
}
} 
function Subtrair() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    let subtração = num1 - num2
    if(num1 || num2 == Number){
    resp.innerHTML = `O resultado de ${num1} - ${num2} = ${subtração}`;
}else{
    alert('Somente número, Tente Novamente!')
    window.location.reload();
}
}
function Multiplicação() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    let multiplicação = num1 * num2
    if(num1 || num2 == Number){
    resp.innerHTML = `O resultado de ${num1} * ${num2} = ${multiplicação}`
}else{
    alert('Somente número, Tente Novamente!')
    window.location.reload();
}
}
function Divisão() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    num1 = Number(num1.value)
    num2 = Number(num2.value)
    let Divisão = num1 / num2
    if(num1 || num2 == Number){
    resp.innerHTML = `O resultado de ${num1} / ${num2} = ${Divisão}`
}else{
    alert('Somente número, Tente Novamente!')
    window.location.reload();
}
}

