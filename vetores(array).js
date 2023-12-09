//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;

// indice = 0 1 2 3 4 
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o indice 10 no array 

console.log(`
    ${valores[0]}
    ${valores[3].toFixed(1)} //limita as casas decimais em 2 após a virgula
    ${valores[10]}
    ${valores}
    ${valores.length} //extensão do nosso array (numeral)}

`)

//*************************Implementar métodos de Array********************************************/

// metodos de array 1 
// push -> utilizado para adicionar itens no array (sempre na última posição!)
const pushArray =['girafa', 'leao', 'coala', 'camaleao',]

console.log(pushArray.length);

//adicionando valores 
pushArray.push("caramelo do alex auau")
pushArray.unshift("animal01")


console.log (pushArray.length)

// 2- pop -> remove o último item do array
const popArray = ['andre', 'leonardo', 'ana', 'beatriz']

console.log(popArray);

//remove o ultimo valor do array
popArray.pop();

popArray.shift();

console.log (pushArray);


//3- delete
const deleteArray = ['banana','maça','pera','uva','salada mista']

console.log (deleteArray);

delete deleteArray[1]


console.log(deleteArray);

//splice => substituir valores 

//           metodo indice          quantidade de valor                   novo valor 
deleteArray.splice (    1 ,                  1                 ,               'melão')

console.log(deleteArray);

//4 - filter -> funções
//                     0   1    2   3   4   5 

const filterArray = [ 1 , 50 , 20 , 35 , 60 ]

console.log (filterArray);

const arrayfiltrado = filterArray.filter ( (findArray) => {

    //bloco de execução 

return findArray > 20 

} )

console.log (arrayfiltrado);


// saida de dados 
console.log (arrayfiltrado);

// 5- map -> modifica o array existente -> criar um novo array modificado -> funções 

const mapArray =  [10 , 20 , 25 , 30 , 35]

// inicio modificação array 

const arraymodificado = mapArray.map((mapArrayModificado) => {

    return mapArrayModificado * 2
    
})

console.log (mapArray)
console.log (arraymodificado);

//6- foreach ->

const forArray = ['jubileu', 'eyk', 'jabes', 'ane']

forArray.forEach((listaArray) => {

    return console.log(listaArray)

})

// 7 - Sort

// Crie e um array de nomes e em  seguira organize eles em ordem alfabética 
const sortArray = ['janeiro', 'fevereiro', 'março', 'abril','maio','junho']

console.log(sortArray);

const arraysortNumber = [10 , 234, 542, 871, 1050]

arraysortNumber.sort()

console.log(arraysortnumber);
