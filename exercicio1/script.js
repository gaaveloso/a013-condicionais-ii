const num = Number(prompt("Digite um número:"))

//Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
if(num%2===0){
    console.log("O número digitado é divisivel por 2")
    if(num%3===0){
        console.log("O número digitado é divisivel também por 3")
    } else {
        console.log("O número digitado não é divisivel por 3")
    }
} else {
    if(num%3===0){
        console.log("O numero digitado é divisivel por 3")
    } else {
        console.log("O numero não é divisivel por 3")
    } 
    console.log("O número não é divisivel por 2")
}
