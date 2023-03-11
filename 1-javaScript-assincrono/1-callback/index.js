function imprimirDado(dado){
    console.log(dado)
}

imprimirDado(1)
imprimirDado('lucas')
imprimirDado(true)
imprimirDado({cidade: 'ouro preto', habitantes: 8000})
imprimirDado([1,2,3,4,5])

function greeting(name) {
    alert('Olá ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
  }
  
  processUserInput(greeting);