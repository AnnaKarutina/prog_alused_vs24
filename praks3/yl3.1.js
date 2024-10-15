import rl from "./util/input.js";

rl.question('Sisesta mitu korda äratada: ', mituKorda => {
    for(let kord = 1; kord <= mituKorda; kord++){
        console.log('Tõuse ja sära!')
    } 

    console.log('---------------------')

    let kord = 1
    while(kord <= mituKorda){
        console.log('Tõuse ja sära!')
        kord++
    } 
    
    rl.close()
})