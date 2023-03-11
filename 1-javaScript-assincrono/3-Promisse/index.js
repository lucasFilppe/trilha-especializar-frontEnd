console.log('pedidndo uber')

const promessa = new Promise((resolve, reject) => {
    return resolve('carro chegou')
})

console.log('aguardando')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))