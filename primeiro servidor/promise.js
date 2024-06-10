function sum(x) {
   return new Promise((resolve, reject) => {
     if (Number(x) == NaN) {
        reject("Digita essa treta certa ai irmão!");
     }
     
    setTimeout(() => { 
       resolve (x + 500); 
    },3000)
   }) 
};

// sum(10).then((resultado) => {
//     console.log(resultado);
// })

async function main() {
    
    try{
        const resultado = await sum(100)
        console.log(resultado)
    } 
    catch(erro) {
        console.log(`Error: ${erro}`);
    }
}

main();