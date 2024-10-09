import rl from "./util/input.js";

rl.question('Sisestage enda vanus: ', vanus => {
    rl.question('Sisetage enda sugu (M, m või N, n): ', sugu => {
        if (sugu != 'M' || sugu != 'm' || sugu != 'N'|| sugu != 'n'){
            console.log('Sugu sümbol on vale.')
            rl.close()
            return
        }
        rl.question('Sisestage treening tüüp: (1, 2 või 3): ', trenn =>{
            let pulss
            
            if(sugu == 'M' || sugu == 'm'){
                pulss = 220 - vanus
            } else if(sugu == 'N' || sugu == 'n'){
                pulss = 206 - vanus * 0.88
            }

            let minPulss
            let maxPulss

            if(trenn == 1){
                minPulss = 0.5 * pulss
                maxPulss = 0.7 * pulss
            } else if(trenn == 2){
                minPulss = 0.7 * pulss
                maxPulss = 0.8 * pulss
            } else if(trenn == 3){
                minPulss = 0.8 * pulss
                maxPulss = 0.87 * pulss
            } else {
                console.log('Trenni number on vale.')
                rl.close()
                return
            } 

            maxPulss = Math.round(maxPulss)
            minPulss = Math.round(minPulss)

            console.log(`Pulsisagedus peab olema ${minPulss} kuni ${maxPulss}.`)

            rl.close()
        })
    })
})