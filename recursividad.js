function recursiva(){
    if(validacion){
     //llamados recursivos
    }else{
        // llamados normales, sin recursividad
    }
}

function recursiva (numerito){
    console.log(numerito);

    if(numerito<5){
        return recursiva(numerito+1);
    }else{
        return 5;
    }
}