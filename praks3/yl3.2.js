import rl from "./util/input.js";

rl.question('Sisesta ringide arv ', ringideArv => {
    let porgandid = 0
    for(let ring = 1; ring <= ringideArv; ring++){
        if(ring % 2 == 0){
            porgandid = porgandid + ring
        }
    }
    console.log(`Porgandite koguarv on ${porgandid}`)
    rl.close()
})