
const {readFile, writeFile} = require('fs');

//intento leer first.txt
//si hay error lo muestro en la consola y termino con return
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

    const first = result; //guardo el contenido de first.txt

    //sigo a leer second.txt
    //si hay error lo muestro en la consola y termino con return
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
    
        const second = result; //guardo el contenido de first.txt

        //ahora voy a escribir el texto     Here is the result :    
        //mas el contenido del fichero first.txt que esta en la variable first
        //mas el contenido del fichero second.txt que esta en la variable second
        //dentro del fichero result-async.txt
        //si no existe lo creo y si existe lo sobreescribo

        //si hay error lo muestro en la consola y termino con return
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if(err){
                  console.log(err);
                  return;  
                }
                console.log('done with this task');
            });
    });    
});

console.log('starting next task');




