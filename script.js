function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const valueResult = document.querySelector(".value-result")

    if (min >= max) {
        valueResult.innerHTML= 'Erro! O número inserido no "entre" precisa ser menor que o "e"'
    }
    else {
        const result = Math.floor(Math.random() * (max - min +1)) + min;
        valueResult.innerHTML=`Seu número sorteado é: ${result}`
    }
}