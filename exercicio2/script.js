let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
        console.log("Você é brasileira.")
        break
    case "argentina":
        console.log("Você é argentina")
        break
    case "uruguaia":
        console.log("Você é uruguaia")
        break
    case "chilena":
        console.log("Você é chilena")
        break
    case "colombiana":
        console.log("Você é colombiana")
        break
    default:
        console.log("Nacionalidade não encontrada")
}