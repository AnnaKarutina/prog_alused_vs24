const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Sisesta astme alus: ', astmeAlus => {
    rl.question('Sisesta astendaja: ', astendaja => {
        let result = astmeAlus ** astendaja
        console.log(result)
        rl.close()
    })
})

