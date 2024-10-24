import rl from "./util/input.js";

let aratus = true;
let aratuseKordamine = 0 

rl.on('line', () => { 
    aratus = false; 
    console.log(`Aratuskell helises ${aratuseKordamine} korda.`)
    rl.close();
}); 

while (aratus) { 
    console.log('Touse ja sara!'); 
    aratuseKordamine++
    await new Promise(resolve => setTimeout(resolve, 1000)); 
}