import rl from "./util/input.js";

rl.question('Kas soovite istekoht valida ise või loosida: ', valik => {
    if(valik == 'ise'){
        rl.question('Kas soovite istuda akna ääres või mitte: ', koht => {
            if(koht == 'akken'){
                console.log('Valisite ise. Aknakoht.')
            } else if (koht == 'muu'){
                console.log('Valisite ise. Vahekäigukoht.')
            }
            rl.close()
        })
    }  else if (valik == 'loos'){
        if (Math.ceil(Math.random() * 3) == 1) {
            console.log('Koht loositi. Aknakoht.')
        } else {
            console.log('Koht loositi. Vahekäigukoht.')
        }
        rl.close()  
    } 
})